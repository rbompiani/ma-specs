import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// AWS imports
import { withAuthenticator, AmplifyGreetings } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { divisionsByNumber, partsByNumber, getParagraph, listParagraphs } from './graphql/queries'

// component imports
import DivisionBrowser from './containers/DivisionBrowser'

const App = () => {
  const [allDivisions, setAllDivisions] = useState([]);
  const [parts, setParts] = useState([]);
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const fetchDivisions = async () => {
      const results = await API.graphql(graphqlOperation(divisionsByNumber, { baseType: "Division" }));
      setAllDivisions(results.data.divisionsByNumber.items);
    }
    fetchDivisions();
  },
    []
  )

  useEffect(() => {
    const fetchParts = async () => {
      const results = await API.graphql(graphqlOperation(partsByNumber, { baseType: "Part" }));
      setParts(results.data.partsByNumber.items);
    }
    fetchParts();
  },
    []
  )

  useEffect(() => {
    const fetchParagraphs = async () => {
      const results = await API.graphql(graphqlOperation(listParagraphs));
      const flatResults = results.data.listParagraphs.items.map(e => {
        const partID = e.part.id
        e.part = partID
        return e
      })
      console.log(flatResults)
      setParagraphs(results.data.listParagraphs.items);
      console.log(results)
    }
    fetchParagraphs();
  },
    []
  )

  return (
    <div>
      <AmplifyGreetings />
      <div>
        <DivisionBrowser divisions={allDivisions} />
      </div>
      <ul>
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
      </ul>
    </div>
  )
};

export default withAuthenticator(App);
