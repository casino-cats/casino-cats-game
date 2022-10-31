import { action, Action, computed, Computed } from "easy-peasy";
import { User } from "../interface";

export interface UserState {
  user: User;
  isAuthenticated: Computed<this, boolean>;
}

interface UserActions {
  setUser: Action<this, User>;
}

export interface UserModel extends UserState, UserActions {}

export const userModel: UserModel = {
  user: {},
  isAuthenticated: computed((state) => {
    return state.user.role === "admin" || state.user.role === "user";
  }),
  // ACTIONS
  setUser: action((state, payload) => {
    state.user = payload;
  }),
};
