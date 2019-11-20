import React from 'react';
// import {this.props.img} from "./../../../img/"+{this.props.img};
import { Link } from 'react-router-dom';


function FeaturedItems(props) {
    const { img } = props;
    if (props.left) {
        return (
            <div className="featured row">
                <div className={'col s5 wrapper l'}>
                    <div className="frame" />
                    <img src={require(`./../../../img/${img}`)} className="responsive" />
                    {/* <img src={DSCF4476} alt="" className="responsive" /> */}
                </div>
                <div className={'col s7 wrapper l'}>
                    <div className="title-label link">
                        <h6><Link to={`/note/${props.title}`}>{props.title}</Link></h6>
                    </div>
                    <div className="insight link">
                        <p>
                            {props.insight}
                        </p>
                        <Link to={`/note/${props.title}`} className="waves-effect waves-teal read-btn">READ MORE</Link>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="featured row">
                <div className={'col s7 wrapper r'}>
                    <div className="title-label link">
                        <h6><Link to={`/note/${props.title}`}>{props.title}</Link></h6>
                    </div>
                    <div className="insight link">
                        <p>
                            {props.insight}
                        </p>
                        <Link to={`/note/${props.title}`} className="waves-effect waves-teal read-btn">READ MORE</Link>
                    </div>
                </div>
                <div className={'col s5 wrapper r'}>
                    <div className="frame" />
                    <img src={require(`./../../../img/${img}`)} className="responsive" />
                    {/* <img src={DSCF4476} alt="" className="responsive" /> */}
                </div>
            </div>
        )

    }
    // return (
    //     <div className="featured row">
    //         <div className={props.left ? 'col s5 wrapper l':'col s7 wrapper r'}>
    //             <div className="frame" />
    //             <img src={require(`./../../../img/${img}`)} className="responsive" />
    //             <div>{props.left ? 'l':'r'}</div>
    //             {/* <img src={DSCF4476} alt="" className="responsive" /> */}
    //         </div>
    //         <div className={props.left ? 'col s7 wrapper l':'col s5 wrapper r'}>
    //             <div className="title-label link">
    //                 <h6><Link to='/notes/note1'>{props.title}</Link></h6>
    //             </div>
    //             <div className="insight link">
    //                 <p>
    //                     {props.insight}
    //         </p>
    //                 <Link to='/notes/note1' className="waves-effect waves-teal read-btn">READ MORE</Link>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default FeaturedItems