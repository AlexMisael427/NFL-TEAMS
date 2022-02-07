import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ConfirmationService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenubarModule} from 'primeng/menubar';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {KnobModule} from 'primeng/knob';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ScrollPanelModule} from 'primeng/scrollpanel';



import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import {CalendarModule} from 'primeng/calendar';
import {GalleriaModule} from 'primeng/galleria';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TabMenuComponent,
    InicioComponent,
    AddTeamComponent,
    AddGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    MenubarModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    KnobModule,
    ToggleButtonModule,
    ButtonModule,
    DropdownModule,
    ScrollPanelModule,
    CalendarModule,
    GalleriaModule
  ],
  providers: [ConfirmationService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
