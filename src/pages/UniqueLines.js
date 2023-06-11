import React from "react"
import { Container,Row,Col} from "react-bootstrap"
import { useState } from "react";


function UniqueLines(){

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
    <Container >
        <Row className="justify-content-around " >
        <Col className=" text-center"  >
        <h1 className="">Input Lines</h1> 
        <textarea type="text" className="w-75" rows={20} onChange={handleChange} placeholder="Input Lines"  />  
        <p><b>input lines count</b> : {inputLinesCount}</p> 
        </Col>

        <Col className="text-center">
        <h1>Unique Lines</h1>  
        <textarea className="w-75" rows={20} value={postContent} type="text"  placeholder="Unique Lines" />    
        <p><b>unique lines count</b> : {uniqueLinesCount}</p>
        </Col>
        </Row>
    </Container>
    
)
}

export default UniqueLines