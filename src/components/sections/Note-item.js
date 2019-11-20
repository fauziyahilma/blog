import React from 'react';
import Phototitle from './items/Photo-title1';
import Insight from './items/Insight';

function Noteitem(props) {
    const { img } = props;
    var style = {
        backgroundImage: 'url('+ require(`./../../img/${img}`)+')',
        backgroundSize: 'cover'
    }
    
    return (
        <div className="row note-list">
            <div className="col s12 m3 title2-bg" style={style}>
                <Phototitle img={props.img} title={props.title}/>
            </div>

            <div className="col s12 m9 insight2 link">
                <Insight insight={props.insight} title={props.title}/>
            </div>
        </div>

    )
}

export default Noteitem
