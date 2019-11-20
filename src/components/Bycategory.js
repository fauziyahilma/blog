import React, { Component } from 'react';
import Category from './sections/Category';
import Noteitem from './sections/Note-item';
import data from './../data.json';

class Bycategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category : (props.match.params.category)
        }

        console.log(this.state.category)
    }

    componentDidMount() {
        window.scrollTo(0, 150);
    }

    componentDidUpdate() {
        window.scrollTo(0, 150);
    }

    componentWillReceiveProps(newProps){
        this.setState({category: (newProps.match.params.category)})
        console.log(this.state.category)
    }


    render() {

        const cekcategory = (element, index, array) => {
            return (element.category === (this.state.category))
        }

        const d = data.filter(cekcategory)
        console.log(d)

        return (
            <React.Fragment>
                <section className="bycategory">
                    <div className="container">
                        <h5 className="section-title">
                            NOTES BY CATEGORY : <span>{this.state.category}</span>
                        </h5>
                        {d.map(item => {

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



export default Bycategory