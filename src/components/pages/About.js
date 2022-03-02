import React from 'react'

export default function About() {
  return (
    <div className='px-5 py-4'>
    
      <div className='d-flex justify-content-center'>
        <img className='450x600px' src={process.env.PUBLIC_URL + '/img/cartoonme.jpg'} alt="Cartoon Me" />
        
        <p className='px-4'>
          <h1>About Me</h1>
        Full Stack web developer that will use the influence I have had in Real Estate and the Medical field to help improve or continue a great work environment at whatever company I am hired at. Recently earned a certificate from the Institute of Georgia Tech in full stack web development.  There I required a good bit of new skills from HTML, CSS, JavaScript to React.  I am ready to parlay my background and use my new skills to learn to become an efficient coder that can be an asset for a company.  I am a team player and work well with others from all different backgrounds.  
        </p>
        
       
      </div> 
    </div>
  );
}
