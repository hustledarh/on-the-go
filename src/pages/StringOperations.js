import React from "react"
import { Container,Row,Col} from "react-bootstrap"
import { useState,useEffect } from "react";
import startCase from 'lodash/startCase';
import { Form } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { act } from "react-dom/test-utils";


function StringOperations(){

    let placeholder = "Sample Line 1\n\nSample Line 1"
    const [inputContent, setInputContent] = useState(placeholder);
    const [postContent, setPostContent] = useState('');
    const [isJoin, setIsJoin] = useState();

    function handleToggle(event){
        console.log(event.target.checked)
        setIsJoin(event.target.checked)
        console.log(isJoin)
        
    }

    const initialStringActionState = {
      remove_empty_lines: true,
      trim_extra_spaces: false,
      remove_all_spaces: false,
      comma_separated_strings: false,
      // Add more checkboxes as needed
    }
    
      const [stringActionsState, setStringActionsState] = useState(initialStringActionState);
    
      const handleCheckboxChange = (checkboxName) => {
        setStringActionsState((prevState) => ({
          ...prevState,
          [checkboxName]: !prevState[checkboxName],
        }));
      };
    

    function handleChange(event) {
        setInputContent(event.target.value)
      } 

      useEffect(() => {
        let lines = inputContent
        if (stringActionsState.remove_empty_lines){
          lines = (inputContent.split("\n").filter((line) => {return line.trim() !== ''})).join("\n");
        }

        if (stringActionsState.trim_extra_spaces){
          lines = (lines.split("\n").map(line => line.trim())).join("\n");
        }
        if (stringActionsState.remove_all_spaces ){
          lines = (lines.split("\n").map(line => line.replaceAll(" ",""))).join('\n');
        }
        if (stringActionsState.comma_separated_strings){
          lines = "'" + lines.split("\n").join("','") + "'"
        }

        console.log(lines)
        setPostContent(lines)
      },[stringActionsState,inputContent]);


return(
    <Container className=" h-100" fluid>
        <Row className="justify-content-around  h-100 py-1" >
        <Col className=" text-center  w-100 h-100 py-1"  >
        <textarea type="text" className="w-100 h-100 py-1" onChange={handleChange} placeholder={placeholder}  />  
        </Col>
        <Col className="pt-5" lg={2}>
          

          {
            Object.keys(stringActionsState).map(action => {
            return (
              <div>
            <label>
            <input
              type="checkbox"
              checked={stringActionsState[action]}
              onChange={() => handleCheckboxChange(action)}
            />
            {" "+startCase(action)}
            </label>
            <hr></hr>
            </div>)

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

export default StringOperations