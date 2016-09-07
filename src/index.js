import React from 'react';
import ReactDOM from 'react-dom';


const API_KEY = 'AIzaSyAzTmkufZ_2BKjdmc0gMD0yXlCbZJORIVY';

// Create a new component , This Component should produce some Html
const App = () => {
    return <div> Hi </div> ;
}

//Take This Component's generated html and put it on the page


ReactDOM.render(<App />, document.querySelector('.container'));