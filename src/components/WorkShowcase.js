import React from 'react';

const WorkShowcase = props => {
  return (
    <div className="showcase-container-outer">
      <div className="showcase-container">
        <div className="showcase-image-block" style={{backgroundImage: 'url(https://s3.amazonaws.com/web-ready-andrea/lisbon-sunset-edited+4+2.png)'}}>
        </div>
        <div className="showcase-text-container">
          <div className="showcase-title">
            <h1>Hawaiian Airlines Redesign</h1>
          </div>
          <div className="showcase-subtext">
            <p>Served as Product Owner on the HawaiianAirlines.com re-platforming project and guided cross-functional teams to successfully decommission the old HawaiianAirlines.com websites and launch seven multi-currency, multi-lingual websites for the airline.</p>
            <p>Worked through many risks and challenges that arose during the span of the project such as the movement from waterfall to agile methodologies, adoption of new systems and platforms, defining roles and responsibilities across the project, and working with many offshore team members.</p>
            <p>Managed the needs of the airline and its many stakeholders against the priorities of IT, government regulations and project timelines to ensure everyone was working towards a clear vision, hitting milestones set by the business, and accomplishing the goals of the project.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkShowcase;
