import React,{Component} from 'react';
import '../stylesheet/Contact.css';

class Contact extends Component{
    render(){
        return(
            <div className="container-fluid pt-5 m-0">
            <h1 className="text-center text-light">Contact Me</h1>
            <h5 className="text-center text-light">It will be my pleasure to get in touch with you.</h5>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ml-auto mr-auto">
                    <form id="contact_us_form" action="#" method="POST">
                        <div className="form-group text-center">
                            <label className="h4 mt-3 text-light" for="username">Name</label>
                            <input type="text" className="form-control  col-xs-12 col-sm-12 col-md-6 col-lg-6 ml-auto mr-auto my-2 mx-auto"
                                placeholder="Eg: John Miller" id="username" name="username" required/>
                            <label className="h4 mt-3 text-light" for="email">Email</label>
                            <input type="email" className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6 ml-auto mr-auto my-2 mx-auto "
                                placeholder="email@example.com" id="email" name="email" required/>
                            <label className="h4 mt-3 text-light" for="contact-number">Number</label>
                            <input type="email" className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6 ml-auto mr-auto my-2 mx-auto "
                                placeholder="+123456789 (Optional)" id="number" name="contact-number" optional/>
                            <label className="h4 mt-3 text-light" for="message">Message</label>
                            <textarea style={{height:"110px",color:"white"}} className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6 ml-auto mr-auto my-2 mx-auto" 
                                placeholder="Message Here..." id="message" name="message"></textarea>
                            <button type="submit" className="btn btn-primary mx-auto my-5 " id="send-msg-btn">Send</button>
                        </div>
            
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;