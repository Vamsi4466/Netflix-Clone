import React from "react";

import { Wrapper,Content } from "./profile.style"; 

import Navbar from "../Navbar";
import Row from "../row";
import Requests from "../../request";

const Profile = () =>{

    return(
        <>
        <Navbar/>
        <Wrapper>
            <Content>
                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt="pic" style={{zIndex:'10'}}/>
                </div>
                <div>
                    <div>
                        <h1>Hi! I'm Vamsikrishna Setty</h1>
                    </div>
                    <div>
                        <p>A recent graduate from SASTRA University, Thanjavur. I have a keen interest in programming and I like to keep developing stuff for fun. I create clean, professional and functional websites.</p>
                    </div>
                    <div className="link">
                    <label>Contact me </label> 
                    <a href="https://www.linkedin.com/in/vamsikrishna-setty-1803261b3/overlay/contact-info/" target="_blank" className="ln"  >  <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
                    <a href="https://instagram.com/vamsikrishna_setty?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer" className="insta"> <i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a>
                    </div>
                    <div className="link" >
                        <label>Get the code here </label>
                        <a href="https://github.com/Vamsi4466/Netflix-Clone.git" target="_blank" className="github"  >  <i className="fa fa-link" aria-hidden="true"></i> Link</a>
                    </div>
                    <div className="link" >
                        <label>Check my other projects </label>
                        <a href="https://github.com/Vamsi4466" target="_blank" className="github"  >  <i className="fa fa-github" aria-hidden="true"></i> GitHub</a>
                    </div>
                </div>
            </Content>
        </Wrapper>
        <Row title={'You Might Like'} fetchUrl={Requests.fetchSimilarSuggestions}/>
        </>
    )
}

export default Profile;