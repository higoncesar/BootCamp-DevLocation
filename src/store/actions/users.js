export const addUserRequest = (user, cordinates) => ({
  type: 'ADD_USER_REQUEST',
  payload: { user, cordinates },
});
export const addUserSuccess = data => ({ type: 'ADD_USER_SUCCESS', payload: { data } });

export const removeUser = user => ({ type: 'REMOVE_USER', payload: { user } });

export const addUserFailure = error => ({ type: 'ADD_USER_FAILURE', payload: { error } });
