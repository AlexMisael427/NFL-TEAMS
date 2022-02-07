import { Component, OnInit } from '@angular/core';
import { GameServiceService } from 'src/app/services/game-service.service';
import { IGame } from 'src/app/shared/game.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  games: IGame[]=[];


  constructor(
    private gameService:GameServiceService
  ) { 

    this.gameService.getGames().subscribe({
      next: (v) =>{
        console.log(v);
        
        this.games = v.games;
        
      },
      error:(e) =>console.error(e)
      
    })
  }

  ngOnInit(): void {

  }

}
