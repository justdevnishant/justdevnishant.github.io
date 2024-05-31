import "../assets/css/card.css";

function Card(props){
    return(
        <main className="main_content">
        <div className="all_content">
            {props.title.map((project, index) => (
                    <a href={project.link} key={index} className="box1 card">
                        <img src={project.image} alt={project.name} className="image_project" />
                        <div className="project_description">
                            <p className="project-title"><span>{project.name}</span></p>
                            <p className="pro-des">{project.productDescription}</p>
                        </div>
                    </a>
                ))}
        </div>
        <a href="/" className="back-link"><p>Return Home</p></a>
      </main>
    );
}

export default Card