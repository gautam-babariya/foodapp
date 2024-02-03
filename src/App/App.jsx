import React from 'react';
import Header from '../../components/Header/Header';
import Landing from '../../components/Landing/Landing';
import Search from '../../components/Search/Search';
import './App.css'



function App() {
 return (
   <div>
     <Header/>
     <div id = "searchcomponent-id">
        <Search/>
     </div>
        <Landing/>
   </div>
 )
}

export default App
