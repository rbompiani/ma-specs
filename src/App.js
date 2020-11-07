import React, { useState, useEffect } from 'react';
import SpecContextProvider from './context/SpecContext'
import logo from './logo.svg';
import './App.css';

// AWS imports
import { withAuthenticator, AmplifyGreetings } from '@aws-amplify/ui-react';

// component imports
import Header from './containers/Header'
import Title from './containers/Title'
import DivisionBrowser from './containers/DivisionBrowser'
import SectionContent from './containers/SectionContent'
import Notes from './containers/Notes'

const App = () => {

  //-------- RENDERED COMPONENTS --------//
  return (
    <main>
      <Header />
      <SpecContextProvider>
        <Title />
        <DivisionBrowser />
        <SectionContent />
        <Notes />
        {/* <ul>
          {allDivisions.map((divis) => {
            return (
              <div>
                <li>Division {divis.id} - {divis.title}</li>
                <ul>
                  {divis.sections.items.map((sec) => <li>{sec.id} - {sec.title}</li>)}
                  {parts.map((p) => {
                    return (
                      <div>
                        <div>Part {p.id} - {p.title}</div>
                        {paragraphs.filter(e => e.part == p.id).map(par => <div>{par.title}</div>)}
                      </div>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </ul> */}
      </SpecContextProvider>
    </main>
  )
};

export default withAuthenticator(App);
