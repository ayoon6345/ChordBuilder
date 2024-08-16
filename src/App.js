
import './App.css';
import {SaveChords} from './saveChords.js';
import {ChordAdd} from './chordAdd.js';
import {ChordDisplay} from './chordDisplay.js';

function App() {
  return (
    <div className="app">      
      <div className="create">
        <SaveChords />
        <ChordAdd />
      </div>
      <ChordDisplay />
    </div>
  );
}

export default App;
