export const ADD = 'ADD';
export const CHECK = 'CHECK';
export const DELETE = 'DELETE';

export const addItem = (id, title, priority) => {
  return {
    type: ADD,
    payload: {
      id: id,
      title: title,
      checked: false,
      priority: priority,
    },
  };
};

export const checkItem = (id) => {
  return {
    type: CHECK,
    payload: id,
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
