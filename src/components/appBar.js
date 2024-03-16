import { Link } from 'react-router-dom';

const AppBar = ({ title }) => {
    return (
        <div className="app_bar">
            <p>{title}</p>
            <Link to={'/cart'} className='link'>
                <i className="material-symbols-outlined">Shopping_cart</i>
            </Link>

        </div>
    );
}

export default AppBar;