const INITIAL_STATE = {
  loading: false,
  data: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER_REQUEST': {
      return { ...state, loading: true };
    }

    case 'ADD_USER_SUCCESS': {
      return { ...state, data: [...state.data, action.payload.data], loading: false };
    }

    case 'REMOVE_USER': {
      return {
        ...state,
        data: state.data.filter(user => user.id !== action.payload.user.id),
      };
    }

    default:
      return state;
  }
}
