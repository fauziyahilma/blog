import React, { Component } from 'react';
import Category from './sections/Category';
import Featured from './sections/Featured';
import About from './sections/About';

class Home extends Component {

    render() {

        return (
            <React.Fragment>
                <section>
                    <div className="container">
                        <Category />
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Featured />
                    </div>
                </section>
                <section id="about">
                    <div className="container">
                        <About />
                    </div>
                </section>
            </React.Fragment>


        )
    }
}

export default Home