import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ProjectContextProvider from './context/ProjectContext'
import SpecOutlineContextProvider from './context/SpecOutlineContext';
import SectionContextProvider from './context/SectionContext';

import Router from './routing/Router'

//import logo from './logo.svg';
import './App.css';

// AWS imports
import { withAuthenticator, AmplifyGreetings } from '@aws-amplify/ui-react';


const App = () => {

  return (
    <BrowserRouter>
      <ProjectContextProvider>
        <SpecOutlineContextProvider>
          <SectionContextProvider>
            <Router />
          </SectionContextProvider>
        </SpecOutlineContextProvider>
      </ProjectContextProvider>
    </BrowserRouter>
  )
};

export default withAuthenticator(App);
