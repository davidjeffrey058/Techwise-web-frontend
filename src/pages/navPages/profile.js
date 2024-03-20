import { Link } from "react-router-dom";

const Profile = () => {
    const options = [{ icon: 'orders', label: 'My Oders' }, { icon: 'local_activity', label: 'Vouchers', }, { icon: 'history', label: 'Recently Viewed' }, { icon: 'inbox', label: 'Inbox' }];
    return (
        <div className="bdy prf">

            {/* User information section */}
            <div className="user_details_row">
                <div className="profile_picture_container">
                    <img src="" alt="" />
                </div>
                <div className="user_info">
                    <h2>David Jeffrey</h2>
                    <p>davidjeffrey058@gmail.com</p>
                    <button>EDIT PROFILE</button>
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
            <Link to='/login' style={{ alignSelf: 'center', }}>
                <button className="add"
                    style={{
                        padding: '10px 25px',
                        fontSize: '13px'
                    }}>Log Out</button>
            </Link>

        </div>
    );
}

export default Profile;