import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  URL: string = 'products/';

  constructor(private http: HttpClient) { }

  public list(sort:string): Observable<any> {
    const sortUrl = sort == null ? '' : '?_sort=' + sort;

    return this.http.get<any[]>(`${environment.domain}${this.URL}${sortUrl}`);
  }
}
