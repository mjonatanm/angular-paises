import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right:5px;
    }
    `]
})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  paises: Country[]=[];

  constructor(private paisService:PaisService) { }

  getClaseCSS (region:string) {
    return (this.regionActiva === region) ? 'btn-primary' : 'btn-outline-primary';
  }

  activarRegion(region:string){

    //Si la region es igual a la regionActiva no volvemos a llamar al servicio
    //Esto sucede cuando hacemos varios click en la misma region. 
    if(this.regionActiva === region){return;}

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarPorRegion(region).subscribe(
      pais => {
        this.paises = pais
      }
      );
  }

} 
 