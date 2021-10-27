import React from 'react'
import LoginPage from './LoginPage'
import '../css/main.css'
import skel from '../images/landingimage.svg'

function LandingPage() {
    return (
        <div className="landing">
            <div className="landing__first">
                <div className="landing__first-container">
                    <img src={skel} alt="danger" className="landing__image" />
                </div>
                <div className="landing__footer">
                      <h2 className="landing__footer--big">Turn your ideas into reality.</h2>
                      <p className="landing__footer--small">Start for free and get attractive offers from the community</p>
                </div>
                
            </div>
            <div className="landing__second">
                <LoginPage />
            </div>
        </div>
    )
}

export default LandingPage
