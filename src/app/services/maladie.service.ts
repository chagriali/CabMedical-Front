import {Injectable} from "@angular/core";
import {Headers,Http} from "@angular/http";
import 'rxjs/add/operator/map'
@Injectable()
export class MaladieService{

  constructor(private http:Http) {}

  getMaladie(){
    return this.http.get('http://localhost:8080/maladie').map(res => res.json());
  }

  addMaladie(maladie){
    let header = new Headers({'Access-Control-Allow-Origin': '*'});
    return this.http.post('http://localhost:8080/maladie',maladie,{headers:header}).map(res => res.json());
  }
}
