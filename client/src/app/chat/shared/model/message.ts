import {User} from './user';
import {Action} from './action';

export interface Message {
  id?: number;
  from?: User;
  alterId?: number;
  alterContent?: string;
  reply?: boolean;
  content?: any;
  action?: Action;
}
