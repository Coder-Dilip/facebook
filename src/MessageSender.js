import React, {useState} from 'react'
import "./Css_components/MessageSender.css"
import {Avatar} from "@material-ui/core"
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from './StateProvider'
import db from "./firebase";
import firebase from "firebase"

function MessageSender() {
    const [{user}, dispatch]=useStateValue()

    const [input, setinput] = useState('');
    
    const [imageUrl, setimageUrl] = useState('');



    const handleSubmit=(e)=>{
e.preventDefault();
db.collection('posts').add({
    message:input,
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    profilePic:user.photoURL,
    username:user.displayName,
    image:imageUrl
})
setinput("");
setimageUrl("");

    }
    return (
        <div className="messageSender">
         <div className="messageSender__top">
          <Avatar src={user.photoURL}/>
          <form>
              <input onChange={(e)=>{
                  setinput(e.target.value);
              }} value={input} className="messageSender__input" type="text" placeholder={`What's On your Mind?`} />
              <input onChange={(e)=>{
                  setimageUrl(e.target.value);
              }} value={imageUrl} placeholder={`image url (optional)`} />
              <button onClick={handleSubmit} type="submit" >Hidden Submit</button>

          </form>
         </div>

         <div className="messageSender__bottom">
<div className="messageSender__option">
    <VideocamIcon style={{color:'red'}}  />
    <h3>Live Video</h3>
    </div>
<div className="messageSender__option">
    <PhotoLibraryIcon style={{color:'green'}}  />
    <h3>Photo/Video</h3>
    </div>
<div className="messageSender__option">
    <InsertEmoticonIcon style={{color:'orangered'}}  />
    <h3>Feeling/Activity</h3>
    </div>
         </div>
        </div>
    )
}

export default MessageSender;