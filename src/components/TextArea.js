import React from 'react'
import './TextArea.css'
import { useState } from 'react'
export default function TextArea(props) {
  const [content,setContent]=useState('')
  const [wordCount,setWordCount]=useState(0)
  const [charCount,setCharCount]=useState(0)
  return (
    <div>
        <h1 style={{color:"#0d6efd",textAlign:"center"}}>{props.title}</h1>
        <div className="form-floating">
        <button  style={{marginRight:"auto"}} className="btn" onClick={()=>{
            navigator.clipboard
            .writeText(content)
        }}>
        <img src="https://as2.ftcdn.net/v2/jpg/03/67/91/75/1000_F_367917514_58yYsm2WiNSoq0f8UA2h9RZ8kxdsOfFJ.jpg" alt="Copy Button" style={{width:"30px",height:"30px"}}/>
        </button>
        <button onClick={()=>{
            setContent("")
        }} className="btn btn-primary" disabled={content.length===0}>Clear Text</button>
        <textarea className="form-control mx-3" id="floatingTextarea2" style={{height:"100px"}} onChange={(e) => {
            setContent(e.target.value)
            setCharCount((e.target.value).length)
            setWordCount((e.target.value).split(' ').filter((word)=>word!="").length)
        }} value={content} ></textarea>
        </div>
        <div className="functions">
        <button onClick={()=>{
            setContent(content.toUpperCase())
        }} className="btn btn-primary" disabled={content.length===0}>Convert To Upper Case</button>
        <button onClick={()=>{
            setContent(content.toLowerCase())
        }} className="btn btn-primary d-flex flex-column" disabled={content.length===0}>Convert To Lower Case</button>
        <button  className="btn btn-primary">
        Word Count:
        </button>
        <button className={`btn text-${props.textMode}`}>
        {wordCount}
        </button>
        <button  className="btn btn-primary">
        Character Count:
        </button>
        <button className={`btn text-${props.textMode}`}>
        {charCount}
        </button>
        <div className="preview" >
            <h2 style={{color: "#0d6efd"}} className='mb-5'>Preview your Text</h2>
            <div className={`container text-${props.textMode}`}>{content}</div>
        </div>
        </div>
    </div>
  )
}
