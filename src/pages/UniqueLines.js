import React from "react"
import { Container,Stack} from "react-bootstrap"
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
    <Container>
    <Stack direction="horizontal"  gap={5}>
    <Container >
        <h1 className = "mx-auto" rows={25}>Input Lines</h1> 
        <textarea className = "mx-auto w-75 " rows={25} type="text" onChange={handleChange} placeholder="Input Lines"  />  
        <p><b>input lines count</b> : {inputLinesCount}</p> 
    </Container>
    <Container>
        <h1 className = "mx-auto" rows={25}>Unique Lines</h1>  
        <textarea  className = "mx-auto w-75 " rows={25} value={postContent} type="text"  placeholder="Unique Lines" />    
        <p><b>unique lines count</b> : {uniqueLinesCount}</p>
    </Container>
    </Stack>
    </Container>
    
)
}

export default UniqueLines