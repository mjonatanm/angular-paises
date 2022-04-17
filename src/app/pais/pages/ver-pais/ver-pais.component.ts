import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country, Name } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais: Country[] = []; //Le indicamos a typescript que puede ser nulo su valor inicializado.

  constructor(
      private activateRoute:ActivatedRoute
     ,private paisService:PaisService) { } //ActivateRoute nos ayuda a obtener los parametros de la url

  ngOnInit(): void {

    //Una forma
    // this.activateRoute.params
    // .subscribe( ({id}) => { //({id}) Desestructuración de argumentos. 
    
    //   this.paisService.buscarPaisporId(id)
    //   .subscribe(pais=>{
    //     console.log(pais);
    //   });

    // })

    //Otra forma de hacer lo mismo
    //El switchMap toma el paramentro y directamente se lo pasa a la funciond el servicio.
    //Es un codigo mas reducido, no hacemos dos subscribe seguidos.
    this.activateRoute.params
    .pipe(
      switchMap( ({ id }) => this.paisService.buscarPaisporId( id ) ),
      tap()
    )
    .subscribe( pais => this.pais = pais )

  }

}
