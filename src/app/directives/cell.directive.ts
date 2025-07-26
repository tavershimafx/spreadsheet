import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: "[rowCell]"
})
export class CellDirective {

    constructor(private el: ElementRef){
        
    }

    @Input("rowCell") cell: string = ""
    
    @HostListener("click") onClick(){
        //this.el.nativeElement.parentElement.styles.border = "1px solid var(--dark-green)"
        //this.el.nativeElement.classList.add("active")
    }
}