import {User} from './user.model';
import {Action} from './action';

export interface Message {
    from: User;
    content: string;
    action?: Action;
}
