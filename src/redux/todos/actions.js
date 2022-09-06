import {
  ADDED,
  DELETED,
  TOGGLED,
  COLOR_SELECTED,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from './actionTypes';

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText
  };
};

export const deleted = (todoID) => {
  return {
    type: DELETED,
    payload: todoID
  };
};

export const toggled = (todoID) => {
  return {
    type: TOGGLED,
    payload: todoID
  };
};

export const colorSelected = (todoID, color) => {
  return {
    type: COLOR_SELECTED,
    payload: {
      todoID,
      color
    }
  };
};

export const completeAll = () => {
  return {
    type: COMPLETE_ALL
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED
  };
};
