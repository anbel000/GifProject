import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  
  constructor(private http: HttpClient) { }

  public getTrendyGif():Observable<any>{

    return this.http.get(environment.API_GIPHY + "trending?limit=50&api_key=" + environment.API_KEY);

  }

  public getGif(searchValue:string):Observable<any>{

    return this.http.get(environment.API_GIPHY + "search?limit=50&api_key=" + environment.API_KEY + "&q=" + searchValue);

  }

}
