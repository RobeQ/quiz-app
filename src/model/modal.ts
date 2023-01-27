export enum ModalAction {
  SAVE = 'SAVE',
  EDIT = 'EDIT',
  UPDATE = 'UPDATE',
  START = 'START',
  DELETE = 'DELETE',
  CANCEL = 'CANCEL',
}

export interface QuizActionModal {
  title: string;
  text: string;
  agreeText: string;
  disagreeText: string;
  action: ModalAction;
}

export const QUIZ_DELETE_MODAL = (): QuizActionModal => {
  return {
    action: ModalAction.DELETE,
    agreeText: 'Delete',
    disagreeText: 'Cancel',
    text: 'Are you sure about removal of the quiz?',
    title: 'Delete quiz',
  };
};

export const QUIZ_SAVE_MODAL = (): QuizActionModal => {
  return {
    action: ModalAction.SAVE,
    agreeText: 'Save',
    disagreeText: 'Cancel',
    text: 'Are you sure about saving the quiz?',
    title: 'Save quiz',
  };
};

export const QUIZ_UPDATE_MODAL = (): QuizActionModal => {
  return {
    action: ModalAction.UPDATE,
    agreeText: 'Update',
    disagreeText: 'Cancel',
    text: 'Are you sure about updating the quiz?',
    title: 'Update quiz',
  };
};

export const QUIZ_START_MODAL = (): QuizActionModal => {
  return {
    action: ModalAction.START,
    agreeText: 'Start',
    disagreeText: 'Cancel',
    text: 'Are you sure about starting the quiz?',
    title: 'Start quiz',
  };
};

export const QUIZ_EDIT_MODAL = (): QuizActionModal => {
  return {
    action: ModalAction.EDIT,
    agreeText: 'Edit',
    disagreeText: 'Cancel',
    text: 'Are you sure about editing the quiz?',
    title: 'Edit quiz',
  };
};

export const QUIZ_CANCEL_MODAL = (): QuizActionModal => {
  return {
    action: ModalAction.CANCEL,
    agreeText: 'Yes',
    disagreeText: 'No',
    text: 'Are you sure about canceling the quiz creation?',
    title: 'Cancel quiz creation',
  };
};
