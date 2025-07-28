import { Component, ElementRef, ViewChild } from '@angular/core';
import { Workbook } from '@models/table';

@Component({
  selector: 'workbook',
  standalone: false,
  templateUrl: './workbook.component.html',
  styleUrls: ['./workbook.component.css']
})
export class WorkbookComponent {
  @ViewChild("lighter", { static: true}) lighter!: ElementRef
  workbook: Workbook = new Workbook()

  cellClicked(e: any, row: number, col: string){
    let el = e.target.getBoundingClientRect()
    this.resetHighligter()
    this.setHighligterTop(el.left, el.top)

    console.log(el)
    // const scrollLeft = e.target.scrollLeft;
    // const scrollTop = e.target.scrollTop;
    // console.log("Left top", scrollLeft, scrollTop)

    this.workbook.getActiveSheet()?.activateCell(row, col, el.left, el.top)
    let point = this.workbook.getActiveSheet()?.getHighlightPoint()

    this.setHighligterAll(point!.x, point!.y, el.right, el.bottom)
  }

  highlightRow(rowId: number){
    this.resetHighligter()
    this.workbook.getActiveSheet()?.highlightRow(rowId)
  }

  highlightCol(col: string){
    this.resetHighligter()
    this.workbook.getActiveSheet()?.highlightCol(col)
  }

  startMouseDown(e: any,row: number, col: string){
    let el = e.target.getBoundingClientRect()

    this.resetHighligter()
    this.setHighligterTop(el.top, el.left)

    //this.workbook.getActiveSheet()?.unhighlightCells()
    this.workbook.getActiveSheet()?.mouseDown(row, col, el.left, el.top)
  }

  mouseUp(e: any,row: number, col: string){
    this.workbook.getActiveSheet()?.setHighlightedLimit(row, col)
    
  }

  mouseOverCell(e: any){
    let el = e.target.getBoundingClientRect()
    let sheet = this.workbook.getActiveSheet()
    if(sheet?.hasMouseDown == true){
      sheet?.unhighlightAll()
      let point = sheet?.getHighlightPoint()

      let y = (el.bottom - point!.y) < 0 ? el.top : el.bottom;
      let x = (el.right - point!.x) < 0 ? el.left : el.right;
      this.setHighligterAll(point!.x, point!.y, x, y)
    }
  }

  private setHighligterAll(xTop: number, yTop: number, xBottom: number, yBottom: number){
    const left = Math.min(xTop, xBottom);
    const top = Math.min(yTop, yBottom);
    const width = Math.abs(xBottom - xTop + 2);
    const height = Math.abs(yBottom - yTop + 2);

    this.setHighligterTop(top, left)
    console.log("x, y, w, h", left, top, width, height)
    
    this.lighter.nativeElement.style.width = `${width}px`
    this.lighter.nativeElement.style.height = `${height}px` 
  }

  private setHighligterTop(xTop: number, yTop: number){
    this.lighter.nativeElement.style.top = `${xTop - 1}px` 
    this.lighter.nativeElement.style.left = `${yTop - 1}px`
  }
  
  private resetHighligter(){
    this.lighter.nativeElement.style.top = 0 
    this.lighter.nativeElement.style.left = 0
    this.lighter.nativeElement.style.width = 0
    this.lighter.nativeElement.style.height = 0 
  }
}
