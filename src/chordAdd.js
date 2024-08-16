import './chordAdd.css';
import React, { useState, useRef } from 'react';
import { updateChords, updateClick } from './redux/actions.js';
import { useDispatch } from 'react-redux';
const chordData = {
  name: null,
  fret:null,
  mute:[],
  notes: new Array(24).fill(''),
  bottom: []
} 

function ChordAdd() {
    const dispatch = useDispatch();
    const [chords, setChords] = useState(chordData);
    const xBtns = useRef([]);
    const btns = useRef([]);
    const fret = useRef();
    const name = useRef();
    const bottom = useRef([]);

    const handleSubmit = () =>{
      const bottomArr = [];
      const muteArr = [];
      for(let i=0; i<6; i++){
        if(bottom.current[i].value !== '')
          bottomArr[i] = bottom.current[i].value;
      }

      for(let i=0; i<6; i++){
        if(xBtns.current[i].value !== '')
          muteArr[i] = xBtns.current[i].value;
      }

      const updatedChords = {
        ...chords,
        name: name.current.value,
        fret: fret.current.value,
        bottom: bottomArr,
        mute: muteArr
      }
      dispatch(updateChords(updatedChords));
      dispatch(updateClick(true));
      setChords(updatedChords);
      
    }
    const setKey = (btn) =>{

      if (btns.current[btn]){
        
        btns.current[btn].classList.toggle('btnClicked');
        if(btns.current[btn].classList.contains('btnClicked')){
          const added = [...(chords.notes)];
          added[btn-1] = 'note';

          const updateChords = {
            ...chords,
            notes: added
          }
          setChords(updateChords);
        }
        else{
          const removed = [...(chords.notes)];
          removed[btn-1] = '';

          const updateChords = {
            ...chords,
            notes: removed
          }
          setChords(updateChords);
        }
      }
    }
    
    const setX = (btn) =>{
      if (xBtns.current[btn])
        xBtns.current[btn].classList.toggle('x-btn-clicked');
        if(xBtns.current[btn].classList.contains('x-btn-clicked')){
          xBtns.current[btn].value = 'x';
        }
        else{
          xBtns.current[btn].value = '';
        } 

    }
  return (
    <div id="chord">
        <h3 id="chordName"><input id="chordInput" ref={name}type="text"/></h3>
        <div id="chordBody">
          <div className="fret"><input id="fretInput" ref={fret} type="text"/></div>
          <div className="container">
          <div className="top top-1"><button className="x-btn" ref={(el) => xBtns.current[0] = el} onClick={()=>setX(0)}>x</button></div>
          <div className="top top-2"><button className="x-btn" ref={(el) => xBtns.current[1] = el} onClick={()=>setX(1)}>x</button></div>
          <div className="top top-3"><button className="x-btn" ref={(el) => xBtns.current[2] = el} onClick={()=>setX(2)}>x</button></div>
          <div className="top top-4"><button className="x-btn" ref={(el) => xBtns.current[3] = el} onClick={()=>setX(3)}>x</button></div>
          <div className="top top-5"><button className="x-btn" ref={(el) => xBtns.current[4] = el} onClick={()=>setX(4)}>x</button></div>
          <div className="top top-6"><button className="x-btn" ref={(el) => xBtns.current[5] = el} onClick={()=>setX(5)}>x</button></div>
          <div className="item item-1 left"><button className="btn" ref={(el) => btns.current[1] = el} onClick={()=>setKey(1)}></button></div>
          <div className="item item-2"><button className="btn" ref={(el) => btns.current[2] = el} onClick={()=>setKey(2)}></button></div>
          <div className="item item-3"><button className="btn" ref={(el) => btns.current[3] = el} onClick={()=>setKey(3)}></button></div>
          <div className="item item-4"><button className="btn" ref={(el) => btns.current[4] = el} onClick={()=>setKey(4)}></button></div>
          <div className="item item-5"><button className="btn" ref={(el) => btns.current[5] = el} onClick={()=>setKey(5)}></button></div>
          <div className="item item-6 right"><button className="btn" ref={(el) => btns.current[6] = el} onClick={()=>setKey(6)}></button></div>
          <div className="item item-7 left"><button className="btn" ref={(el) => btns.current[7] = el} onClick={()=>setKey(7)}></button></div>
          <div className="item item-8"><button className="btn" ref={(el) => btns.current[8] = el} onClick={()=>setKey(8)}></button></div>
          <div className="item item-9"><button className="btn" ref={(el) => btns.current[9] = el} onClick={()=>setKey(9)}></button></div>
          <div className="item item-10"><button className="btn" ref={(el) => btns.current[10] = el} onClick={()=>setKey(10)}></button></div>
          <div className="item item-11"><button className="btn" ref={(el) => btns.current[11] = el} onClick={()=>setKey(11)}></button></div>
          <div className="item item-12 right"><button className="btn" ref={(el) => btns.current[12] = el} onClick={()=>setKey(12)}></button></div>
          <div className="item item-13 left"><button className="btn" ref={(el) => btns.current[13] = el} onClick={()=>setKey(13)}></button></div>
          <div className="item item-14"><button className="btn" ref={(el) => btns.current[14] = el} onClick={()=>setKey(14)}></button></div>
          <div className="item item-15"><button className="btn" ref={(el) => btns.current[15] = el} onClick={()=>setKey(15)}></button></div>
          <div className="item item-16"><button className="btn" ref={(el) => btns.current[16] = el} onClick={()=>setKey(16)}></button></div>
          <div className="item item-17"><button className="btn" ref={(el) => btns.current[17] = el} onClick={()=>setKey(17)}></button></div>
          <div className="item item-18 right"><button className="btn" ref={(el) => btns.current[18] = el} onClick={()=>setKey(18)}></button></div>
          <div className="item item-19 left bottom1"><button className="btn" ref={(el) => btns.current[19] = el} onClick={()=>setKey(19)}></button></div>
          <div className="item item-20 bottom1"><button className="btn" ref={(el) => btns.current[20] = el} onClick={()=>setKey(20)}></button></div>
          <div className="item item-21 bottom1"><button className="btn" ref={(el) => btns.current[21] = el} onClick={()=>setKey(21)}></button></div>
          <div className="item item-22 bottom1"><button className="btn" ref={(el) => btns.current[22] = el} onClick={()=>setKey(22)}></button></div>
          <div className="item item-23 bottom1"><button className="btn" ref={(el) => btns.current[23] = el} onClick={()=>setKey(23)}></button></div>
          <div className="item item-24 right bottom1"><button className="btn" ref={(el) => btns.current[24] = el} onClick={()=>setKey(24)}></button></div>
          <div className="bottom bottom-1"><input ref={(el) => bottom.current[0] = el} type="text"/></div>
          <div className="bottom bottom-2"><input ref={(el) => bottom.current[1] = el} type="text"/></div>
          <div className="bottom bottom-3"><input ref={(el) => bottom.current[2] = el} type="text"/></div>
          <div className="bottom bottom-4"><input ref={(el) => bottom.current[3] = el} type="text"/></div>
          <div className="bottom bottom-5"><input ref={(el) => bottom.current[4] = el} type="text"/></div>
          <div className="bottom bottom-6"><input ref={(el) => bottom.current[5] = el} type="text"/></div>
          </div>
        </div>
        <button id="submit" onClick={handleSubmit}>submit</button>
    </div>
  );
}

export {ChordAdd};