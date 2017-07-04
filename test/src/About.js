import React, {Component} from 'react';
import LazyLoad from 'react-lazy-load';

class About extends Component {
    render() {
        return(
            <div className="row">
                 <LazyLoad height={300} offsetTop={10} onContentVisible={() => console.log('look ma I have been lazyloaded!')}>
                <div className="col-md-10 col-md-offset-1">
                    <ul className="timeline">
                        <li>
                            <div className="tl-icon">
                                <i className="fa fa-briefcase icon"></i>
                            </div>
                            <div className="timelabel">
                                <h3>Hallo</h3>
                                <div className="date">
                                    <i className="fa fa-calendar"></i>
                                    April 2014 - current
                                </div>
                                <h4>TEst bedrijf</h4>
                                <p>asdsadasdsadassdsasahjdlakjdlkajdlkajdlkajdlkajdalkjsldkajdalaksjdalksj</p>
                            </div>
                        </li>
                        <li>
                            <div className="tl-icon">
                                <i className="fa fa-briefcase icon"></i>
                            </div>
                            <div className="timelabel">
                                <h3>Hallo</h3>
                                <div className="date">
                                    <i className="fa fa-calendar"></i>
                                    April 2014 - current
                                </div>
                                <h4>TEst bedrijf</h4>
                                <p>asdsadasdsadassdsasahjdlakjdlkajdlkajdlkajdlkajdalkjsldkajdalaksjdalksj</p>
                            </div>
                        </li>
                    </ul>
                    <button className="btn btn-orange">Load more</button>
                </div>
                </LazyLoad>
            </div>
        )
    }
}

export default About;