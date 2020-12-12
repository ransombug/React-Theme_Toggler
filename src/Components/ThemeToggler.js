import React, {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'

const ThemeToggler = () => {

    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return (
       
        <div
         onClick={   () => {setThemeMode(themeMode==="light" ? "dark": "light")   }  }

         style={{
            padding: "10px 20px",
            margin : "5px"
        }}
        >
            <span>
                {/* {themeMode==="light" ? "Turn Off" : "Turn On" } */}

                {
                    themeMode==="light" ? 
                        <button 
                        onClick={()=> {setThemeMode("dark")}}
                        style={{
                           border : "none",
                           color : "white",
                           fontSize : "17px",
                           margin : "4px 2px",
                           width : "100px",
                           padding : "10px",
                           cursor : "pointer",
                           backgroundColor : "#4CAF50"
                        }}
                        
                        >Click Here</button>
                    :
                        <button onClick={()=> {setThemeMode("dark")}}
                        style={{
                            border : "none",
                            color : "white",
                            fontSize : "17px",
                            margin : "4px 2px",
                            width : "100px",
                            padding : "10px",
                            cursor : "pointer",
                            backgroundColor : "#4CAF50"
                         }}
                        
                        >Click Here</button>
                }
            </span>
        </div>
    )
}

export default ThemeToggler;