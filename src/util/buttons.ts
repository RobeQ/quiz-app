export enum Quiz_Button_Type {
  START = 'START',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
}

export const QUIZ_BUTTONS = [
  { type: Quiz_Button_Type.START, color: 'green', icon: 'play' },
  { type: Quiz_Button_Type.EDIT, color: 'blue', icon: 'pencil' },
  { type: Quiz_Button_Type.DELETE, color: 'red', icon: 'delete' },
];

export enum Profile_Button_Type {
  BASIC_PROFILE_SETTINGS = 'BASIC PROFILE SETTINGS',
  CHANGE_PASSWORD = 'CHANGE PASSWORD',
}
