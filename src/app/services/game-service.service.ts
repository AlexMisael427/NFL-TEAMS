import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  catchError, delay, map, tap } from 'rxjs/operators';
import { IGame } from '../shared/game.model';

const BASE_URL = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private http: HttpClient,) { }


  getGames():Observable<any> {
    const url = `${BASE_URL}/games`;

    return this.http.get<any>(url)
      .pipe(
        delay(100),
        map(resp => {
          return {
            totalRegistros: resp.totalRegistros,
            games: resp.games
          }
        })
      );
  }

  createGame(game:IGame):Observable<IGame>{
    const url = `${BASE_URL}/games`;
    return this.http.post<any>(url,game);
  }
}
