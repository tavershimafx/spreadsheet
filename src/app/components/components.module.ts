import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenubarComponent } from "./menubar/menubar.component";
import { ClipboardMenuComponent } from "./clipboard-menu/clipboard-menu.component";
import { WorkbookComponent } from "./workbook/workbook.component";
import { DirectivesModule } from "@directives/directives.module";
import { SelectComponent } from "./select/select.component";
import { FormsModule } from "@angular/forms";
import { FontMenuComponent } from "./font-menu/font-menu.component";
import { NumberMenuComponent } from "./number-menu/number-menu.component";
import { StylesMenuComponent } from "./styles-menu/styles-menu.component";
import { AlignmentMenuComponent } from "./alignment-menu/alignment-menu.component";
import { CellsMenuComponent } from "./cells-menu/cells-menu.component";
import { EditingMenuComponent } from "./editing-menu/editing-menu.component";
import { AdinsMenuComponent } from "./adins-menu/adins-menu.component";

const components = [
    MenubarComponent,
    ClipboardMenuComponent,
    WorkbookComponent,
    SelectComponent,
    FontMenuComponent,
    AlignmentMenuComponent,
    NumberMenuComponent,
    StylesMenuComponent,
    CellsMenuComponent,
    EditingMenuComponent,
    AdinsMenuComponent
]
@NgModule({
    declarations: [...components],
    imports: [CommonModule, DirectivesModule,
        FormsModule
    ],
    exports: [...components],
    providers: []
})
export class ComponentsModule{

}