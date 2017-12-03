import React from 'react';
import marked from 'marked';

function parseMarked (description) {
  return {
    __html: marked(description)
  }
}

const WorkShowcase = props => {
  console.log(props.description, 'description');
  return (
    <div className="showcase-container">
      <div className="showcase-image-block" style={{backgroundImage: `url(${props.workSample})`}}>
      </div>
      <div className="showcase-text-container">
        <div className="showcase-title">
          <h1>{props.title}</h1>
        </div>
        {props.description &&
          <div className="showcase-subtext" dangerouslySetInnerHTML={parseMarked(props.description)}>
        </div>}
      </div>
    </div>
  );
};

export default WorkShowcase;
