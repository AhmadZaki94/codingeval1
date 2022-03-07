import './App.css';

import { Books } from "./components/Books";

import { Pens } from "./components/Pens";

import { Notebooks } from "./components/Notebooks";

import { Inkpens } from "./components/Inkpens";

function App() {
  return (
    <div className="App">
      <Books/>
      <Pens/>
      <Notebooks/>
      <Inkpens/>
    </div>
  );
}

export default App;
