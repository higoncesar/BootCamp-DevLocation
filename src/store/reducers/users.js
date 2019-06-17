const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER_REQUEST': {
      return { ...state, loading: true };
    }

    case 'ADD_USER_SUCCESS': {
      return {
        ...state,
        data: [...state.data, action.payload.data],
        loading: false,
        error: null,
      };
    }

    case 'ADD_USER_FAILURE': {
      return { ...state, loading: false, error: action.payload.error };
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
