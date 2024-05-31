import Header from './home/header.jsx';
import Card from './home/Card.jsx';
import Footer from './home/footer.jsx';
import {projectData} from './assets/projectDetails.js'

function Project() {
  return (
    <>
    <Header title="HOME" logo="myProject" link="/"/>
    <Card title={projectData}/>
    <Footer />
    </>
    );
}

export default Project;