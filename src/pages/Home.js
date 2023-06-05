import React from "react"
import { Container,Stack} from "react-bootstrap"
function Home(){
return(
    <Container>
    <Stack direction="horizontal" gap={5}>
    <textarea className = "mx-auto w-50" rows={25} type="text"  placeholder="Input Lines"  />    
    <textarea  className = "mx-auto w-50" rows={25} type="text"  placeholder="Unique Lines" />    
    </Stack>
    </Container>
    
)
}

export default Home