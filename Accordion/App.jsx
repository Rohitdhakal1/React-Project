import React from 'react'
import { accordionData } from './utils/content'
import Accordion from './components/Accordion'


const App = () => {
  return (
    <div> 
      {accordionData.map(({title,content})=>(
        <Accordion title={title} content ={content}/>
      ))}
    </div>
  )
}

export default App