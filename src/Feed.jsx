import React, { useEffect, useState } from 'react'
import "./Css_components/feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import { useStateValue } from './StateProvider'
import StoryReel from "./StoryReel"
import db from "./firebase"

function Feed() {
const [posts,setposts]=useState([]);

useEffect(()=>{
db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>
    setposts(snapshot.docs.map((doc)=>({id:doc.id, data:doc.data()})))
);
},[]);

    return (
        <div className="feed">
            {/* {storyreel} */}

<StoryReel />

<MessageSender />

{posts.map((post)=>(
<Post
    key={post.id}
    profilePic={post.data.profilePic}
    message={post.data.message}
    timestamp={post.data.timestamp}
    username={post.data.username}
    image={post.data.image}
/>
    
))}
{/* <Post  

profilePic={user.photoURL}
message='Wow This Works'
timestamp='This is a timestamp'
username={user.displayName}
image='https://www.ionos.com/digitalguide/fileadmin/_processed_/a/1/csm_quellcode-t_d372041f48.jpg'

/> */}
{/* <Post  

profilePic={}
message={}
timestamp={}
username={}
image={}

/>
<Post  

profilePic={}
message={}
timestamp={}
username={}
image={}

/> */}




            {/* {messagesender} */}
        </div>
    )
}


export default Feed
