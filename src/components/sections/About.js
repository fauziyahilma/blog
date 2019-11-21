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
                        <h6>ABOUT ME AND THIS BLOG</h6>
                    </div>
                    <p>
                        I write mostly anything that stays inside my mind for too long: critical thoughts, random questions, leftover feelings, anything. I also write computer code but I'm not planning to post them here. 
                    </p>
                    <p>
                        Please leave me message if you have mutual thoughts, or if you have answers to my curiosities. Click the contact menu on the right corner of this page to get my contact details. Ciao!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About