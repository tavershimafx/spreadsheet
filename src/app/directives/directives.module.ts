import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CellDirective } from "./cell.directive";
import { DropMenuDirective } from "./dropmenu.directive";

const components = [
    CellDirective,
    DropMenuDirective
]
@NgModule({
    declarations: [...components],
    imports: [CommonModule],
    exports: [...components],
    providers: []
})
export class DirectivesModule{

}