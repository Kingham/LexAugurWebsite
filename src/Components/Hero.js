import React from 'react';

function Hero(props) {
  return (
    <>
    <div className="hero">
      <div class="container">
        <div class="column">
          <img src="/img/computer.svg" alt="Lex Augur data-driven law analytics" />
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Hero;