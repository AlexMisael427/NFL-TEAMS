import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: 'Home', component : InicioComponent },
  { path: 'Teams', component : TeamsComponent },
  { path: 'Add-Team', component : AddTeamComponent },
  { path: 'Update-Team/:id', component : AddTeamComponent },
  { path: '**', pathMatch : 'full', redirectTo: 'Home' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
