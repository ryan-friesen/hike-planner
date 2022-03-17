/* 
Technically .env files are not totally safe for storing secrets. Secrets should
only be stored in a server, not the front-end.
*/

import './App.css';

import { useState } from 'react';
import Wrapper from 'components/styled-components/Wrapper';
import Hike from 'components/Hike';
import hikes from 'data/hikes.json';

const jsxTest = (
  <p>
    JSX <span>test</span> paragraph
  </p>
);

/* 
React converts the HTML-esque JSX into plain objects that mirror the HTML
element-to-be-rendered complete with HTML attributes, content, and HTML
child elements.
*/
console.log(jsxTest);

function App() {
  const [name, setName] = useState('');
  const [elevation, setElevation] = useState('');

  const handleSubmitHike = (event) => {
    /* 
    This blocks the default behavior (page refresh) of form submission
    React will re-render the page without a page refresh when the state changes
    */
    event.preventDefault();
    const newHike = { name: name, elevation: elevation };
    console.log(newHike);
    setName('');
    setElevation('');
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmitHike}>
        <div>
          <label>Name</label>
          <input
            type="text"
            /*
            when we set state, the new state will be inserted into the input
            element
            */
            value={name}
            /* 
            When the user changes the input box, it will update our state
            (when onChange and the above value attribute are used together, it
              accomplishes two-way data binding [one of them the user updates
              data, the other updates the visual form contents on the page])
            */
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Elevation</label>
          <input
            type="number"
            value={elevation}
            onChange={(e) => {
              setElevation(e.target.value);
            }}
          />
        </div>
        <button>Submit</button>
        <hr />
      </form>
      {/* 
      This executes the component's function and the properties are converted into an object of key value pairs to be passed in as a single object argument, available inside the component
      <ComponentName propName1="value 1" propName2={10} />
      */}

      {/* 
        Map (convert) hike JSON objects into an array of Hike components
        React will automatically loop over arrays to render the items.
       */}
      {hikes.map((hike, i) => {
        // Every child of an array must have a unique key attribute added.
        return <Hike key={i} hike={hike} />;
      })}
    </Wrapper>
  );
}

export default App;
