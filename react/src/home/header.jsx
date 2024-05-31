import "../assets/css/header.css";
import "../assets/css/common.css";

function Header(props){
    return (
        <header className="logo_top">
            <div className="logo">
            <a href=""><h1 className="logo_text">{props.logo}</h1></a>
            </div>
            <div className="navigator">
            <nav className="top">
                <h3 className="home"><a href={props.link}>{props.title}</a></h3>
                <h3 className="project"> <a href="/goal">GOALS</a></h3>
                <h3 className="clicks"> <a href="https://hackspace.vercel.app" rel="_blank">HACKSPACE</a></h3>
                <h3 className="none"> <a href="https://sweet-house-five.vercel.app" rel="_blank">CANDY</a></h3>
            </nav>
            </div>
        </header>
    );
}

export default Header;