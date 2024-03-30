/* eslint-disable react/prop-types */
import logo from '../../assets/logo.webp';
import './navbar.styles.css'

function Navbar({screen, isAuthenticated, onSignOut, handleSetScreen}) {
    return (
        <div className="navbar">
            <img width={32} height={32}  src={logo} alt="" />
            <h2 className="title">
                Insightful Explorers
            </h2>
            <div className="navbar-items">
                {
                    !isAuthenticated ? (
                        <div className="items">
                            <h3
                                className="item"
                                onClick={() => handleSetScreen('SIGN_UP')}
                                style={{ color: screen === 'SIGN_UP' && 'red'}}
                            >
                                Sign Up
                            </h3>
                            <h3
                                className="item"
                                onClick={() => handleSetScreen('SIGN_IN')}
                                style={{ color: screen === 'SIGN_IN' && 'red'}}
                            >
                                Sign In
                            </h3>
                        </div>
                )
                        : (
                            <div className="items">
                                <h3
                                    className="item"
                                    onClick={() => handleSetScreen('HOME')}
                                    style={{ color: screen === 'HOME' && 'red'}}
                                >
                                    Home
                                </h3>
                                <h3
                                    className="item"
                                    onClick={() => handleSetScreen('PROFILE')}
                                    style={{ color: screen === 'PROFILE' && 'red'}}
                                >
                                    Profile
                                </h3>
                                <h3
                                    className="item"
                                    onClick={onSignOut}
                                >
                                    Sign out
                                </h3>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar;