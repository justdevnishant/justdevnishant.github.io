import Header from "./home/header.jsx"
import Footer from "./home/footer.jsx"
import Profile from "./home/profile.jsx"
import Projects from "./home/projects.jsx"
import {projectData} from './assets/projectDetails.js'

function Home() {
    return (
        <>
    <Header title="PROJECT" logo="NISHANT" link="project"/>
    <Profile/>
    <Projects title={projectData}/>
    {console.log(Projects)}
    <Footer/>
    </>
    )
}

export default Home;