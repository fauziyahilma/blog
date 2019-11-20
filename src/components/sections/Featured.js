import React, { Component } from 'react';
import FeaturedItems from './items/Featured-items';
import data from './../../data.json';

class Featured extends Component {

    render() {


        return (
            <React.Fragment>
                {data.map((item, index) =>{
                   
                return<>
                        
                        <FeaturedItems img={item.img} title={item.title} insight={item.insight} id={item.id} left={index%2===0 ? true:false} />
                    </>
                }

                )}
            </React.Fragment>

        )
    }
}

export default Featured