import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ITeamModel } from 'src/app/shared/team.model';
import {ConfirmationService} from 'primeng/api';
import { NgForm } from '@angular/forms';
import { TeamServiceService } from 'src/app/services/team-service.service';
import { delay, interval, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styles: [
  ]
})
export class AddTeamComponent implements OnInit,OnDestroy {

  team : ITeamModel ={};
  validacion:boolean = true;
  displayModal: boolean = false;
  year = '';
  subscription : Subscription;
  id : String = '';


  @ViewChild('editForm') editForm: NgForm;


  constructor(private confirmationService: ConfirmationService,
    private teamServiceService: TeamServiceService,
    private router: Router,
    private route: ActivatedRoute,
    public datepipe: DatePipe) { }


  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.teamServiceService.getTeam(id).subscribe({
          next:(v) =>{
            this.team = v.team;
            console.log( v.team.year);
            this.year =this.datepipe.transform(v.team.year, 'yyyy-MM-dd') as string;
          },
          error: (e) => console.error(e)
        });
      } 
  });
  }

  openConfirmation() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to add this team?'
    });
  }

  reject() {
    this.confirmationService.close();

  }
  save() {
    this.confirmationService.close();
    this.team.year = new Date(this.year);

    if (this.team._id) {
      this.subscription = this.teamServiceService.updateTeam(this.team._id,this.team).subscribe({
        next: (v) => {
          setTimeout(() => {
            this.displayModal = true;
          }, 1000);
        },
        error: (e) => console.error(e)
      }
      );
      
    } else {
      this.subscription = this.teamServiceService.createTeam(this.team).subscribe({
        next: (v) => {
          setTimeout(() => {
            this.displayModal = true;
          }, 1000);
        },
        error: (e) => console.error(e)
      }
      );
    }

  }

  onSuccess(){
    this.team = {};
    this.displayModal = false;
    this.router.navigateByUrl('/Teams');
    
  }

  ngOnDestroy(): void {
  //  this.subscription.unsubscribe();
  }

}
