import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})

export class PorCapitalComponent {

  termino :string = '';
  hayError:boolean= false;
  pais:Country[] = [];

  constructor(private paisService:PaisService) { }

  buscar( termino:string ){
    
    this.termino  = termino;
    this.hayError = false;
    this.paisService.buscarPorCapital( this.termino )
    .subscribe(pais => 
    {
        this.pais = pais;
    }, (error) =>{
      this.hayError = true;
      this.pais=[];
    });
  }
}
