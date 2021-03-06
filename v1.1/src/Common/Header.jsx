import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
    constructor(props){
        super(props);
        this.state={tag:"home"};
    }

    componentDidMount(){
        var location=window.location.href;
        location=location.split('/');
        location=location[location.length-1];
        if(location===""){
            this.setState({tag:"Home"});
        }
        else{
            location=location.charAt(0).toUpperCase()+location.substring(1);
            this.setState({tag:location});
        }
    }

    render() {
        return (
        <div id="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavBar" aria-controls="myNavBar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="myNavBar">
                    <h2 className="text-success">{this.state.tag}</h2>
                    <ul className="navbar-nav mr-auto ml-auto mt-2 mt-lg-0">
                        <li className="nav-item nav-tab">
                            <a className="nav-link text-white" href="/">Home</a>
                        </li>
                        <li className="nav-item nav-tab">
                            <a className="nav-link text-white" href="about">About</a>
                        </li>
                        <li className="nav-item nav-tab">
                            <a className="nav-link text-white" href="projects">Projects</a>
                        </li>
                        <li className="nav-item nav-tab">
                            <a className="nav-link text-white" href="resume">Resume</a>
                        </li>
                        <li className="nav-item nav-tab">
                            <a className="nav-link text-white" href="hobbies">Hobbies</a>
                        </li>
                        <li className="nav-item nav-tab">
                            <a className="nav-link text-white" href="contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
            );
        }
    }
export default Header;