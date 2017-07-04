import React, {Component} from 'react';
import LazyLoad from 'react-lazy-load';


class Skills extends Component {
    render() {
        return(
           <div className="row">
                <div className="">
                    <h3 className="text-center">SKilllzzzz</h3>
                </div>
                    <LazyLoad height={280} offsetTop={10} onContentVisible={() => console.log('look ma I have been lazyloaded!')}>
                <section className="container">
                    <div className="row">
                        <div className="col-md-2 col-md-offset-1 col-xs-4">
                            <figure className="chart chart-left-right" data-percent="50">
                                <figcaption className="chart-title">Java</figcaption>
                                <svg width="100" height="100">
                                    <circle className="outer-back" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>    
                                    <circle className="outer" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>
                                </svg>
                            </figure>
                        </div>
                        <div className="col-md-2 col-xs-4">
                            <figure className="chart chart-left-right" data-percent="75">
                                <figcaption className="chart-title">UX</figcaption>
                                <svg width="100" height="100">
                                    <circle className="outer-back" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>    
                                    <circle className="outer" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>
                                </svg>
                            </figure>
                        </div>
                        <div className="col-md-2 col-xs-4">
                            <figure className="chart chart-left-right" data-percent="50">
                                <figcaption className="chart-title">CSS</figcaption>
                                <svg width="100" height="100">
                                    <circle className="outer-back" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>    
                                    <circle className="outer" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>
                                </svg>
                            </figure>
                        </div>
                        <div className="col-md-2 col-xs-4">
                            <figure className="chart chart-left-right" data-percent="25">
                                <figcaption className="chart-title">Android</figcaption>
                                <svg width="100" height="100">
                                    <circle className="outer-back" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>    
                                    <circle className="outer" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>
                                </svg>
                            </figure>
                        </div>
                        <div className="col-md-2 col-xs-4">
                            <figure className="chart chart-left-right" data-percent="75">
                                <figcaption className="chart-title">Javascript</figcaption>
                                <svg width="100" height="100">
                                    <circle className="outer-back" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>    
                                    <circle className="outer" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>
                                </svg>
                            </figure>
                        </div>
                    </div>
                     <div className="row">
                        <div className="col-md-2 col-md-offset-1 col-xs-4">
                            <figure className="chart chart-right-left" data-percent="75">
                                <figcaption className="chart-title">Angular</figcaption>
                                <svg width="100" height="100">
                                    <circle className="outer-back" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>    
                                    <circle className="outer" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>
                                </svg>
                            </figure>
                        </div>
                        <div className="col-md-2 col-xs-4">
                            <figure className="chart chart-right-left" data-percent="50">
                                <figcaption className="chart-title">Reactjs</figcaption>
                                <svg width="100" height="100">
                                    <circle className="outer-back" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>    
                                    <circle className="outer" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>
                                </svg>
                            </figure>
                        </div>
                        <div className="col-md-2 col-xs-4">
                            <figure className="chart chart-right-left" data-percent="75">
                                <figcaption className="chart-title">jQuery</figcaption>
                                <svg width="100" height="100">
                                    <circle className="outer-back" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>    
                                    <circle className="outer" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>
                                </svg>
                            </figure>
                        </div>
                        <div className="col-md-2 col-xs-4">
                            <figure className="chart chart-right-left" data-percent="100">
                                <figcaption className="chart-title">HTML</figcaption>
                                <svg width="100" height="100">
                                    <circle className="outer-back" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>    
                                    <circle className="outer" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>
                                </svg>
                            </figure>
                        </div>
                        <div className="col-md-2 col-xs-4">
                            <figure className="chart chart-right-left" data-percent="25">
                                <figcaption className="chart-title">SEO</figcaption>
                                <svg width="100" height="100">
                                    <circle className="outer-back" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>    
                                    <circle className="outer" cx="140" cy="50" r="35" transform="rotate(-90, 95, 95)"/>
                                </svg>
                            </figure>
                        </div>
                    </div>
                </section>
                    </LazyLoad>
           </div>
        )
    }
}

export default Skills;