import "./KeyPad.css"

export const KeyPad=()=>{
const keys = [
    {
      keyCode:55,
      label:"7"
    },
    {
      keyCode:56,
      label:"8"
    },
    {
      keyCode:57,
      label:"9"
    },
    {
      keyCode:52,
      label:"4"
    },
    {
      keyCode:53,
      label:"5"
    },
    {
      keyCode:54,
      label:"6"
    },
    {
      keyCode:49,
      label:"1"
    },
    {
      keyCode:50,
      label:"2"
    },
    {
      keyCode:52,
      label:"3"
    },
    {
        keyCode:48, 
        label:"0"
    },{
        keyCode:46,
        label:"."
    },{
        keyCode:187,
        label:"="
    }

]
const symbols = [
    {
        label:"⌫",
        keyCode:8,
        value:"backspace",
    },
    {
        label:"÷",
        keyCode:"197",
        value:"slash",
    },
    {
        
    }
    
]

return (
        <div className="keypad">
            <h1>KeyPad</h1>
        </div>
    )
}