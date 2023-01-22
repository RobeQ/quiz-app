export enum BUTTON_TYPE {
  START = 'STARt',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
}

export const QUIZ_BUTTONS = [
  { type: BUTTON_TYPE.START, color: 'green', icon: 'play' },
  { type: BUTTON_TYPE.EDIT, color: 'blue', icon: 'pencil' },
  { type: BUTTON_TYPE.DELETE, color: 'red', icon: 'delete' },
];
