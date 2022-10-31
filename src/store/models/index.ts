import { pageModel, PageModel } from "./page.model";
import { userModel, UserModel } from "./user.model";
import { chatModel, ChatModel } from "./chat.model";

export interface Model {
  userModel: UserModel;
  pageModel: PageModel;
  chatModel: ChatModel;
}

export const model: Model = {
  userModel: userModel,
  pageModel: pageModel,
  chatModel: chatModel,
};
