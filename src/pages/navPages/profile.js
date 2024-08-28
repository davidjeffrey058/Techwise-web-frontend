import { Link } from "react-router-dom";
import useAuthState from '../../methods/authState';
import { signOut } from "firebase/auth";
import auth from "../../services/firebase";
import SplitName from "../../methods/splitName";

const Profile = () => {
    const { authUser } = useAuthState();
    const options = [
        { icon: 'orders', label: 'My Oders' },
        { icon: 'local_activity', label: 'Vouchers', },
        { icon: 'history', label: 'Recently Viewed' },
        { icon: 'inbox', label: 'Inbox' }
    ];

    const options2 = [
        { icon: 'House', label: 'Address Management' },
        { icon: 'Support_Agent', label: 'Service Center' },
        { icon: 'Rate_Review', label: 'Rate & Reviews' }
    ]

    return (
        <div className="bdy prf">
            <div className="aft_head">
                {/* User information section */}
                <div className="user_details_row">
                    <div className="profile_picture_container row"
                        style={{
                            backgroundImage: authUser ? `url(${authUser.photoURL})` : 'url(profile.png)',
                            backgroundColor: authUser && !authUser.photoURL ? 'orange' : ''
                        }}>
                        {/* <img 
                        src={authUser ? authUser.photoURL || '' : 'profile.png'} 
                        alt="" 
                        width={'100%'} height={'100%'} 
                        style={}/> */}
                        <p style={{
                            fontSize: '45px',
                            color: 'white',
                            fontWeight: 'bold'
                        }}>{(authUser && !authUser.photoURL && authUser.displayName) && SplitName(authUser.displayName)}</p>
                    </div>
                    <div className="user_info">
                        {authUser ? <div>
                            <h2>{authUser.displayName}</h2>
                            <p>{authUser.email}</p>
                            <button>EDIT PROFILE</button>
                        </div> :
                            <Link to={'/auth'}>
                                <button>Login</button>
                            </Link>}
                    </div>

                </div>

                <div className="prf_options">
                    <div className="options_container">
                        {options.map((element, index) => (
                            <div className="option hover" key={index}>
                                <i className="material-symbols-outlined">{element.icon}</i>
                                <div className="nm_hr_arr">
                                    <div>
                                        <p>{element.label}</p>
                                        <i className="material-symbols-outlined">chevron_right</i>
                                    </div>
                                    {options.indexOf(element) !== options.length - 1 && <hr color="grey" />}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <br /> */}

                    <div className="options_container">
                        {options2.map((element, index) => (
                            <div className="option hover" key={index}>
                                <i className="material-symbols-outlined">{element.icon}</i>
                                <div className="nm_hr_arr">
                                    <div>
                                        <p>{element.label}</p>
                                        <i className="material-symbols-outlined">chevron_right</i>
                                    </div>
                                    {options2.indexOf(element) !== options2.length - 1 && <hr color="grey" />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {authUser && <button className="add"
                    style={{
                        padding: '15px',
                        fontSize: '15px',
                        width: '110px',
                        alignSelf: 'center'
                    }} onClick={() => signOut(auth)}>Log Out</button>}
            </div>



        </div>
    );
}

export default Profile;