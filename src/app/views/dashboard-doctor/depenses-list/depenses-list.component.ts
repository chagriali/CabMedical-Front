import {Component, OnInit} from "@angular/core";

import { Router} from '@angular/router';
import {DepensesService} from "../../../services/depenses.service";
import {DepensesModel} from "../../../models/depenses.model";
@Component({
  selector : 'doctor-depenses-list',
  templateUrl : 'depenses-list.component.html'
})
export class DepensesListComponent implements OnInit{
  depenses:DepensesModel[] = [];
  constructor(private depensesService:DepensesService, private router:Router){}
  ngOnInit(): void {
    this.depensesService.getDepenses().subscribe(
      (result)=>{
        console.log(result);
        let depenses:DepensesModel[] = [];
        let d : DepensesModel;
        for (let depense of result){
          d = new DepensesModel(depense.id_depense,new Date(depense.date), depense.libelle, depense.montant);
          depenses.push(d);
        }
        this.depenses = depenses;
        console.log(this.depenses);
      }
      ,
      (error)=>{
        console.log(error);
      }
    );
  }
  AddNewDepense(){
    this.router.navigate(['/doctor/depenses/new']);

  }
}
