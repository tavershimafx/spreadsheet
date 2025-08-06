import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: "[dropmenu]"
})
export class DropMenuDirective implements AfterViewInit {

    dropdown!: any
    constructor(private el: ElementRef){
        this.onblur = this.onblur.bind(this)
    }
    
    ngAfterViewInit(): void {
        if(this.el.nativeElement.parentElement.children[2].classList.contains("dropmenu")){
            this.dropdown = this.el.nativeElement.parentElement.children[2]
        }else{
            this.dropdown = this.el.nativeElement.parentElement.children[3]
        }
    }

    @HostListener("click") onClick(){
        this.dropdown.style.display = "block"
        this.dropdown.style.visibility = "visible"
        this.dropdown.focus()
        setTimeout(() => {
            this.dropdown.addEventListener("blur", this.onblur)
        }, 50);
    }


    onblur(){
        this.dropdown.style.display = "none"
        this.dropdown.style.visibility = "collapse"
    }
}