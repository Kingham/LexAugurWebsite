import React from 'react';

function FeatureRow(props) {
  return (
    <>
    <div className={props.order + " featurerow"}>
      <div className="column">
        <img src={props.image} alt={props.imagedescription} />
      </div>
      <div className="column">
        <h2>{props.title}</h2>
        {props.text}
      </div>
    </div>
    </>
  );
}

export default FeatureRow;