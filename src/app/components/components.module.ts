import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenubarComponent } from "./menubar/menubar.component";
import { ClipboardMenuComponent } from "./home/clipboard-menu/clipboard-menu.component";
import { WorkbookComponent } from "./workbook/workbook.component";
import { DirectivesModule } from "@directives/directives.module";
import { SelectComponent } from "./select/select.component";
import { FormsModule } from "@angular/forms";
import { FontMenuComponent } from "./home/font-menu/font-menu.component";
import { NumberMenuComponent } from "./home/number-menu/number-menu.component";
import { StylesMenuComponent } from "./home/styles-menu/styles-menu.component";
import { AlignmentMenuComponent } from "./home/alignment-menu/alignment-menu.component";
import { CellsMenuComponent } from "./home/cells-menu/cells-menu.component";
import { EditingMenuComponent } from "./home/editing-menu/editing-menu.component";
import { AdinsMenuComponent } from "./home/adins-menu/adins-menu.component";
import { ChartsMenuComponent } from "./insert/charts-menu/charts-menu.component";
import { IllustrationsMenuComponent } from "./insert/illustrations-menu/illustrations-menu.component";
import { TablesMenuComponent } from "./insert/tables-menu/tables-menu.component";
import { SparklinesMenuComponent } from "./insert/sparklines-menu/sparklines-menu.component";
import { FiltersMenuComponent } from "./insert/filters-menu/filters-menu.component";
import { LinksMenuComponent } from "./insert/links-menu/links-menu.component";
import { TextMenuComponent } from "./insert/text-menu/text-menu.component";
import { SymbolsMenuComponent } from "./insert/symbols-menu/symbols-menu.component";

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
    AdinsMenuComponent,
    ChartsMenuComponent,
    IllustrationsMenuComponent,
    TablesMenuComponent,
    SparklinesMenuComponent,
    FiltersMenuComponent,
    LinksMenuComponent,
    TextMenuComponent,
    SymbolsMenuComponent
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