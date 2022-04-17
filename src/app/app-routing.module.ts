import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '',                       //http://localhost:4200
        component: PorPaisComponent,    //Componente a mostrar
        pathMatch:'full'                //Definimos esta ruta como principal
    },
    {
        path: 'region',                 //http://localhost:4200/region
        component: PorRegionComponent
    },
    {
        path: 'capital',                //http://localhost:4200/capital
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',               //http://localhost:4200/pais/1
        component: VerPaisComponent
    },
    {
        path:'**',                       //http://localhost:4200/dasdjandalsjdhadha
        redirectTo:''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )  //Cuando manejamos una sola app usamos forroot, sino forChild. 
                                        //Cargamos nuestras rutas personalidas al modulo de rutas.
    ],
    exports:[
        RouterModule                    //Exportamos el modulo de rutas con nuestras rutas personalidadas.
    ]
})

export class AppRoutingModule{}