import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';

const chatRoutes: Routes = [
  { path: 'talk', component: ChatComponent, pathMatch: 'full' },
];

export const chatRouting = RouterModule.forChild(chatRoutes);
