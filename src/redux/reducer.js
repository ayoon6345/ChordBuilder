import { UPDATE_CHORDS, SEND_CLICK ,TEST, SAVE} from './actions';

const initialState = {
  chord: {  name: null,
    fret: null,
    mute: [],
    notes: [],
    bottom: []
  },
  click: false,
  save: []
};

const chordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHORDS:
      return {
        ...state,
        chord: action.payload
      };
      case SEND_CLICK:
        return {
          ...state,
          click: action.payload
        };
      case TEST:
        const updated = {...state.chord ,bottom: [action.payload,...state.chord.bottom, ]}
        return {
          ...state,
          chord: updated
        };
      case SAVE:
        return {
          ...state,
          save: action.payload
        };
    default:
      return state;
  }
};

export default chordsReducer;