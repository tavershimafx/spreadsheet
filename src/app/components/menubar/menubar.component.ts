import { Component } from '@angular/core';
import { IOption, Menu } from '@models/menu';

@Component({
  selector: 'menubar',
  standalone: false,
  templateUrl: './menubar.component.html',
  styleUrls: ['../menu-items.css', './menubar.component.css']
})
export class MenubarComponent {
  activeMenu = 0

  menuItems: Menu[] = [ 
    { id: 1, name: "File" },
    { id: 2, name: "Home" },
    { id: 3, name: "Insert" },
    { id: 4, name: "Draw" },
    { id: 5, name: "Page Layout" },
    { id: 6, name: "Formulas" },
    { id: 7, name: "Data" },
    { id: 8, name: "Review" },
    { id: 9, name: "View" },
    { id: 10, name: "Help" }
  ]

  selectMenu(i:number){
    this.activeMenu = i
  }
}
