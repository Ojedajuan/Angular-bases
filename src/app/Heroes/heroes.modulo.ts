import { NgModule} from "@angular/core";
import { HeroeComponent } from "./Heroe/Heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
    ],
    imports: [
        HeroeComponent, ListadoComponent, CommonModule
    ],
    exports:[
        ListadoComponent
    ]
})
export class HeroesModule{

}