import React, { useState } from 'react'


export default function TextBox(props) {
  const [text, setText] = useState("");

  


  const textChange = (event) => {
    setText(event.target.value)
  }

  const lowerCase = () => {
    setText(text.toLowerCase());
  }

  const upperCase = () => {
    setText(text.toUpperCase());
  }

  const eraseText = () => {
    setText("");
  }

  const copyText = () => {
    navigator.clipboard.writeText(text);
  
  }

  return (
    <>
      <div className="container ">
        <h1 style={{color: (props.mode==='light')?'#212529':'white'}}>{props.heading}</h1>

        <textarea className="form-control" id="exampleFormControlTextarea1" rows={6} style={{ border: "1px solid black", margin: "1%" }} placeholder='Enter Your Text' value={text} onChange={textChange} ></textarea>
        <button type="button" className={`btn btn-${(props.mode==='light')?'dark':'light'}`} style={{ border: "1px solid black", marginLeft: "1%", marginRight: "2px" }} onClick={lowerCase} >Convert to Lower Case</button>
        <button type="button" className={`btn btn-${(props.mode==='light')?'dark':'light'}`} style={{ border: "1px solid black", margin: "2px" }} onClick={upperCase}>Convert to Upper Case</button>
        <button type="button" className={`btn btn-${(props.mode==='light')?'dark':'light'}`} style={{ border: "1px solid black" }} onClick={eraseText}>Clear TextBox</button>
        <button type="button" className={`btn btn-${(props.mode==='light')?'dark':'light'}`} style={{border:"1px solid black", margin: "2px" }} onClick={copyText}>Copy Text</button>
      </div>
      <div className="container" style={{color: (props.mode==='light')?'#212529':'white'}}>
        <h2>Your Text Summary:</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.
          <br />
          {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minoutes to read.
        </p>
        <h3>Peview:</h3>
        <p>

          {text}
        </p>
      </div>
    </>
  )
}
