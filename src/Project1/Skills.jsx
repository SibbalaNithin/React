// import React from 'react'
import './main.css'
const Skills = () => {
  const skills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 60 },
    { name: 'React', percentage: 72 },
    { name: 'Git-hub', percentage: 80 },
  ];

  return (
    <div className="skill-list">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-title">{skill.name}</div>
          <div className="progressbar">
            <div className="progress" style={{ width: `${skill.percentage}%` }}>
              <span className="percentage">{skill.percentage}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills