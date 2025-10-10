import React, { useState } from 'react'
import './style.css'

const ToggleBackgroundColor = () => {

 const themes = [
  {
    bg: '#0D0D0D',
    text: '#E0F7FA',
    btnBg: '#FF4081',
    btnText: '#FFFFFF',
    name: 'Neon Night Theme'
  },
  {
    bg: '#FFFFFF',
    text: '#1A1A1A',
    btnBg: '#2979FF',
    btnText: '#FFFFFF',
    name: 'Modern Light Theme'
  },
  {
    bg: '#1B262C',
    text: '#F0F4C3',
    btnBg: '#FF6F00',
    btnText: '#FFFFFF',
    name: 'Energetic Contrast Theme'
  },
  {
    bg: '#F1F8E9',
    text: '#33691E',
    btnBg: '#FF5722',
    btnText: '#FFFFFF',
    name: 'Fresh Nature Theme'
  },
  {
    bg: '#212121',
    text: '#FFEB3B',
    btnBg: '#00BCD4',
    btnText: '#FFFFFF',
    name: 'Cyberpunk Theme'
  }
];



    const[themeIndex,setThemeIndex] = useState(0);
    const currentTheme = themes[themeIndex]

    const handleclick = () => {
    setThemeIndex((themeIndex + 1) % themes.length);
  };



  return (
    <div style={{backgroundColor:currentTheme.bg,color:currentTheme.text}}>

        <button onClick={handleclick}
         style={{
         backgroundColor: currentTheme.btnBg,
         color:currentTheme.btnText,
         border:`2px solid ${currentTheme.text}`,
         }}>

          Switch Theme = {currentTheme.name}

         </button>

         <section className='content'>
          <h1>Welcome To A <br/>
          RoHiT ReacT World...</h1>
         </section>
        
        </div>
  )
}

export default ToggleBackgroundColor