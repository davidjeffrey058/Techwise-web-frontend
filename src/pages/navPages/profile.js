import { Link } from "react-router-dom";
import useAuthState from '../../methods/authState';
import { signOut } from "firebase/auth";
import auth from "../../services/firebase";

const Profile = () => {
    const { authUser } = useAuthState();
    console.log(authUser);
    const options = [
        { icon: 'orders', label: 'My Oders' },
        { icon: 'local_activity', label: 'Vouchers', },
        { icon: 'history', label: 'Recently Viewed' },
        { icon: 'inbox', label: 'Inbox' }
    ];
    return (
        <div className="bdy prf">

            {/* User information section */}
            <div className="user_details_row">
                <div className="profile_picture_container">
                    <img src={authUser ? authUser.photoURL : ''} alt="" width={'100%'} height={'100%'} />
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
            <br />

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
            <br />
            {authUser && <button className="add"
                style={{
                    padding: '15px',
                    fontSize: '15px',
                    width: '110px',
                    alignSelf: 'center'
                }} onClick={() => signOut(auth)}>Log Out</button>}

        </div>
    );
}

export default Profile;