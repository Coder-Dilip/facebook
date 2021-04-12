import React from "react";
import './App.css';
import Feed from "./Feed";
import Header from "./Header"
import Sidebar from "./Sidebar";
import Widgets from "./Widgets"
import Login from "./Login"
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch]=useStateValue()
 {user? console.log(user.photoURL):console.log('null')}
  return (
    <>
    <div className="app">
{!user? (<><Login /></>) :(
    
    <>
    <Header />

    

<div className="app__body" >
      {/* {side bar} */}
  <Sidebar />
  
      {/* {feed} */}
      <Feed />

      {/* {Widgets} */}
      <Widgets />
  </div>  
  </>
)}
    </div>
    </>
  );
}

export default App;
