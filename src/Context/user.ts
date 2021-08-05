import { UserProfileType } from '../types/userprofile';

export type UserProfileState = {
  user: UserProfileType;
};

export type UserProfileAction =
  | {
      type: 'SET_INITIAL_USER_STATE';
      payload: { user: UserProfileType };
    }
  | { type: 'LOGIN'; payload: { user: UserProfileType } }
  | { type: 'LOGOUT' };
