import React, { Component } from 'react';
import Notecontent from './sections/Notecontent';
import data from './../data.json';



const Note = (match, location) => {

    const title = match.match.params.title;
    function cektitle(element, index, array) {
        return (element.title === title)
    }

    const d = data.filter(cektitle)
    console.log(d)


    return (

        <div className="container">

            {d.map(items => {

                return <>
                    < section id="note" >
                        <Notecontent img={items.img} title={items.title} content={items.content} tags={items.tags} date={items.date}/>
                    </section>
                </>
            }
            )

            }


            <section>

            </section>
        </div >
    )
}



export default Note