import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { ChatComponent } from './chat/chat.component';

export const ROUTES: Routes = [
    { path: 'callback', component: CallbackComponent },
    { path: 'chat', component: ChatComponent },
    { path: '**', redirectTo: 'chat' }
];
