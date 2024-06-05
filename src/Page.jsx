import React from 'react'
import { useState } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Articles from './components/Articles/Articles'
import Topics from './components/Articles/Topics'


const Page = () => {
  const [topic, setTopic] = useState(Topics[0]);

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <div style={{backgroundColor: 'black'}}>
          <Sidebar setTopic={setTopic}/>
        </div>
        <div style={{padding: 0}}>
          <Articles topic={topic}/>  
        </div> 
      </div>
    </>
  )
}

export default Page