import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { KanbanModule } from './kanban/kanban.module';

import { AppComponent } from './app.component';

import { BoardComponent } from './components/board/board.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AlertModule } from 'ngx-bootstrap';

const appRoutes: Routes = [
  {
    path: 'board/:id',
    component: BoardComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    KanbanModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
      },
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
