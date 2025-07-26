import { Component } from '@angular/core';
import { Menu } from '@models/menu';

@Component({
  selector: 'menubar',
  standalone: false,
  templateUrl: './menubar.component.html',
  styleUrls: ['../menu-items.css', './menubar.component.css']
})
export class MenubarComponent {
  menuItems: Menu[] = [ 
    { id: "", name: "File" },
    { id: "", name: "Home" },
    { id: "", name: "Insert" },
    { id: "", name: "Draw" },
    { id: "", name: "Page Layout" },
    { id: "", name: "Formulas" },
    { id: "", name: "Data" },
    { id: "", name: "Review" },
    { id: "", name: "View" },
    { id: "", name: "Help" }
  ]
}
