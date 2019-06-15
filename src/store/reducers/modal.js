const INITIAL_STATE = {
  isOpen: false,
  cordinates: null,
};
export default function map(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SHOW_MODAL': {
      return { isOpen: true, cordinates: action.payload.cordinates };
    }
    case 'CLOSE_MODAL': {
      return { isOpen: false, cordinates: null };
    }
    default:
      return state;
  }
}
