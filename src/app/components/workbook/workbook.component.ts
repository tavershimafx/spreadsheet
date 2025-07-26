import { Component } from '@angular/core';
import { Cell, Workbook } from '@models/table';

@Component({
  selector: 'workbook',
  standalone: false,
  templateUrl: './workbook.component.html',
  styleUrls: ['./workbook.component.css']
})
export class WorkbookComponent {
  workbook: Workbook = new Workbook()

  cellClicked(worksheetId: number, rowId: number, cellId: string){
    this.workbook.worksheets?.find(n => n.id == worksheetId)?.activateRow(rowId, cellId)
  }

  highlightRow(worksheetId: number, rowId: number){
    this.workbook.worksheets?.find(n => n.id == worksheetId)?.highlightRow(rowId)
  }

  highlightCol(worksheetId: number, col: string){
    this.workbook.worksheets?.find(n => n.id == worksheetId)?.highlightCol(col)
  }

  startMouseDown(worksheetId: number, rowId: number, cellId: string){
    this.workbook.worksheets?.find(n => n.id == worksheetId)?.mouseDown(rowId, cellId)
  }

  mouseUp(worksheetId: number, rowId: number, cellId: string){
    //this.workbook.worksheets?.find(n => n.id == worksheetId)?.activateRow(rowId, cellId)
  }

  mouseOverCell(worksheetId: number, rowId: number, cellId: string){
    if(this.workbook.worksheets?.find(n => n.id == worksheetId)?.hasMouseDown){
      
    }
  }
}
