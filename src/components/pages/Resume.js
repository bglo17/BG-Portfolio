import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href={process.env.PUBLIC_URL + '/resume.pdf'} >View my resume here</a>
    </div>
  )
}

