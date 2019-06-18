/**
 * Types
 */
export const Types = {
  SHOW_MODAL: 'moda/SHOW_MODAL',
  CLOSE_MODAL: 'modal/CLOSE_MODAL',
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  isOpen: false,
  cordinates: null,
};
export default function map(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL: {
      return { isOpen: true, cordinates: action.payload.cordinates };
    }
    case Types.CLOSE_MODAL: {
      return { isOpen: false, cordinates: null };
    }
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  showModal: cordinates => ({ type: Types.SHOW_MODAL, payload: { cordinates } }),
  closeModal: () => ({ type: Types.CLOSE_MODAL }),
};
