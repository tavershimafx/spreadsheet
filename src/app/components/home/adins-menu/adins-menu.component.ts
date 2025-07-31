import { Component } from '@angular/core';
import { IOption } from '@models/menu';

@Component({
  selector: 'adins-menu',
  standalone: false,
  templateUrl: './adins-menu.component.html',
  styleUrls: ['../../menu-items.css', './adins-menu.component.css']
})
export class AdinsMenuComponent {


  numberStyles: IOption[] = [ 
    { key: "", value: "Arial" },
    { key: "", value: "Arial Narrow" },
    { key: "", value: "Algerian" },
    { key: "", value: "Roboto" },
    { key: "", value: "Arial Thin Arial Thin Arial Thin Arial Thin Thin Arial Thin" },
    { key: "", value: "Consolas" },
    { key: "", value: "Gothic" },
    { key: "", value: "Monotype" },
    { key: "", value: "Copper" },
    { key: "", value: "Courier" }
  ]
}
