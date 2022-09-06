import {
  ADDED,
  DELETED,
  TOGGLED,
  COLOR_SELECTED,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from './actionTypes';

const initialState = [
  {
    id: 1,
    title: 'Learn React JS',
    complete: true
  },
  {
    id: 2,
    title: 'Learn Redux',
    complete: false
  }
];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED: {
      return;
    }
    case DELETED: {
      return;
    }
    case TOGGLED: {
      return;
    }
    case COLOR_SELECTED: {
      return;
    }
    case COMPLETE_ALL: {
      return;
    }
    case CLEAR_COMPLETED: {
      return;
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;
