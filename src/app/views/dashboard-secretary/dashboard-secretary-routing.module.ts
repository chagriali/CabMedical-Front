import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardSecretaryComponent } from './dashboard-secretary.component';
import {MedicalFileInputComponent} from "./medical-file-input/medical-file-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SexService} from "../../services/sex.service";

const routes: Routes = [
  {
    path: '',
    component: DashboardSecretaryComponent,
    data: {
      title: 'Secretary'
    }
    ,
    children : [
      {
        path: 'add-new-medical-file',
        component: MedicalFileInputComponent ,
        data: {
            title: 'Add new Medical File'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[]
})
export class DashboardRoutingModule {}