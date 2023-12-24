import React from "react"
import { Container,Row,Col} from "react-bootstrap"
import { useState,useEffect } from "react";
import startCase from 'lodash/startCase';
import { Form } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { act } from "react-dom/test-utils";


function EncodeDecode(){

    let placeholder = "http://abc.something.com?query=abc def"
    const [inputContent, setInputContent] = useState(placeholder);
    const [postContent, setPostContent] = useState('');

  

    
      const [selectedAction, setSelectedAction] = useState('encode');
    
      const handleCheckboxChange = (actionName) => {
        setSelectedAction(actionName)
      };
    

    function handleChange(event) {
        setInputContent(event.target.value)
      } 

      useEffect(() => {
        if (selectedAction == 'encode'){
          setPostContent(encodeURIComponent(inputContent))
        }

        if (selectedAction == 'decode'){
          setPostContent(decodeURIComponent(inputContent))
        }
      },[selectedAction,inputContent]);


return(
    <Container className=" h-100" fluid>
        <Row className="justify-content-around  h-100 py-1" >
        <Col className=" text-center  w-100 h-100 py-1"  >
        <textarea type="text" className="w-100 h-100 py-1" onChange={handleChange} placeholder={placeholder}  />  
        </Col>
        <Col className="pt-5" lg={2}>
          

          {
            ['encode','decode'].map(action => {
            return (
            <div>
            <label>
            <input
              type="checkbox"
              checked={selectedAction == action}
              onChange={() => handleCheckboxChange(action)}
            />
            {" "+startCase(action)}
            </label>
            <hr></hr>
            </div>
            )

            })
          }
        </Col>
        <Col className="text-center  w-100 h-100 py-1">
        <textarea className="w-100 h-100 py-1" value={postContent} type="text"  placeholder="Formatted Lines" />    
        </Col>
        </Row>
    </Container>
    
)
}

export default EncodeDecode