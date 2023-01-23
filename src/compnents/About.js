import React from 'react'
// import { useContext } from 'react'
// import noteContext from '../context/notes/noteContext'
import image from '../Aboutme.jpeg';
import "../About.css"
export const About = () => {
    
  return (
    <>
     <div className='section'>
      <div className='container'>
        <div className='title'>
          <h1>About me</h1>
        </div>
        <div className="content">
          <div className="article">
            <h3>
            hey!! this is V from this side I am curently pursuing Btech in Computer science and of course passionate for Web D!! but still in a learning phase
            </h3>
            <p>
              I have done my Internship as a Web Developer From OCCedu soft for the Duration of 4 Months
            </p>
            <p><u>Work samples</u></p>
            <li>MERN project <a href="https://github.com/vanshitaroop/iNotebook">iNotebook</a></li>
            <li>Hosted website <a href="www.sidhealthcare.com">sidhealthcare.com</a></li>
            <li>React project <a href="https://github.com/vanshitaroop/Newsmonkey">NewsMonkey</a></li>
            <li>Basic React project <a href="https://github.com/vanshitaroop/textutils">Textutils</a></li>

            <div className="button">
              <a href="">Read More</a>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src={image} alt="" />
        </div>
        <div className="social">
          <button className='btn'><a href="https://www.facebook.com/vanshita.roopchandani/"><i className='  fa fa-facebook'></i></a></button>
          <button className='btn'><a href='https://www.instagram.com/vanshita_roopchandani/'><i className=' fa fa-instagram'></i></a></button>
          <button className='btn'> <a href="https://www.linkedin.com/in/vanshita-roopchandani-5943171b8/"><i className=' fa fa-linkedin'></i></a> </button>
        </div>
      </div>
     </div>
    </>
  )
}
