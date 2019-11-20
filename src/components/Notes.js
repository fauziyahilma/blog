import React, { Component } from 'react';
import Category from './sections/Category';
import Noteitem from './sections/Note-item';
import data from './../data.json';

class Notes extends Component {

    componentDidMount() {
        window.scrollTo(0, 200);
    }

    render() {
        return (
            <React.Fragment>



                <section id="recent" className="recent">
                    <div className="container">
                        <h5 className="section-title">
                            RECENT NOTES
                        </h5>
                        {data.map((item, index) => {

                            return <>
                                <div className="row note-list">
                                    <Noteitem img={item.img} title={item.title} insight={item.insight} />
                                </div>
                            </>
                        })
                        }
                    </div>
                </section>

                <section>
                    <div className="container">
                        <Category />
                    </div>
                </section>
            </React.Fragment>
        )
    }
}


export default Notes