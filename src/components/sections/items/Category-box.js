import React from 'react';
import { Link } from 'react-router-dom'

function Categorybox(props) {
    const { img, text } = props;
    var style = {
        backgroundImage: 'url(' + require(`./../../../img/${img}`) + ')',
        backgroundSize: 'cover'
    }
    return (
        <div className="col s4 m4 l4" style={style}>
            <Link to={`/bycategory/${text}`}>
                <div className="category" >
                    {text}
                </div>
            </Link>

        </div>
    )
}

export default Categorybox