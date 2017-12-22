import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class DepensesService {
  constructor(private http: Http) {
  }

  getDepenses() {
    return this.http.get('http://localhost:8080/depenses').map(res => res.json());

  }

  addDepense(depense){
    let header = new Headers({'Access-Control-Allow-Origin': '*'});
    return this.http.post('http://localhost:8080/depenses/',depense,{headers:header}).map(res => res.json());
  }

}
