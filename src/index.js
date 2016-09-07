import React from 'react';
import ReactDOM from 'react-dom';
// Create a new component , This Component should produce some Html
const App = () => {
    return <div> Hi </div> ;
}

//Take This Component's generated html and put it on the page


ReactDOM.render(<App />, document.querySelector('.container'));