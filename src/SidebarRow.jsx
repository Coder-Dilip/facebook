import React from 'react'
import "./Css_components/SidebarRow.css"
import {Avatar, IconButton} from '@material-ui/core';

function SidebarRow({src, Icon, title}) {
    return (
        <div className="SidebarRow">
         {src && <Avatar src={src} />}
         {Icon && <Icon/>}

<h4>{title}</h4>

         
        </div>
    )
}

export default SidebarRow
