import React from 'react';
import { Link } from 'react-router-dom'

function Insight(props) {
    return (
        <React.Fragment>
        <p>
          {props.insight}
        </p>
        <Link to={`/note/${props.title}`} className="waves-effect waves-teal read-btn">READ MORE</Link>
        </React.Fragment>
    )
}

export default Insight
