import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy'

class HeaderNav extends Component {
        state = {
            test: ''
        };

        kak = (e) => {
            console.log('kak', e)
        }
        render(){
            window.addEventListener('scroll', (event) =>{
                let scroll = event.srcElement.body.scrollTop;
                if(this.state.test === '') {
                    if(scroll >= 100 ) {
                        this.setState({test: 'scroll-down'});
                    }
                } else if (this.state.test === 'scroll-down') {
                    if(scroll < 100) {
                        this.setState({test: ''});
                    }
                }
            });
            return(
                <header className="container-fluid sdm-bg" id="home">
                    <div className="row">
                    <div className="overlay"></div>
                         <Scrollspy items={ ['home', 'portfolio', 'skills', 'about', 'hobbies'] } className={'nav nav-pills menu-center margin-top-30 scroll-nav ' + this.state.test} currentClassName="active-menu">
                        <li role="presentation">
                            <a href="#home"><i className="fa fa-home"></i></a>
                        </li>
                            <li role="presentation">
                            <a href="#portfolio">Portfolio</a>
                        </li>
                            <li role="presentation">
                            <a href="#skills">skills</a>
                        </li>
                            <li role="presentation">
                            <a href="#about">About</a>
                        </li>
                            <li role="presentation">
                            <a href="#hobbies">hobbies</a>
                        </li>
                            <li role="presentation">
                            <a href="#contact_me">Contact</a>
                        </li>
                         </Scrollspy>
                    <img src="images/profile.png" className="margin-top-76 img-circle center-block profile_picture" alt="profile"/>
                    <h1 className="text text-center">Eric v/d Helm</h1>
                    <h3 className="text-capitalize text-center">Front-end genius</h3>
                    <hr />
                    </div>
                    <div className="text-center margin-bottom-135">
                    <ul className="social-networks spin-icon">
                        <li><a href="#" className="icon-facebook"></a></li>
                        <li><a href="#" className="icon-linkedin"></a></li>
                        <li><a href="#" className="icon-instagram"></a></li>
                    </ul>
                    </div>
                </header>
        )
    }
}


export default HeaderNav;