import React from 'react';
import { Link } from 'react-router-dom'
// import DSC_0537 from './../../img/DSC_0537.JPG';

function Phototitle(props) {

    return (
        <div className="title2 link" >
            <h6><Link to={`/note/${props.title}`}>{props.title}</Link></h6>
        </div>
    )
}

export default Phototitle
