import { Component, ElementRef, ViewChild } from '@angular/core';
import { CellExpand, Workbook } from '@models/table';

  const minCellWidth = 60; //px
  const borderSize = 2;
  const minCellHeight = 22

@Component({
  selector: 'workbook',
  standalone: false,
  templateUrl: './workbook.component.html',
  styleUrls: ['./workbook.component.css']
})
export class WorkbookComponent {
  @ViewChild("lighter", { static: true }) lighter!: ElementRef
  workbook: Workbook = new Workbook()
  mouseDown = false
  cellExpansion?: CellExpand

  constructor() {
    this.onblur = this.onblur.bind(this)
  }

  cellClicked(e: any, row: number, col: string) {
    let el = e.target.getBoundingClientRect()
    //e.target.focus()

    let prev = e.target.childNodes[0].getAttribute("vl")

    let input = document.createElement("input")
    input.style.height = "100%"
    input.style.width = "100%"
    input.style.outline = "none"
    input.style.border = "0"
    input.style.padding = "3px"
    input.style.fontSize = "13px"
    input.classList.add("cell-edit")

    input.setAttribute("row", `${row}`)
    input.setAttribute("cid", col)
    input.value = this.workbook.getActiveSheet()!.getCellValue(row, col)

    e.target.innerHTML = input.outerHTML
    e.target.children[0].focus()
    if(prev != null){
      e.target.children[0].value = prev
    }
    e.target.children[0].addEventListener("blur", this.onblur)

    this.resetHighligter()
    this.setHighligterTop(el.left, el.top)

    console.log(el)
    const scrollLeft = e.target.scrollLeft;
    const scrollTop = e.target.scrollTop;
    console.log("Left top", scrollLeft, scrollTop)

    this.workbook.getActiveSheet()?.activateCell(row, col, el.left, el.top)
    let point = this.workbook.getActiveSheet()?.getHighlightPoint()

    this.setHighligterAll(point!.x, point!.y, el.right, el.bottom, true)
  }

  onblur(event: any) {
    let r = event.target.getAttribute("row")
    let cid = event.target.getAttribute("cid")
    let value = event.target.value

    this.workbook.getActiveSheet()?.setCellValue(r, cid, value)
    let div = document.createElement("div")
    div.classList.add("cell-data")
    div.setAttribute("vl", value)
    div.innerHTML = value
    div.style.width = "inherit"
    div.style.height = "100%"
    div.style.padding = "3px"
    div.style.pointerEvents = "none"

    event.target.parentElement.innerHTML = div.outerHTML
  }

  highlightRow(rowId: number) {
    this.resetHighligter()
    this.workbook.getActiveSheet()?.highlightRow(rowId)
  }

  highlightCol(col: string) {
    this.resetHighligter()
    this.workbook.getActiveSheet()?.highlightCol(col)
  }

  mouseOverCol(e: any){
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left; // Distance from left edge of element
    let isOnRightBorder = x >= rect.width - borderSize && x <= rect.width;
    if (isOnRightBorder){
      e.target.style.cursor = "col-resize"
    }else{
      e.target.style.cursor = "default"
    }
  }

  mouseOverRow(e: any){
    let rect = e.target.getBoundingClientRect();
    let x = e.clientY - rect.top; // Distance from top edge of element
    let isBottomBorder = x >= rect.height - borderSize && x <= rect.height;
    if (isBottomBorder){
      e.target.style.cursor = "row-resize"
    }else{
      e.target.style.cursor = "default"
    }
  }

  startColExp(e: any){
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left; // Distance from left edge of element
    let isOnRightBorder = x >= rect.width - borderSize && x <= rect.width;


    if (isOnRightBorder) {
      this.mouseDown = true
      this.cellExpansion = new CellExpand()
      this.cellExpansion.mouseDownElement = e.target
      this.cellExpansion.mouseDownStartWidth = e.target.getBoundingClientRect().width
      this.cellExpansion.mouseDownStartX = e.x
    } 
   
  }

  startRowExp(e: any){
  let rect = e.target.getBoundingClientRect();
  let y = e.clientY - rect.top; // Distance from top edge of the element

  let isBottomBorder = y >= rect.height - borderSize && y <= rect.height;
  if (isBottomBorder) {
      console.log("Border clicked!");
      this.mouseDown = true
      this.cellExpansion = new CellExpand()
      this.cellExpansion.mouseDownElement = e.target
      this.cellExpansion.mouseDownStartHeight = e.target.getBoundingClientRect().height
      this.cellExpansion.mouseDownStartY = e.y
    } 
  }

  expCol(e: any){
    if (this.mouseDown == true){
      if (e.x > this.cellExpansion!.mouseDownStartX! ){
        let d = e.x - this.cellExpansion!.mouseDownStartX!
        let w = this.cellExpansion!.mouseDownStartWidth! + d
        if(this.cellExpansion!.mouseDownElement.children[0] != undefined){
          this.cellExpansion!.mouseDownElement.children[0].style.width = `${w}px`
        }
        
      }else{
        let d = this.cellExpansion!.mouseDownStartX! - e.x
        let w = this.cellExpansion!.mouseDownStartWidth! - d
        if (w > minCellWidth){
          if(this.cellExpansion!.mouseDownElement.children[0] != undefined){
            this.cellExpansion!.mouseDownElement.children[0].style.width = `${w}px`
          }
        }
      }
    }
  }

  expRow(e: any){
    if (this.mouseDown == true){
      if (e.y > this.cellExpansion!.mouseDownStartY! ){
        let d = e.y - this.cellExpansion!.mouseDownStartY!
        let h = this.cellExpansion!.mouseDownStartHeight! + d

        if(this.cellExpansion!.mouseDownElement.children[0] != undefined){
          this.cellExpansion!.mouseDownElement.children[0].style.height = `${h}px`
        }
      }else{
        let d = this.cellExpansion!.mouseDownStartY! - e.y
        let h = this.cellExpansion!.mouseDownStartHeight! - d
        if (h >= minCellHeight){
          if(this.cellExpansion!.mouseDownElement.children[0] != undefined){
          this.cellExpansion!.mouseDownElement.children[0].style.height = `${h}px`
        }
        }
      }
    }
  }

  stopExpRow(e: any){
      this.mouseDown = false
  }

  stopExpCol(e: any){
      this.mouseDown = false
  }

  startMouseDown(e: any, row: number, col: string) {
    let el = e.target.getBoundingClientRect()

    this.resetHighligter()
    this.setHighligterTop(el.top, el.left)

    //this.workbook.getActiveSheet()?.unhighlightCells()
    this.workbook.getActiveSheet()?.mouseDown(row, col, el.left, el.top)
  }

  mouseUp(e: any, row: number, col: string) {
    this.workbook.getActiveSheet()?.setHighlightedLimit(row, col)

  }

  mouseOverCell(e: any) {
    let el = e.target.getBoundingClientRect()
    let sheet = this.workbook.getActiveSheet()
    if (sheet?.hasMouseDown == true) {
      sheet?.unhighlightAll()
      let point = sheet?.getHighlightPoint()

      let y = (el.bottom - point!.y) < 0 ? el.top : el.bottom;
      let x = (el.right - point!.x) < 0 ? el.left : el.right;
      this.setHighligterAll(point!.x, point!.y, x, y, false)
    }
  }

  private setHighligterAll(xTop: number, yTop: number, xBottom: number, yBottom: number, isClick: boolean) {
    let left = Math.min(xTop, xBottom);
    let top = Math.min(yTop, yBottom);
    let width = Math.abs(xBottom - xTop + 2);
    let height = Math.abs(yBottom - yTop + 2);

    this.setHighligterTop(top, left)
    console.log("x, y, w, h", left, top, width, height)

    if (isClick){
      this.lighter.nativeElement.style.backgroundColor = `transparent`
    }else{
      this.lighter.nativeElement.style.backgroundColor = `#0000001a`
    }
    this.lighter.nativeElement.style.width = `${width}px`
    this.lighter.nativeElement.style.height = `${height}px`
  }

  private setHighligterTop(xTop: number, yTop: number) {
    this.lighter.nativeElement.style.top = `${xTop - 1}px`
    this.lighter.nativeElement.style.left = `${yTop - 1}px`
  }

  private resetHighligter() {
    this.lighter.nativeElement.style.top = 0
    this.lighter.nativeElement.style.left = 0
    this.lighter.nativeElement.style.width = 0
    this.lighter.nativeElement.style.height = 0
  }
}
