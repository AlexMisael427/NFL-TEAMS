import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {  catchError, delay, map, tap } from 'rxjs/operators';
import { ITeamModel } from '../shared/team.model';
import { Observable } from 'rxjs';

const BASE_URL = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  constructor(
    private http: HttpClient,
  ) { }


  getTeams():Observable<any> {
    const url = `${BASE_URL}/teams`;

    return this.http.get<any>(url)
      .pipe(
        delay(100),
        map(resp => {
          return {
            totalRegistros: resp.totalRegistros,
            teams: resp.teams
          }
        })
      );
  }

  getTeam(id: String):Observable<any> {
    const url = `${BASE_URL}/teams/${id}`;

    return this.http.get<any>(url)
      .pipe(
        delay(100),
        map(resp => {
          return {
            totalRegistros: resp.totalRegistros,
            team: resp.team
          }
        })
      );
  }

  createTeam(team:ITeamModel):Observable<ITeamModel>{
    const url = `${BASE_URL}/teams`;
    return this.http.post<any>(url,team);
  }

  
  updateTeam(id:string,team:ITeamModel):Observable<ITeamModel>{
    const url = `${BASE_URL}/teams/${id}`;
    return this.http.put<any>(url,team);
  }

  deleteTeam(id:string):Observable<ITeamModel>{
    const url = `${BASE_URL}/teams/${id}`;
    return this.http.delete<any>(url);
  }



}
