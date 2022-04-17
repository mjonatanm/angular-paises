import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl :string = 'https://restcountries.com/v3';  

  get httpParams(){
    return new HttpParams().set('fields','name,region,tld');
  }

  constructor( private http: HttpClient) { }

  buscarPais(termino:string):Observable<Country[]> {
    
    const url=`${ this.apiUrl }/name/${ termino}`;    
    return this.http.get<Country[]>(url);
    
  }

  buscarPorCapital(termino:string):Observable<Country[]> {
    
    const url=`${ this.apiUrl }/capital/${ termino}`;
    return this.http.get<Country[]>(url);
    
  }

  buscarPaisporId(id:string):Observable<Country[]> {

    const url=`${ this.apiUrl }/alpha/${ id.substr(1,2) }`;
    console.log(url);
    return this.http.get<Country[]>(url);
    
  }

  buscarPorRegion(region:string):Observable<Country[]> {

    const url=`https://restcountries.com/v3.1/region/${region}`;
    //Esto NO funciona porque las url estan con otro modelo de respuesta. 
    //Si fueran con la versión que se hizo el curso, funcionarian
    //return this.http.get<Country[]>(url, {params:this.httpParams})
    return this.http.get<Country[]>(url)
      //Con pipe y tap podemos obtener la respuesta del servicio en consola.
      .pipe(
        tap (console.log)
        );    
  }

}
