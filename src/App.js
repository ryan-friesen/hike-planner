import './App.css';

import Wrapper from './components/styled-components/Wrapper';
import Hike from './components/Hike';
import hikes from './data/hikes.json';

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
  console.log('App function component executed.');
  return (
    <Wrapper>
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
