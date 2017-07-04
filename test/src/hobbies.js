 import React, {Component} from 'react';
 
 class Hobbies extends Component {

  render () {
    return (
        <div>
            <div className="row text-center">
                <h3>Hobbies</h3>
                <p>Out of work, here's what i enjoy the most!</p>
            </div>
            <section className="container">
                <div className="row">
                <div className="col-sm-3 col-xs-6">
                    <div className="block">
                    <i className="fa fa-android bigger-icon"></i>
                    <h4>Crossfit</h4>
                    <p>Started with crossfit about a year ago and enjoyed it as much since.</p>
                    </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                    <div className="block">
                    <i className="fa fa-camera bigger-icon"></i>
                    <h4>Photo's</h4>
                    <p>Proud owner of hx400v. I really enjoy making nice pictures while traveling</p>
                    </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                    <div className="block">
                    <i className="fa fa-globe bigger-icon"></i>
                    <h4>traveling</h4>
                    <p>I like to travel. Travel as much as i can when i can.</p>
                    </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                    <div className="block">
                    <i className="fa fa-gamepad bigger-icon"></i>
                    <h4>Gaming</h4>
                    <p>Whenever i got some spare time, i like to play some games like diablo</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )}}
    export default Hobbies;