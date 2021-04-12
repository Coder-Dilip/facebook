import React from 'react'
import "./Css_components/story.css"
import {Avatar} from "@material-ui/core"

function Story({ image, profilesrc, title }) {
    return (
        <div className="hoverfixed">
        <div className="story" style={{backgroundImage:`url(${image})`}}>
           <a><Avatar className="story__avatar" src={profilesrc} /></a>
           <h4 className="title">{title}</h4>
        </div>
</div>
     
    )
}


export default Story
