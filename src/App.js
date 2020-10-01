import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// AWS imports
import { withAuthenticator, AmplifyGreetings } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { getProject, divisionsByNumber, partsByNumber, getParagraph, listParagraphs } from './graphql/queries'

// component imports
import Header from './containers/Header'
import Title from './containers/Title'
import DivisionBrowser from './containers/DivisionBrowser'
import SectionContent from './containers/SectionContent'
import Notes from './containers/Notes'

const App = () => {

  //-------- STATE --------//

  // outline state
  const [allDivisions, setAllDivisions] = useState([]);
  const [parts, setParts] = useState([]);
  const [paragraphs, setParagraphs] = useState([]);

  // project state
  const [projDivs, setProjDivs] = useState(["00", "011000"]);
  const [project, setProject] = useState()

  // current display state
  const [currentSection, setCurrentSection] = useState();


  //-------- FETCHING DATA --------//

  // fetch outline data
  useEffect(() => {
    const fetchOutline = async () => {
      const divisionResults = await API.graphql(graphqlOperation(divisionsByNumber, { baseType: "Division" }));
      const partResults = await API.graphql(graphqlOperation(partsByNumber, { baseType: "Part" }));
      setAllDivisions(divisionResults.data.divisionsByNumber.items);
      setParts(partResults.data.partsByNumber.items);
    }
    fetchOutline();
  },
    []
  )

  // fetch project specific data
  useEffect(() => {
    const fetchProject = async () => {
      const results = await API.graphql(graphqlOperation(getProject, { id: "1905" }));
      setProject(results.data.getProject);
    }
    fetchProject();
  },
    {}
  )


  useEffect(() => {
    const fetchParagraphs = async () => {
      const results = await API.graphql(graphqlOperation(listParagraphs));
      /*
      const flatResults = results.data.listParagraphs.items.map(e => {
        const partID = e.part.id
        e.part = partID
        return e
      })
      console.log(flatResults)
      */
      setParagraphs(results.data.listParagraphs.items);
    }
    fetchParagraphs();
  },
    []
  )

  //-------- HANDLERS --------//
  const checkHandler = (id, isOn) => {
    const newDivisions = project.divisionsOn
    console.log(newDivisions)
    if (isOn) {
      setProject({ ...project, divisionsOn: newDivisions.filter(div => div != id) });
    } else {
      setProject({ ...project, divisionsOn: [...newDivisions, id] })
    }

  }

  //-------- RENDERED COMPONENTS --------//
  return (
    <main>
      <Header />
      <Title id="000000" title="This is the title" />
      {project && <DivisionBrowser divisions={allDivisions} divisionsOn={project.divisionsOn} check={checkHandler} />}
      <SectionContent />
      <Notes />
      <div>{project ? project.divisionsOn[0] : "nothing here"}</div>
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
    </main>
  )
};

export default withAuthenticator(App);
