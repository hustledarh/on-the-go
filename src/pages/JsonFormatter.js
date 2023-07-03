import React from "react"
import { Container,Row,Col} from "react-bootstrap"
import { useState } from "react";


function JsonFormatter(){

    const [postContent, setPostContent] = useState('');
    const [inputLinesCount, setInputLinesCount] = useState(0);
    const [uniqueLinesCount, setUniqueLinesCount] = useState(0);

    function handleChange(event) {
        try {
            setPostContent(JSON.stringify(JSON.parse(event.target.value), null, 4));
        } catch (error) {
           setPostContent(error);
        }
      } 


return(
    <Container className=" h-100" fluid>
        <Row className="justify-content-around  h-100 py-1" >
        <Col className=" text-center  w-100 h-100 py-1"  >
        <h1 className="">Input Lines</h1> 
        <textarea type="text" className="w-100 h-100 py-1" onChange={handleChange} placeholder="Input Lines"  />  
        <p><b>input lines count</b> : {inputLinesCount}</p> 
        </Col>

        <Col className="text-center  w-100 h-100 py-1">
        <h1>Unique Lines</h1>  
        <textarea className="w-100 h-100 py-1" value={postContent} type="text"  placeholder="Unique Lines" />    
        <p><b>unique lines count</b> : {uniqueLinesCount}</p>
        </Col>
        </Row>
    </Container>
    
)
}

export default JsonFormatter