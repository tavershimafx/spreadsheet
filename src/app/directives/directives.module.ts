import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CellDirective } from "./cell.directive";

const components = [
    CellDirective
]
@NgModule({
    declarations: [...components],
    imports: [CommonModule],
    exports: [...components],
    providers: []
})
export class DirectivesModule{

}