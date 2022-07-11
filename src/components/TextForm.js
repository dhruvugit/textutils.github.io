import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "New Text"   #THis is wrong way
  // setText("This is new text");   #This is correct way
  const handleUpClick = () =>{
    console.log("Upper case was clicked" + text)
    let newText = text.toLocaleUpperCase();
    setText(newText) 
    props.showAlert("Converted to upper case !", "success")
    // setText("You have clicked on handleUpClick")
  }
  const handleLoClick = () =>{
    console.log("Upper case was clicked" + text)
    let newText = text.toLocaleLowerCase();
    setText(newText) 
    props.showAlert("Converted to lower case !", "success")
  }
  const handleClClick = () =>{
    console.log("Upper case was clicked" + text)
    let newText = ' ';
    setText(newText) 
  }
  // const handleSeClick = () =>{
  //   console.log("Upper case was clicked" + text)
  //   let newText = text.tos;
  //   setText(newText) 
  // }

    const hadnleOnChange = (event)=>{
      console.log("On Change")
      setText(event.target.value)
      // #event.target,value se meri value ho jaegi " Jo text already tha + Jo user ne likha"

    }

    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
     
      props.showAlert("Copied to clipboard !", "success")
    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces eliminated !", "success")
    }
  
   return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
      <h1>
      {props.heading}
      </h1>

      <div className="container my-3"  >
      <label htmlFor="myBox" className="form-label">Example textarea</label>
      <textarea className="form-control" value={text} onChange={hadnleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lower Case</button>
       {/* <button className="btn btn-primary mx-2" onClick={handleSeClick}>Convert To Sentence Case</button>  */}
      <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
   


    </div>
    <div className='container my-3' style={{color : props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary !</h1>
      <p>{text.split(" ").reduce((acc, curr) =>  (curr.length !== 0) ? acc + 1 : acc , 0)} words & {text.length} characters</p>
      <p>{0.24*text.split(" ").length} Seconds read :)</p>
       <h2>Text Preview :</h2>
       <p>{text.length>0?text:"Enter something in the text-box to preview it here"}</p>

    </div>
    
    </>
  )
}
