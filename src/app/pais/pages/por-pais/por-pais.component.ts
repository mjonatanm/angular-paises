import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError:boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias:boolean = false;

  constructor(private paisService:PaisService) { }

  buscar( termino:string ){

    this.mostrarSugerencias = false;
    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarPais(this.termino)
      .subscribe(paises => {
        console.log(paises);
        this.paises = paises;
      }, (err) =>{  
        //Cuando hay algun error del servicio, status != 20%, 
        //se va a hacer lo indicado en ésta seccion
        this.hayError = true;
        this.paises=[];
      });
  }

  sugerencias(termino:string){
    this.mostrarSugerencias = true;
    this.hayError=false;
    this.termino = termino;
    console.log(termino)
    this.paisService.buscarPais(termino)
        .subscribe(paises => this.paisesSugeridos = paises.splice(0,3),
        (err) => this.paisesSugeridos=[]);
  }

  buscarSugerido (termino:string){
    this.buscar(termino);
  }

} 