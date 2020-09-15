import React from 'react';
import logo from './logo.svg';
import './App.css';

// AWS imports
import { withAuthenticator, AmplifyGreetings } from '@aws-amplify/ui-react'
import { API, graphqlOperation } from 'aws-amplify'

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default withAuthenticator(App);
