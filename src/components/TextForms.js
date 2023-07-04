import React, {useState } from 'react'


export default function TextForms(props) {
    const handlkeUpClick=()=>{
        // console.log("UpperCase was clicked" + text)
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handlkeLoClick=()=>{
        // console.log("UpperCase was clicked" + text)
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("on changed")

        setText(event.target.value)
       
    }
    const handleCopy=()=>{
        let text= document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(Text.value);
        props.showAlert("Copied to clipboard!", "success");

    }
    const handleExtraSpace=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    
    const [text, setText] = useState('');
    // text="new text" // wrong way to change the state
    // setText("new text");// correct way to change the state 

    return (
        <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 " onClick={handlkeUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handlkeLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summery</h2>
        <p>{text.split(" ").length} words and {text.length} charecter</p>
        <p>{0.008* text.split(" ").length} Minutes to Read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
    </div>
    </>
  )
}
