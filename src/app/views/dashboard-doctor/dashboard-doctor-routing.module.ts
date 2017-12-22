import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardDoctorComponent } from './dashboard-doctor.component';
import {DoctorPatientsListComponent,} from "./patients-list/patients-list.component";
import {DoctorDetailPatientComponent} from "./detail-patient/detail-patient.component";
import {ConsultationsListComponent} from "./consultations-list/consultations-list.component";
import {ConsultationEditComponent} from "./consultation-edit/consultation-edit.component";
import {DepensesListComponent} from "./depenses-list/depenses-list.component";
import {AddDepenseComponent} from "./add-depense/add-depense-component";

const routes: Routes = [
  {
    path: '',
    component: DashboardDoctorComponent,
    data: {
      title: 'Dashboard'
    },
    children : [
      {
        path: 'patient-list',
        component: DoctorPatientsListComponent ,
        data: {
          title: 'Liste des patients'
        }
      },
      {

        path: 'patient-detail/:id',
        component: DoctorDetailPatientComponent ,
        data: {
          title: 'Détail du patient'
        }
      },
      {

        path: 'consultations/:id',
        component: ConsultationsListComponent ,
        data: {
          title: 'Liste des Consultations'
        }
      },
      {

        path: 'patient-detail/:id/consultation/:idConsultation',
        component: ConsultationEditComponent ,
        data: {
          title: 'Edit consultation'
        }
      },
      {

        path: 'depenses',
        component: DepensesListComponent ,
        data: {
          title: 'Liste des Dépenses '
        }
      },
      {

        path: 'depenses/new',
        component: AddDepenseComponent ,
        data: {
          title: ' Nouvelle Dépenses '
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
