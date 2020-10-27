import React from "react"
import Header from "./Header"
import Top from './Top'
import Blog from "./Blog"

const Container = ({ children }) => (
    <div style={{ paddingLeft: '15%', paddingRight: '15%' }}>{children}</div>
)


const App = () => {
    return(
        <Container>
            <Header/>
            <Top/>
            <Blog/>
        </Container>
    )
}
  export default App