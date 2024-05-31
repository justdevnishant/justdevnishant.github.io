import '../assets/css/project-home.css';

function Projects(props) {
    console.log(props.title)
    return (
        <>
        <hr />
        <section className="projects">
            <p>projectsOverview</p>
            <div className="scroll js-all-content">
            {props.title.map((project, index) => (
                    <div className="row-slider" key={index}>
                        <div className="card-container">
                            <img src={project.image} alt={project.name} />
                            <p>{project.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p style={{fontSize: "20px"}}>forFullDetails &rarr; <a href="/project">projects</a></p>
        </section>
        <hr />
        </>
    )
}

export default Projects;