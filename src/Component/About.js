import React, { useState } from 'react'

export default function About() {
const [myStyle, setMyStyle] = useState ({
    color: 'black',
    backgroundColor: 'white'
})
const [btnText, setBtnText]= useState ("Enable Dark Mode")

const okactive = ()=> {
    if(myStyle.color === 'black'){
        setMyStyle({
            color: 'white',
            backgroundColor: 'black',
            border: '1px solid white'
        })
        setBtnText("Enable Dark Mode")
    }
    else {setMyStyle ({
        color: 'black',
        backgroundColor : 'white'
    })}
    setBtnText("Enable Light Mode")

    }

     
    return(
        <div className="container" style={myStyle}>
            <h1 className= "my-4" >About Me </h1>
            <div className="accordion" id="accordionExample"style={myStyle}>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Personal Information
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>My Name is UGRASEN YADAV </strong> I am a Java Full Stack Web Developer. You can reach me at 6386616236 or via email at ugrasen6162@yahoo.com. You can also find me on LinkedIn as Ugrasen Yadav and on GitHub as UgrasenYadav-eng. <code>.Personal Traits</code>,I am highly enthusiastic and dedicated to my work, regularly integrating new methodologies and approaches. I employ efficient and intelligent work practices and possess strong social skills and an understanding of social dynamics. I maintain a high level of self-discipline, demonstrate strong leadership abilities, and am naturally competitive and driven to succeed. Additionally, I exhibit patience in various situations and am known for smart and strategic thinking.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header"style={myStyle}>
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Technical Skills
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Java FullStack Webdeveloper.</strong> I am proficient in several programming languages, including C, C++, Python, and advanced Java. My web technology skills include HTML, CSS, JavaScript, Node.js, React.js, and Bootstrap. I have experience in database management with MySQL and SQL, and I am familiar with frameworks such as Spring Boot and Hibernate. Additionally, I have skills in design tools like CorelDRAW and color psychology. <code>. Graphic designe expert and exprienced </code>, i am working on a java fullstack website nomed as E-commarce website.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        My Projects
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>i have made 5+ Projects </strong> he Utility Toolkit is a comprehensive web application designed to enhance productivity with three main tools: a Case Converter, a Scientific Calculator, and a Date and Time utility with a Stopwatch. The Case Converter enables seamless text transformation between various cases (uppercase, lowercase, title case, and sentence case) with real-time updates. The Scientific Calculator supports both basic arithmetic and advanced scientific functions such as trigonometric calculations and logarithms, while also managing error inputs effectively. The Date and Time utility displays the current date and time in real-time and includes a fully functional stopwatch with start, stop, reset, and lap features. Built using React.js, HTML, CSS, and JavaScript, the Utility Toolkit ensures a smooth and responsive user experience.

In addition to this, I have worked on several notable projects: The Hospital Management System aimed to manage "Lifeline Hospital" online, handling appointments, patient data, and doctor schedules, using HTML, CSS, PHP, MySQL, and UML from December 2021 to April 2022. The Student Registration Form for Competitive Exam involved creating a registration form for competitive exams, utilizing HTML, CSS, PHP, MySQL, and UML from January to April 2023. The Gym Management System was developed as part of my final semester project, featuring functionalities for gym management using Python Django, HTML, CSS, and JavaScript from December 2023 to April 2024. <code>. A java Full stack website </code>, i am working on a java fullstack website nomed as E-commarce website.
      </div>
    </div>
  </div>
</div>
        <button className="btn btn-primary my-4" onClick={okactive} >{btnText}</button>
        </div>
    )
}

