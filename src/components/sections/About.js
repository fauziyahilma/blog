import React from 'react';
import IMG_20191114_221911 from './../../img/IMG_20191114_221911.jpg';

function About() {
    return (
        <div className="about">
            <div className="row">
                <div className="col s5">
                    <img src={IMG_20191114_221911} alt="" />
                </div>
                <div className="col s7 wrapper">
                    <div className="title-label title-about link">
                        <h6>ABOUT THIS BLOG AND AUTHOR</h6>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                </div>
            </div>
        </div>
    )
}

export default About