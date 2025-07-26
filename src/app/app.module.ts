import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SurfaceComponent } from "@pages/surface/surface.component";
import { AppRoutingModule } from "./app.routing.module";
import { ComponentsModule } from "./components/components.module";
import { DirectivesModule } from "@directives/directives.module";

const components = [
    SurfaceComponent
]
@NgModule({
    declarations: [...components],
    imports: [CommonModule, 
        AppRoutingModule,
        ComponentsModule,
        DirectivesModule
    ],
    providers: []
})
export class AppModule{

}