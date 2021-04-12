import React from 'react'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import {ExpandMoreOutlined} from "@material-ui/icons";
import userEvent from '@testing-library/user-event';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user}, dispatch]=useStateValue();
    return (
        <div className="sidebar" style={{padding:"25px 10px", flex:'0.33'}} >
<SidebarRow src={user.photoURL} title={user.displayName}  />
            <SidebarRow src='' title='Covid-19 Information Center' Icon={LocalHospitalIcon} />
            <SidebarRow src='' title='Pages' Icon={EmojiFlagsIcon} />
            <SidebarRow src='' title='Friends' Icon={PeopleIcon} />
            <SidebarRow src='' title='Messenger' Icon={ChatIcon} />
            <SidebarRow src='' title='Marketplace' Icon={StorefrontIcon} />
            <SidebarRow src='' title='Videos' Icon={VideoLibraryIcon} />
            <SidebarRow src='' title='Marketplace' Icon={ExpandMoreOutlined} />
        </div>
    )
}

export default Sidebar
