import React from 'react'
import '../css/bootstrap-4.3.1-dist/css/bootstrap.min.css'
import '../css/font.css'
import console_image from '../images/console_image.png'
import { BrowserRouter as Route, Redirect, withRouter,useHistory } from 'react-router-dom';
import NavBar from './Navbar';
import '../css/style.css'
function Home() {

    let history=useHistory();

    const redirectToTarget =() =>{
        history.push('/site');
    }

    return (
        <div>
        
        <div className="container-fluid main-block-home">
        <div className="container-fluid heading-block">
        
            <div className="container-fluid">
                    <NavBar />
                <div className="row content-block">
                  
                  <div className="col-sm-9 col-md-6 col-lg-8">
                    <div className="heading-text-block">
                        <div className="heading-text">
                            Privacy Policy Analyzer Site
                        </div>
                        <div className="secondary-text">
                            A website to help user understand privacy policy
                        </div>
                        <button className="button btn1" onClick={ redirectToTarget }>
                            Go to site
                        </button>
                    </div>
                  </div>
                  <div className="col-sm-3 col-md-6 col-lg-4">
                    <div className="container-fluid image-block">
                        <img className="img-fluid console-image" src={ console_image } alt="console_image" />
                    </div>
                  </div>

                </div>
              </div>
        </div>
        <div className="second-block">
                <div className="second-block-color">
                    How site works:
                </div>
                <div>
                    Select Website from drop down 
                </div>
        </div>
        <div className="third-block">
                <div className="container-fluid">
                    <div className="tldr-heading">
                        TLDR;
                    </div>
                    <div className="tldr-text1">
                        Too long Didn't Read
                    </div>
                    <div className="tldr-text2">
                        "Average word count of privacy policy is 5372 words."
                    </div>
                    <div className="tldr-text3">
                        Our Website helps you with that
                    </div>
                </div>
        </div>
    </div>
        </div>
    )
}

export default withRouter(Home)