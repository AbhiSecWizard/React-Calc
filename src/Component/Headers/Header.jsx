import "./Header.css"
import "../../App.css"
import { useEffect, useRef } from "react"
export const Header=(props)=>{
  const resultRef = useRef();
  useEffect(() => {
    resultRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  },[])
  return (
    <div className="header custom-scroll">
        <div className="header_history">
           {
            props.history && props.history.map((item,index)=>(
              <p key={index}>{item}</p>
            ))
           }
               
        </div>
          <br />
         <div className="header_expression custom-scroll">
           <p>{props.expression}</p>
          </div>
  <p className="header_result " ref={resultRef}>{props.result}</p>
</div>
  )
}




