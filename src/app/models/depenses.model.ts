

export class DepensesModel{
  id_depense:Number;
  date:Date;
  libelle:String;
  montant: Number;
  constructor(id_depense?: Number, date?: Date ,libelle?:String ,  montant?:Number ) {
    this.id_depense = id_depense;
    this.date = date;
    this.montant = montant;
    this.libelle = libelle;
  }

}
