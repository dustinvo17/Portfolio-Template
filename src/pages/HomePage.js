
import React from 'react';
import Introduction from '../components/Introduction'
import ProjectList from '../components/ProjectList'
import ContactForm from '../components/ContactForm'
export default function HomePage() {
   
    return (
        <div>
            <Introduction/>
            <ProjectList/>
            <ContactForm/>
        </div>
    )
}
