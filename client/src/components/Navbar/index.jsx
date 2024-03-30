/* eslint-disable react/prop-types */
import './navbar.styles.css'
function Navbar({screen, isAuthenticated, onSignOut, handleSetScreen}) {
    return (
        <div className="navbar">
            <h2 className="title">
                Survey Form
            </h2>
            <div className="navbar-items">
                <h3
                    className="item"
                    onClick={() => handleSetScreen('HOME')}
                    style={{ color: screen === 'HOME' && 'red'}}
                >
                    Home
                </h3>
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
                                    onClick={() => handleSetScreen('SURVEYS')}
                                    style={{ color: screen === 'SURVEYS' && 'red'}}
                                >
                                    Surveys
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