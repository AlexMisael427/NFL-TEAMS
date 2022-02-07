import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { TeamServiceService } from 'src/app/services/team-service.service';
import { ITeamModel } from 'src/app/shared/team.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit,OnDestroy {

  subscription : Subscription;
  displayModal = false;
  response = false;
  message= 'The Game was added successfully ';

  teams : ITeamModel[] = [];

  constructor(
    private teamServiceService: TeamServiceService
  ) { }


  ngOnInit(): void {

  this.loadTeams();

  }

  loadTeams(){
    this.subscription = this.teamServiceService.getTeams().subscribe(
      res=>{
        console.log(res);
        
        this.teams = res.teams;
      },
      err=>{console.error(err);
      }
    );
  }

  openModalAddGame(){
    this.displayModal = true;
  }

  closeModal(){
    this.displayModal = false;
  }


  addGame(){

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSuccess(){
    this.response = true;
  }

  onCloseSuccess(){
    this.response = false;
    this.displayModal = false;

  }

  deleteTeam(team: ITeamModel){

    this.teamServiceService.deleteTeam(team._id as string).subscribe({
      next:(v)=>{
      this.response = true;
      this.message = 'the team was deleted correctly'  
      this.loadTeams();
      
      },
      error:(e)=>{console.error(e);
        this.response = true;
        this.message = e.error.msg;
       }
      
    })
  }

}
