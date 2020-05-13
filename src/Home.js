import React from 'react';
import './css/App.css';
import FeatureRow from './Components/FeatureRow';
import Hero from './Components/Hero';

function Home() {
  return (
    <>
        
    <Hero title="Tip the scales in your favour" description="Make important, data-driven decisions based on a constant analysis of all the historical cases in your firm" />
    <div class="container">
      <div className="column">
        <FeatureRow title="Case success overviews at all levels of your organisation" order="reverse" image="/img/solicitor-overview.svg" text={
          <>
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
          </>} />
        <FeatureRow title="Track changes to case probability over time" order="" image="/img/odds-overview.svg" text={
          <>
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
          </>} />
        <FeatureRow title="Snapshots of all facets that make up a case" order="reverse" image="/img/summary-overview.svg" text={
          <>
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
          </>} />
        <FeatureRow title="Financial summary" order="" image="/img/financial-overview.svg" text={
          <>
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
          </>} />
      </div>
    </div>
    </>
  );
}

export default Home;
