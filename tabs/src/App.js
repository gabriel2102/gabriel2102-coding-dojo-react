import React, { useState } from 'react';
import './App.css';

function App() {
  const [tabs, setTabs] = useState([{title: "Tab 1", content: "content tab1", state: "active"},{title: "Tab 2", content: "content tab2", state: ""},{title: "Tab 3", content: "content tab3", state: ""}])
  const changeActive = (i) =>{
    const newLink = tabs.map((tab,index)=>{
      index === i ? tab.state="active":tab.state='';
      return tab
    })
    setTabs(newLink);
  }

  return (
    <div className="App">
      <h1>Pestañas</h1>
      <div className='tabs'>
        {tabs.map((tab,i)=>{
          return (<p className={`title ${tab.state}`} ket={i} onClick={()=>changeActive(i)}>{tab.title}</p>)
        })}
      </div>
      <div className='contents'>
        {tabs.filter(tab=>tab.state==="active").map((tab,i)=><p key={i}>{tab.content}</p>)}
      </div>
    </div>
  );
}

export default App;
