
const AppBar = ({ title, action, leading }) => {
    return (
        <div className="app_bar">
            {leading}
            <p style={{ marginLeft: leading && '20px', marginRight: 'auto' }}>{title}</p>
            {action}
        </div>
    );
}

export default AppBar;