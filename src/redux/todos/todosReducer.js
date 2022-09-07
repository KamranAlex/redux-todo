import {
  ADDED,
  DELETED,
  TOGGLED,
  COLOR_SELECTED,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from './actionTypes';
import { v4 as u_id } from 'uuid';

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED: {
      return [
        ...state,
        {
          id: u_id(),
          title: action.payload,
          completed: false
        }
      ];
    }

    case DELETED: {
      return state.filter((todo) => todo.id !== action.payload);
    }

    case TOGGLED: {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed
        };
      });
    }

    case COLOR_SELECTED: {
      return state.map((todo) => {
        if (todo.id !== action.payload.todoID) {
          return todo;
        }
        return {
          ...todo,
          color: action.payload.color
        };
      });
    }

    case COMPLETE_ALL: {
      return state.map((todo) => {
        return {
          ...todo,
          completed: !todo.completed
        };
      });
    }

    case CLEAR_COMPLETED: {
      return state.filter((todo) => todo.completed !== true);
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;
