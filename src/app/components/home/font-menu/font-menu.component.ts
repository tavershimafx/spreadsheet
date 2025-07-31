import { Component } from '@angular/core';
import { IOption } from '@models/menu';

@Component({
  selector: 'font-menu',
  standalone: false,
  templateUrl: './font-menu.component.html',
  styleUrls: ['../../menu-items.css', './font-menu.component.css']
})
export class FontMenuComponent {


  loadedFonts: IOption[] = [ 
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

  fontSizes: IOption[] = [ 
    { key: "", value: "10" },
    { key: "", value: "12" },
    { key: "", value: "14" },
    { key: "", value: "16" },
    { key: "", value: "18" },
    { key: "", value: "20" },
    { key: "", value: "22" },
    { key: "", value: "24" },
    { key: "", value: "26" },
    { key: "", value: "28" },
    { key: "", value: "30" }
  ]
}
