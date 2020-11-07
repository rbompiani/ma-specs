import React, { useState, useEffect } from 'react'
import SpecContextProvider from './context/SpecContext'
import { BrowserRouter } from 'react-router-dom'
import Router from './routing/Router'
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
    <BrowserRouter>
      <SpecContextProvider>
        <Router />
      </SpecContextProvider>
    </BrowserRouter>
  )
};

export default withAuthenticator(App);
