import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenubarComponent } from "./menubar/menubar.component";
import { ClipboardMenuComponent } from "./clipboard-menu/clipboard-menu.component";
import { WorkbookComponent } from "./workbook/workbook.component";
import { DirectivesModule } from "@directives/directives.module";

const components = [
    MenubarComponent,
    ClipboardMenuComponent,
    WorkbookComponent
]
@NgModule({
    declarations: [...components],
    imports: [CommonModule, DirectivesModule],
    exports: [...components],
    providers: []
})
export class ComponentsModule{

}