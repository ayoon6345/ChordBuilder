import './saveChords.css'
import React from 'react';
import { useSelector } from 'react-redux';
function SaveChords() {
    const savedChords = useSelector(state => state.save);
    function save(){
        
        fetch('/api/hello')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
        });
        console.log(savedChords);
    }
  return (
    <div className="saved">
        <button id="save" onClick={save}>save chords</button>

    </div>
  );
}

export {SaveChords};

