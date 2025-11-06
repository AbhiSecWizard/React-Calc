import moonIcon from "./assets/moon.png"
import sunIcon from "./assets/sun.png"
import {Header} from "./Component/Headers/Header"
import {KeyPad} from "./Component/KeyPad/KeyPad"
import './App.css'
import { useState } from "react"
export const App = () => {
  const [isDarkMode,setDarkMode]=useState(false)
  return (
    <div className="app">
     <div className='app_calculator'>
        <div className='app_calculator_navbar'>
          <div className='app_calculator_toggle'>
            <div className='app_calculator_navbar_toggle' 
            onClick={()=>setDarkMode(!isDarkMode)}
            >
                  <div className={`app_calculator_navbar_toggle_circle${isDarkMode ? " app_calculator_navbar_toggle_circle_active" : ""}`}
>
  
                    </div>
            </div>
          </div>
                    <img src={isDarkMode ? moonIcon : sunIcon} alt="mode"/>
   
        </div>
      <Header/>
      <KeyPad/>
     </div>
    </div>
  )
}
