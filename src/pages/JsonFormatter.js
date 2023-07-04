import React from "react"
import { Container,Row,Col} from "react-bootstrap"
import { useState } from "react";


function JsonFormatter(){

    const [postContent, setPostContent] = useState('');

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
        <textarea type="text" className="w-100 h-100 py-1" onChange={handleChange} placeholder="Input Json"  />  
        </Col>

        <Col className="text-center  w-100 h-100 py-1">
        <textarea className="w-100 h-100 py-1" value={postContent} type="text"  placeholder="Formatted Json" />    
        </Col>
        </Row>
    </Container>
    
)
}

export default JsonFormatter