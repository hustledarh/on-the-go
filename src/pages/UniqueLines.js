import React from "react"
import { Container,Stack} from "react-bootstrap"
import { useState } from "react";
function UniqueLines(){

    const [postContent, setPostContent] = useState('');

    function handleChange(event) {
        let uniqueString = ''
        let uniqueLines = new Set(event.target.value.split("\n").map( line => { return line.trim()}));
        uniqueLines.delete('')
        uniqueLines.forEach(key => {uniqueString += key + "\n"})
        setPostContent(uniqueString);
      } 


return(
    <Container>
    <Stack direction="horizontal" gap={5}>
    <h1 className = "mx-auto" rows={25}>Input Lines</h1> 
    <h1 className = "mx-auto" rows={25}>Unique Lines</h1>  
    </Stack>
    <Stack direction="horizontal" gap={5}>
    <textarea className = "mx-auto w-50" rows={25} type="text" onChange={handleChange} placeholder="Input Lines"  />  
    <textarea  className = "mx-auto w-50" rows={25} value={postContent} type="text"  placeholder="Unique Lines" />    
    </Stack>
    </Container>
    
)
}

export default UniqueLines