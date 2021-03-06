import { merge, get } from 'lodash/fp';
import { ACTIONS } from 'redux-api-call';
import { LOGIN_USER } from './userState';
import { DEFAULT_OPTION_TOAST } from '../utils/options';
import {
  TOAST_ERROR,
  TOAST_SUCCESS,
  TOAST_DEFAULT,
  TOAST_INFO
} from '../enums/actions';
export const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR';
export const REMOVE_TOAST = 'REMOVE_TOAST';

const defaultState = {
  notifications: []
};

const doToastWithType = ({ state = defaultState, message, type }) => {
  if (!message) return state;
  const newNotification = merge(DEFAULT_OPTION_TOAST(), {
    options: { variant: type },
    message
  });
  return {
    ...state,
    notifications: [
      ...state.notifications,
      {
        ...newNotification,
        key: newNotification.options.key
      }
    ]
  };
};
export const removeToast = key => ({
  type: REMOVE_TOAST,
  key
});
const hasErrors = get('json.errors');

export default {
  toastNotification: (
    state = defaultState,
    { type, payload = {}, notification = {}, key }
  ) => {
    const { name } = payload;
    let msgNotify = '';
    if (type === ACTIONS.COMPLETE && !hasErrors(payload)) {
      switch (name) {
        case LOGIN_USER:
          msgNotify = 'Login success';
          break;
        default:
          break;
      }
      return merge(
        doToastWithType({
          state,
          message: msgNotify,
          type: TOAST_SUCCESS
        }),
        payload
      );
    } else if (
      type === ACTIONS.FAILURE ||
      (type === ACTIONS.COMPLETE && hasErrors(payload))
    ) {
      switch (name) {
        case LOGIN_USER:
          msgNotify = 'Login fail';
          break;

        default:
          break;
      }
      return merge(
        doToastWithType({
          state,
          message: msgNotify,
          type: TOAST_ERROR
        }),
        payload
      );
    } else {
      switch (type) {
        case TOAST_INFO:
        case TOAST_SUCCESS:
        case TOAST_ERROR:
        case TOAST_DEFAULT:
          if (!notification.message) return state;
          const newNotification = merge(DEFAULT_OPTION_TOAST(), notification);
          if (!notification.options || !notification.options.variant) {
            newNotification.options.variant = type;
          }
          return {
            ...state,
            notifications: [
              ...state.notifications,
              {
                ...newNotification,
                key: newNotification.options.key
              }
            ]
          };
        case REMOVE_TOAST:
          return {
            ...state,
            notifications: state.notifications.filter(
              notification => notification.key !== key
            )
          };
        default:
          return state;
      }
    }
  }
};
