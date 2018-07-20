import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    redirectTo:'/messages',
    pathMatch:'full'
  }, 
  {
    path: 'messages',
    component: MessageListComponent
  },
  {
    path: 'messages/message-detail/:id',
    component: MessageDetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
