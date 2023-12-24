import React, { useEffect } from "react"
import { Container,Row,Col} from "react-bootstrap"
import { useState } from "react";


function JsonFormatter(){

    let placeholder = '{ "key1" : "value1", "key2" : "value2" }'
    const [inputContent, setInputContent] = useState(placeholder);
    const [postContent, setPostContent] = useState('');

    useEffect(()=> {
        try {
            setPostContent(JSON.stringify(JSON.parse(inputContent), null, 4));
        } catch (error) {
           setPostContent(error);
        }
    },[inputContent])

    function handleChange(event) {
        setInputContent(event.target.value)
        
      } 


return(
    <Container className=" h-100" fluid>
        <Row className="justify-content-around  h-100 py-1" >
        <Col className=" text-center  w-100 h-100 py-1"  >
        <textarea type="text" className="w-100 h-100 py-1" onChange={handleChange} placeholder={placeholder}  />  
        </Col>

        <Col className="text-center  w-100 h-100 py-1">
        <textarea className="w-100 h-100 py-1" value={postContent} type="text"  placeholder="Formatted Json" />    
        </Col>
        </Row>
    </Container>
    
)
}

export default JsonFormatter