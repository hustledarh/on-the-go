import React from "react"
import { Container,Row,Col} from "react-bootstrap"
import { useState } from "react";


function JsonFormatter(){

    const [postContent, setPostContent] = useState('');
    const [inputLinesCount, setInputLinesCount] = useState(0);
    const [uniqueLinesCount, setUniqueLinesCount] = useState(0);

    function handleChange(event) {
        let uniqueString = ''
        setInputLinesCount(event.target.value.split("\n").length)
        let uniqueLines = new Set(event.target.value.split("\n").map( line => { return line.trim()}));
        uniqueLines.delete('')
        setUniqueLinesCount(uniqueLines.size)
        uniqueLines.forEach(key => {uniqueString += key + "\n"})
        setPostContent(uniqueString);
      } 


return(
    <Container className="border w-100 h-100" fluid>
        <Row className="justify-content-around border h-100 w-100" >
        <Col className=" text-center border w-100 h-100"  >
        <h1 className="">Input Lines</h1> 
        <textarea type="text" className="w-100 h-100" rows={20} onChange={handleChange} placeholder="Input Lines"  />  
        <p><b>input lines count</b> : {inputLinesCount}</p> 
        </Col>

        <Col className="text-center border w-100 h-100">
        <h1>Unique Lines</h1>  
        <textarea rows={20} className="w-100 h-100" value={postContent} type="text"  placeholder="Unique Lines" />    
        <p><b>unique lines count</b> : {uniqueLinesCount}</p>
        </Col>
        </Row>
    </Container>
    
)
}

export default JsonFormatter