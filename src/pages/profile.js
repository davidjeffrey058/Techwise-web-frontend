const Profile = () => {
    const options = ['My Oders', 'Vouchers', 'Recently Viewed', 'Inbox'];
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
                {options.map((element) => (
                    <div className="option">
                        <i>ic</i>
                        <div className="nm_hr_arr">
                            <div>
                                <p>{element}</p>
                                <i>arr</i>
                            </div>
                            {options.indexOf(element) !== options.length - 1 && <hr color="grey" />}
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <div className="options_container">
                {options.map((element) => (
                    <div className="option">
                        <i>ic</i>
                        <div className="nm_hr_arr">
                            <div>
                                <p>{element}</p>
                                <i>arr</i>
                            </div>
                            {options.indexOf(element) !== options.length - 1 && <hr color="grey" />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;