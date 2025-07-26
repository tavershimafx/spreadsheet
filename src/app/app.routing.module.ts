import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { SurfaceComponent } from "@pages/surface/surface.component";

const routes:Route[] = [
    { path: "", component: SurfaceComponent }
]
@NgModule({

    imports: [RouterModule.forChild(routes)],
    providers: []
})
export class AppRoutingModule{

}