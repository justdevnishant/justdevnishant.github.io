import '../assets/css/profile.css';
import '../assets/css/common.css';
import profile from '../assets/images/profile.jpeg';


function Profile() {
    return (
        <div className="my-details">
            <div className="writing">
                <h4>Hii, NISHANT this side.
                I am student at Rajdhani College DU, pursuing Bachelor of Science(Prog.) with computer science.
                Currently, I am trying to improve my skills by learning and trying new things out their. 
                I have used or learnt Python in my high school and C++ in my college and know the basics of Data Structures and Algorithms using C++,
                also I am learning Front End Web developing so, I know how to work on HTML5, CSS3, JS and learning ReactJs.
                Also, I love to write about my learnings and love to capture Photographs and make videos so, you can check my Insagram account 
                <a href="https://www.instagram.com/tnahsinramuk/" className="inst-link" target="_blank"><i className="fa-brands fa-instagram inst-link"> tnahsinramuk</i></a> .
                </h4>
            </div>
            <div className="profile">
            <img src={profile} alt="profile image" className="profile_picture"/>
            <h3>Nishant</h3>
            </div>
        </div>
    );
}

export default Profile;