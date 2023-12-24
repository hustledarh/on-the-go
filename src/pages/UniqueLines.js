import React, { useEffect } from "react"
import { Container,Row,Col} from "react-bootstrap"
import { useState } from "react";


function UniqueLines(){

    let placeholder = "Sample Line 1 \n \nSample Line 1"
    const [inputContent, setInputContent] = useState(placeholder);
    const [postContent, setPostContent] = useState('');
    const [inputLinesCount, setInputLinesCount] = useState(0);
    const [uniqueLinesCount, setUniqueLinesCount] = useState(0);

    useEffect(() => {
        let uniqueString = ''
        setInputLinesCount(inputContent.split("\n").length)
        let uniqueLines = new Set(inputContent.split("\n").map( line => { return line.trim()}));
        uniqueLines.delete('')
        setUniqueLinesCount(uniqueLines.size)
        uniqueLines.forEach(key => {uniqueString += key + "\n"})
        setPostContent(uniqueString);
      },[inputContent]);


      function handleChange(event) {
        setInputContent(event.target.value)
      } 


return(
<Container className=" h-100" fluid>
<Row className="justify-content-around  h-100 py-1" >
<Col className=" text-center  w-100 h-100 py-1"  >
<textarea type="text" className="w-100 h-100 py-1" onChange={handleChange} placeholder={placeholder} />  
</Col>

<Col className="text-center  w-100 h-100 py-1">
<textarea className="w-100 h-100 py-1" value={postContent} type="text"  placeholder="Unique Lines" />    
</Col>
</Row>
</Container>
    
)
}

export default UniqueLines