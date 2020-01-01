import React,{Component} from 'react';
import MyResume from '../media/my_resume.jpg';
import '../stylesheet/Resume.css';

class Resume extends Component{
    render(){
        return(
            <div className="container-fluid ml-auto mr-auto" id="resume_div">
                <img  src={MyResume} alt="My Resume" />
            </div>
        );
    }
}

export default Resume;