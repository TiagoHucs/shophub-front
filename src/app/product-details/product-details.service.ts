import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  URL: string = 'products/';

  constructor(private http: HttpClient) { }

  public get(id:string): Observable<any> {
    return this.http.get<any[]>(`${environment.domain}${this.URL}${id}`);
  }
}
