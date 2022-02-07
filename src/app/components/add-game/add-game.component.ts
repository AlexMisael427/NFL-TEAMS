import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameServiceService } from 'src/app/services/game-service.service';
import { TeamServiceService } from 'src/app/services/team-service.service';
import { IGame } from 'src/app/shared/game.model';
import { ITeamModel } from 'src/app/shared/team.model';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styles: [
  ]
})
export class AddGameComponent implements OnInit {

  @Output() saveSuccess = new EventEmitter<any>();

  newGame: IGame = {};
  selectedLocal: true;
  locals: ITeamModel[] = [];
  visitors: ITeamModel[] = [];

  constructor(private teamServiceService: TeamServiceService,
    private gameService: GameServiceService) {



    this.teamServiceService.getTeams().subscribe(
      {
        next: (res) => {
          this.locals = [...res.teams];
        },
        error: (e) => console.error(e),
        complete: () => console.log('end')


      }
    );

  }


  ngOnInit(): void {

  }

  onSelectLocal() {
    if (this.newGame.local) {
      this.visitors = this.locals.filter(local=> local !== this.newGame.local);
    }else{
      this.visitors = [];
    }

  }

  save(){
    this.gameService.createGame(this.newGame).subscribe({
      next: (v)=>{
        this.saveSuccess.emit(true);
      },
      error: (e) =>{
        console.error(e);
        
      }
    })
    
  }

}
