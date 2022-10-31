import { action, Action } from "easy-peasy";

export interface ChatState {
  messages: any;
}

interface ChatActions {
  setMessages: Action<this, any>;
}

export interface ChatModel extends ChatState, ChatActions {}

export const chatModel: ChatModel = {
  messages: [],
  // ACTIONS
  setMessages: action((state, payload) => {
    state.messages = payload;
  }),
};
