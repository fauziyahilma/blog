import React, { Component } from 'react';

function Notecontent(props) {
    const { img, title, content, tags, date } = props;
    const d = { content }
    const t = { tags }
    console.log(date)
    const tag = t.tags
    const c = d.content
    var style = {
        backgroundImage: 'url(' + require(`./../../img/${img}`) + ')',
        backgroundSize: 'cover'
    }

    return (
        <>

            <h5>tags : &nbsp;
                {tag.map((item, index) => {
                    console.log(item)
                    return <>
                        &nbsp;{item} &nbsp; 
                    </>
                })
                }
            </h5>
            <div class="title-container" style={style}>
                <div class="title-content" >
                    <h4><i>{title}</i></h4>
                </div>
            </div>

            <div class="note-content">
                {c.map((item, index) => {
                    return <>
                        <p>
                            {item}
                        </p>
                    </>
                })
                }

            </div>
            
            <h5>-{date}-</h5>

        </>

    )
}

export default Notecontent