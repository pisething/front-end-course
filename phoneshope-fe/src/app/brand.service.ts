import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  url="http://localhost:8080/brands";

  constructor(private http: HttpClient) { }

  getBrands(){
    return this.http.get(this.url);
  }
}
