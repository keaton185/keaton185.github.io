import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid introHeader">
          <div class="container">
          <h1 className="introText">Hi, I'm Keaton.</h1>
          <p className="introLine">Full Stack Web Developer with a passion for building well-crafted digital products.</p>
          </div>
        </div>
        <div className="detailSection">
          <div class="container">
            <h3 className="sectionTitle">About</h3>
            <p className="sectionBody">
            Originally from a technical consulting background advising
            corporates on systems solution design and architecture throughout Australia, 
            I've re-positioned to development to better align with my passion
            of delivering well-crafted digital products and solutions for businesses and 
            audiences of all sizes and backgrounds.
            <br />
            I'm currently based in Toronto, Canada and am open for opportunities in both Canada and Australia.
            </p>
          </div>
        </div>
        <div class="container">
        <div className="row">
            <div class="col-sm">
            <h3 className="sectionTitle">Tech</h3>
              <ul className="sectionList">
                <li>JavaScript / TypeScript / Python / PHP</li>
                <li>Angular 2+ / React / React Native / TensorFlow</li>
                <li>SQL / NoSQL / SSRS / BusinessObjects</li>
                <li>Laravel, WordPress, Shopify</li>
                <li>Git / NPM / Jenkins / Bamboo</li>
              </ul>
            </div>
            <div class="col-sm">
            <h3 className="sectionTitle">Projects</h3>
            <ul className="sectionList">
                <li>Document Analysis (AI/ML)</li>
                <li>Native Mobile Applications</li>
                <li>Insurance CRM Platform</li>
                <li>Dynamic Digital Signage</li>
                <li>WordPress / Shopify Theme Builds</li>
              </ul>
            </div>
            <div class="col-sm">
            <h3 className="sectionTitle">Expertise</h3>
            <ul className="sectionList">
              <li>Full Stack Web Development</li>
              <li>Native Mobile Applications</li>
              <li>Data Scraping / Analysis / Reporting</li>
              <li>Technical Business Analysis</li>
              <li>Solution Architecture</li>
            </ul>
            </div>
        </div>
        </div>
        <div className="detailSection">
          <div class="container">
            <h3 className="sectionTitle">Contact</h3>
            <p className="sectionBody">
            <ul className="sectionList">
              <li><a href="mailto: keaton.neville90@gmail.com">keaton.neville90@gmail.com</a></li>
              <li><a href="https://www.linkedin.com/in/keatonneville">LinkedIn</a></li>

            </ul>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
