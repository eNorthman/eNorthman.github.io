import React, {Component} from 'react';

class SubNav extends Component {
    state = {
        active: 'all'
    }
    render() {
        const {showBlocks} = this.props;
        this.getFilter = (state) => {
            return 'btn ' + (this.state.active === state ? 'programs-btn-active' : '');
        }

        this.setFilter = (state) => {
            this.setState({active: state});
            showBlocks.forEach((b) => {
            if(state === 'all' || b.cat === state) {
                b.show = true;
            } else {
                b.show = false;
            }
            });
            showBlocks.sort((a,b) => {
                return (a.show === b.show)? 0 : a.show ? -1 : 1;
            })
        };
        return(
            <div className="row">  
                <div className="col-sm-10 col-sm-offset-1 position-absolute">
                    <div className="text-center filter-btns">
                    <ul className="nav nav-pills">
                        <li role="presentation">
                            <button type="button" className={this.getFilter('all')} onClick={()=> this.setFilter('all')}>All</button>
                        </li>
                        <li role="presentation">
                            <button type="button" className={this.getFilter('webb')} onClick={()=> this.setFilter('webb')} data-mixitup-control>Web</button>
                        </li>
                        <li role="presentation">
                            <button type="button" className={this.getFilter('mobile')} onClick={()=> this.setFilter('mobile')} data-mixitup-control>Mobile</button>
                        </li>
                    </ul>
                    </div>
                    <div className="row" id="mix-wrapper">
                    <div id="effect-5">
                        {showBlocks.map((datad, index) => 
                            { if(index <=5){
                                return <div key={index} className={'col-md-4 col-xs-6 mix-target '+ (datad.show ? 'vaag': 'vaag1')}>
                                    <figure>
                                    <img src="images/profile.png" alt=""/>
                                    <figcaption>
                                        <a href="#">
                                        <h3>Test Web App concept</h3>
                                        <hr />
                                        <p>{datad.detail}</p>
                                        </a>
                                    </figcaption>
                                    </figure>
                                </div>
                            } return null}
                        )}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubNav;