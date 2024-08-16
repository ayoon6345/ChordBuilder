import './App.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateClick} from './redux/actions.js';
function Chord() {
    const dispatch = useDispatch();
    const [chords, setChords] = useState([]);
    const newChord = useSelector(state => state.chord);
    const clicked = useSelector(state => state.click);
    useEffect(() => {
        if(clicked){
            setChords(prevChords => [...prevChords, newChord]);
            dispatch(updateClick(false));
        }
    },[newChord, clicked, dispatch]);

    
    useEffect(() => {
        console.log(chords);
    },[chords]);
    
  return (
    <div className="chordJson">
        {chords.map((chord, index) => (
            <div key={index}>
                {chord.name}
            </div>
        ))}
    </div>
  );
}

export {Chord};
