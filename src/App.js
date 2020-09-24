import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// AWS imports
import { withAuthenticator, AmplifyGreetings } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { divisionsByNumber } from './graphql/queries'

const App = () => {
  const [allDivisions, setAllDivisions] = useState([]);

  useEffect(() => {
    const fetchDivisions = async () => {
      const results = await API.graphql(graphqlOperation(divisionsByNumber, { baseType: "Division" }));
      setAllDivisions(results.data.divisionsByNumber.items);
    }
    fetchDivisions();
  },
    []
  )

  return (
    <div>
      <AmplifyGreetings />
      <ul>
        {allDivisions.map((divis) => {
          return (
            <div>
              <li>Division {divis.id} - {divis.title}</li>
              <ul>
                {divis.sections.items.map((sec) => <li>{sec.id} - {sec.title}</li>)}
              </ul>
            </div>
          )
        })}
      </ul>
    </div>
  )
};

export default withAuthenticator(App);
