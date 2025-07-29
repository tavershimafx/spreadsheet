import { Component } from '@angular/core';
import { IOption, Menu } from '@models/menu';

@Component({
  selector: 'number-menu',
  standalone: false,
  templateUrl: './number-menu.component.html',
  styleUrls: ['../menu-items.css', './number-menu.component.css']
})
export class NumberMenuComponent {


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
