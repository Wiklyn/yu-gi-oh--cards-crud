import { Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { UpdateCardComponent } from './components/update-card/update-card.component';
import { AddCardComponent } from './components/add-card/add-card.component';

export const routes: Routes = [
  { path: 'card-list', component: CardListComponent },
  { path: 'add-card', component: AddCardComponent },
  { path: '', redirectTo: 'card-list', pathMatch: 'full' },
  { path: 'card-details/:id', component: CardDetailComponent },
  { path: 'update-card/:id', component: UpdateCardComponent },
  { path: '**', component: PageNotFoundComponent },
];
