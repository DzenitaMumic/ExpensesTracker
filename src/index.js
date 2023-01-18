import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot je metod iz ReactDOM library which is par of react library
//.createRoot method tell react that this should be the root*(korijen) nase aplikacije, the main place where the react app gets rendered to
// than we store this root object in a const (varijablu), i onda pozovemo .render method na taj root object, u svrhu kazivanja reactu what should be rendered in that div that we secected.
root.render(<App />); // App is a component (function that we import from anothner file), we render app inside a div root . code in () is JSX, it is html code inside a JS file
