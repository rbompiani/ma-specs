import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ProjectContextProvider from './context/ProjectContext'
import SpecOutlineContextProvider from './context/SpecOutlineContext';

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
          <Router />
        </SpecOutlineContextProvider>
      </ProjectContextProvider>
    </BrowserRouter>
  )
};

export default withAuthenticator(App);
