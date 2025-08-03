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
import { ConvertMenuComponent } from "./draw/convert-menu/convert-menu.component";
import { DrawingMenuComponent } from "./draw/drawing-menu/drawing-menu.component";
import { HelpMenuComponent } from "./draw/help-menu/help-menu.component";
import { InputMenuComponent } from "./draw/input-menu/input-menu.component";
import { ReplayMenuComponent } from "./draw/replay-menu/replay-menu.component";
import { ArrangeMenuComponent } from "./page-layout/arrange-menu/arrange-menu.component";
import { PageMenuComponent } from "./page-layout/page-menu/page-menu.component";
import { ScaleMenuComponent } from "./page-layout/scale-menu/scale-menu.component";
import { SheetMenuComponent } from "./page-layout/sheet-menu/sheet-menu.component";
import { ThemesMenuComponent } from "./page-layout/themes-menu/themes-menu.component";
import { CalculationMenuComponent } from "./formulas/calculation-menu/calculation-menu.component";
import { DefinedMenuComponent } from "./formulas/defined-menu/defined-menu.component";
import { FunctionMenuComponent } from "./formulas/function-menu/function-menu.component";
import { FormulaMenuComponent } from "./formulas/formula-menu/formula-menu.component";

const components = [
    MenubarComponent, ClipboardMenuComponent, WorkbookComponent,
    SelectComponent, FontMenuComponent, AlignmentMenuComponent,
    NumberMenuComponent, StylesMenuComponent, CellsMenuComponent,
    EditingMenuComponent, AdinsMenuComponent, ChartsMenuComponent,
    IllustrationsMenuComponent, TablesMenuComponent, SparklinesMenuComponent,
    FiltersMenuComponent, LinksMenuComponent, TextMenuComponent,
    SymbolsMenuComponent, ConvertMenuComponent, DrawingMenuComponent,
    HelpMenuComponent, InputMenuComponent, ReplayMenuComponent,
    ArrangeMenuComponent, PageMenuComponent, ScaleMenuComponent,
    SheetMenuComponent, ThemesMenuComponent, CalculationMenuComponent,
    DefinedMenuComponent, FunctionMenuComponent, FormulaMenuComponent,
    CalculationMenuComponent
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