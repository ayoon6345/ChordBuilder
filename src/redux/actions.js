export const UPDATE_CHORDS = 'UPDATE_CHORDS';
export const SEND_CLICK = 'SEND_CLICK';
export const TEST = 'TEST';
export const SAVE = 'SAVE';

export const updateChords = (chords) => ({
  type: UPDATE_CHORDS,
  payload: chords,
});
export const updateClick = (click) => ({
  type: SEND_CLICK,
  payload: click,
});

export const updateTest = (bottom) => ({
  type: TEST,
  payload: bottom,
});
export const saveChords = (chord) => ({
  type: SAVE,
  payload: chord
});