import React from "react"
import Header from "./Header"
import TopImage from "./TopImage"
import TopForm from "./TopForm"
import Blog from "./Blog"

const Container = ({ children }) => (
    <div style={{ paddingLeft: '15%', paddingRight: '15%' }}>{children}</div>
)


const App = () => {
    return(
        <Container>
            <Header/>
            <TopImage/>
            <TopForm/>
            <Blog/>
        </Container>
    )
}
  export default App