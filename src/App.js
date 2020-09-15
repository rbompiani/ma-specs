import React from 'react';
import logo from './logo.svg';
import './App.css';

// AWS imports
import { withAuthenticator, AmplifyGreetings } from '@aws-amplify/ui-react'
import { API, graphqlOperation } from 'aws-amplify'

function App() {
  return (
    <div className="App">
      <AmplifyGreetings username="testUsername"></AmplifyGreetings>
      App goes here
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
