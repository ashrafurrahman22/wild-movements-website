import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div style={{height:'530px'}}>
            <DropdownButton className='d-flex justify-content-center my-3' id="dropdown-item-button" title="What is the difference between authorization and authentication">
        <Dropdown.ItemText>
            <p>Authentication is the process of verification, Authentication verifies who the user is. It is the first step of a good identity and access management process. <br /> Authorization is the process of verifying what specific applications, files, and data a user has access to. It determines what resources a user can access. It always takes place after authentication. 
 </p>
        </Dropdown.ItemText>
      </DropdownButton>
            <DropdownButton className='d-flex justify-content-center my-3' id="dropdown-item-button" title="Why are you using firebase? What other options do you have to implement authentication?">
        <Dropdown.ItemText>
            <p className='m-3 p-3'>I'm using firebase for implement Authentication. It provides backend-services and ready made UI libraries. There are so many options for authentication like email & password, google, github, facebook, twitter etc. </p>
        </Dropdown.ItemText>
      </DropdownButton>
            <DropdownButton className='d-flex justify-content-center my-3' id="dropdown-item-button" title="What other services does firebase provide other than authentication">
        <Dropdown.ItemText>
            <p className='m-3 p-3'>Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.</p>
        </Dropdown.ItemText>
      </DropdownButton>
        </div>
    );
};

export default Blogs;