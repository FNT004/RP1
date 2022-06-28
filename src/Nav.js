
import logo from  './images/logo192.png';
import './index.css';

function Nav () {
    return (
        <div>
            <nav className='nav-bar'>
                <div className='nav-left'>
                    <img src = {logo} className = "nav-logo"/>
                    <h3>React</h3>
                </div>

                <div className='nav-right'>
                    <h3>Project</h3>
                    <h3>One</h3>
                </div>
            </nav>
        </div>
    );
}
export default Nav;