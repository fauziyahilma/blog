import React, { Component } from 'react';
import Categorybox from './items/Category-box';


class Category extends Component {
    render() {
        return (
            <>
                <div >
                    <h5 className="section-title">
                        CATEGORIES
                    </h5>
                </div>

                <div id="category" className="row">
                    <Categorybox img="DSC_0019.webp" text="life" />
                    <Categorybox img="DSC_0542.webp" text="self-reminder" />
                    <Categorybox img="DSC_0084.webp" text="random" />
                </div>
            </>
        )
    }
}

export default Category
