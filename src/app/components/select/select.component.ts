import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IOption } from '@models/menu';

@Component({
  selector: 'textselect',
  standalone: false,
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  
  @ViewChild("items", { static: true }) items!: ElementRef
  @Input("class") cssClass: string = ""
  showDropdown = false
  selectedItem?: IOption

  drop(){
    this.showDropdown = true
    setTimeout(() => { this.items.nativeElement.focus() }, 50);
  }

  closeItems(){
    this.showDropdown = false
  }

  setKey(event: any){
    
  }
}
