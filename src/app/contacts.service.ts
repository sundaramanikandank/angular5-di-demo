import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ContactService {

  private _url:string = "http://localhost:9900/customerList.json";
  constructor(private _http: HttpClient) {

  }
  getContactInfo()  {
    return this._http.get(this._url);
  }
}
