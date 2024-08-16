import './chordDisplay.css';
import React, { useState,useEffect } from 'react';
import {  updateClick,saveChords} from './redux/actions.js';
import { useDispatch, useSelector } from 'react-redux';


function ChordDisplay(){
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
    function deleteChord(ind){     
        const deletedChord = [...chords].filter((_,index) => index !== ind);
        setChords(deletedChord);
    }

    useEffect(() => {
        dispatch(saveChords(chords));
    },[chords,dispatch]);

  return (
    <div id="align">
        {chords.map((chord, index) => (
            <div id="chordsDisplay" key={index}>
                
                <div>
                    <p id="nameDisplay">{chord.name}</p>
                    <div id="chordBodyDisplay">
                    <div className="fretDisplay">{chord.fret}</div>
                    <div className="containerDisplay">
                        <div className="topDisplay top-1">{chord.mute[0]}</div>
                        <div className="topDisplay top-2">{chord.mute[1]}</div>
                        <div className="topDisplay top-3">{chord.mute[2]}</div>
                        <div className="topDisplay top-4">{chord.mute[3]}</div>
                        <div className="topDisplay top-5">{chord.mute[4]}</div>
                        <div className="topDisplay top-6">{chord.mute[5]}</div>
                        <div className="item item-1 leftDisplay"><div className = {chord.notes[0]} ></div></div>
                        <div className="item item-2"><div className = {chord.notes[1]}></div></div>
                        <div className="item item-3"><div className = {chord.notes[2]} ></div></div>
                        <div className="item item-4"><div className = {chord.notes[3]} ></div></div>
                        <div className="item item-5"><div className = {chord.notes[4]} ></div></div>
                        <div className="item item-6 rightDisplay"><div className = {chord.notes[5]} ></div></div>
                        <div className="item item-7 leftDisplay"><div className = {chord.notes[6]} ></div></div>
                        <div className="item item-8"><div className = {chord.notes[7]} ></div></div>
                        <div className="item item-9"><div className = {chord.notes[8]} ></div></div>
                        <div className="item item-10"><div className = {chord.notes[9]} ></div></div>
                        <div className="item item-11"><div className = {chord.notes[10]} ></div></div>
                        <div className="item item-12 rightDisplay"><div className = {chord.notes[11]} ></div></div>
                        <div className="item item-13 leftDisplay"><div className = {chord.notes[12]} ></div></div>
                        <div className="item item-14"><div className = {chord.notes[13]} ></div></div>
                        <div className="item item-15"><div className = {chord.notes[14]} ></div></div>
                        <div className="item item-16"><div className = {chord.notes[15]} ></div></div>
                        <div className="item item-17"><div className = {chord.notes[16]} ></div></div>
                        <div className="item item-18 rightDisplay"><div className = {chord.notes[17]} ></div></div>
                        <div className="item item-19 leftDisplay bottom1"><div className = {chord.notes[18]}></div></div>
                        <div className="item item-20 bottom1"><div className = {chord.notes[19]} ></div></div>
                        <div className="item item-21 bottom1"><div className = {chord.notes[20]} ></div></div>
                        <div className="item item-22 bottom1"><div className = {chord.notes[21]} ></div></div>
                        <div className="item item-23 bottom1"><div className = {chord.notes[22]} ></div></div>
                        <div className="item item-24 rightDisplay bottom1"><div className = {chord.notes[23]} ></div></div>
                        <div className="bottom bottom-1">{chord.bottom[0]}</div>
                        <div className="bottom bottom-2">{chord.bottom[1]}</div>
                        <div className="bottom bottom-3">{chord.bottom[2]}</div>
                        <div className="bottom bottom-4">{chord.bottom[3]}</div>
                        <div className="bottom bottom-5">{chord.bottom[4]}</div>
                        <div className="bottom bottom-6">{chord.bottom[5]}</div>
                    </div>
                    </div>
                </div>
                
                <button id="delete" onClick={() =>deleteChord(index)}>x</button>
            </div>
        ))}
    </div>
  );
}
export {ChordDisplay};