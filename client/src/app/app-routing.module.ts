import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractesComponent } from './components/contractes/contractes.component';
import { LoginComponent } from './components/login/login.component';
import { ContingutsComponent } from './components/continguts/continguts.component';
import { RegisterComponent } from './components/register/register.component';
import { ContingutComponent } from './components/contingut/contingut.component';
import { CategoriesFavoritesComponent } from './components/categories-favorites/categories-favorites.component';
import { MissatgesComponent } from './components/missatges/missatges.component';

const routes: Routes = [
  { path: 'continguts', component: ContingutsComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contractes', component: ContractesComponent },
  { path: 'contingut', component: ContingutComponent },
  { path: 'categoriesFavorites', component: CategoriesFavoritesComponent },
  { path: 'missatges', component: MissatgesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
