import { Point } from "@services/utilities";

export class Workbook{

    worksheets?: Worksheet[]
    constructor (){
        this.createWorksheet(1)
        this.worksheets![0].isActive = true
    }

    createWorksheet(id: number): Workbook{
        this.worksheets = [];
        this.worksheets.push(new Worksheet(id))
        return this
    }

    addColumn(): Workbook{
        return this
    }

    addRow(): Workbook{
        return this
    }

    getActiveSheet(): Worksheet| undefined{
        return this.worksheets?.find(n => n.isActive == true)
    }
}

class mouseDownProp{
    fromX?: number
    fromY?: number

    fromRow?: number
    fromCol?: string
    toRow?: number
    toCol?: string
}

export class Worksheet{

    id: number = 0
    isActive: boolean = false
    rows?: Row[]
    defaultRowCount = 200;
    defaultColumnCount = 50;
    activeRow: number = 0
    highlightedRow: number = 0
    highlightedCol?: string
    hasMouseDown: boolean = false
    mouseDownProps?: mouseDownProp

    constructor (i: number){
        this.id = i
        this.rows = []
        for (let i = 0; i < this.defaultRowCount; i++) {
            this.rows.push(new Row(i + 1).addCells(this.defaultColumnCount));
        }
    }

    activateCell(id: number, cell: string, x: number, y: number){
        if(this.activeRow != 0){
            this.rows![this.activeRow - 1].deActivate()
        }

        this.unhighlightAll()
        this.activeRow = id
        this.rows![id - 1].activate(cell)
        
        if(!this.mouseDownProps){
            this.mouseDownProps = new mouseDownProp()
        }
        
        this.mouseDownProps.fromX = x
        this.mouseDownProps.fromY = y
    }

    highlightRow(id: number){
        if(this.activeRow != 0){
            this.rows![this.activeRow - 1].deActivate()
            this.activeRow = 0
        }

        if (this.highlightedRow != 0){
            this.rows?.find(n => n.isHighlighted)?.highlight()
        }

        this.unhighlightAll()
        this.highlightedRow = id
        this.rows![id - 1].highlight()
    }

    highlightCol(col: string){
        if(this.activeRow != 0){
            this.rows![this.activeRow - 1].deActivate()
            this.activeRow = 0
        }

        if(this.highlightedRow != 0){
        this.unhighlightAll()
        }

        this.highlightedCol = col
    }

    setHighlightedLimit(row: number, col: string){
        this.hasMouseDown = false
        if(this.mouseDownProps){
            this.mouseDownProps!.toCol = col
            this.mouseDownProps!.toRow = row
        }
    }

    getHighlightPoint(): Point{
        return { 
            x: this.mouseDownProps?.fromX!,
            y:  this.mouseDownProps?.fromY! 
        }
    }

    // highlightCells(row: number, col: string){
    //     if(this.hasMouseDown){
    //         this.hasMouseDown = false
    //         let fr = this.mouseDownProps?.fromRow! - 1; // zero based index
    //         let fc = this.mouseDownProps?.fromCol;
    //         for (let i = fr; i < row; i++) {
    //             for (let j = this.colToInt(fc!); j <= this.colToInt(col); j++) {
    //                 this.rows![i].cells.find(k => k.id == `${this.getCol(j)}${i + 1}`)!.active = true
    //             }
    //         }
    //     }
    // }

    mouseDown(row: number, col: string, x: number, y: number){
        this.hasMouseDown = true
        this.mouseDownProps = new mouseDownProp()
        this.mouseDownProps.fromRow = row
        this.mouseDownProps.fromCol = col
        this.mouseDownProps.fromX = x
        this.mouseDownProps.fromY = y
    }

    unhighlightAll(){
        //this.unhighlightCells()
        this.unhighlightRow()
        this.unhighlightCol()
    }

    private unhighlightRow(){
        let i = this.rows?.findIndex(n => n.isHighlighted)
        if(i != -1){
            this.rows![i!].highlight()
        }
    }

    private unhighlightCol(){
        this.highlightedCol = undefined
    }

    // public unhighlightCells(){
    //     if(this.mouseDownProps){
    //         let fr = this.mouseDownProps?.fromRow! - 1; // zero based index
    //         let fc = this.mouseDownProps?.fromCol;

    //         let breakout = false
    //         for (let i = fr; i < this.rows?.length!; i++) {
    //             if(breakout){
    //                 break
    //             }

    //             for (let j = this.colToInt(fc!); j <= this.rows![i].cells.length!; j++) {
    //                 // if the first cell from the highlighted row group is not active, 
    //                 // definitely there's nothing to unhighlight
    //                 if(this.rows![i].cells[this.colToInt(fc!)]!.active == false){
    //                     breakout = true
    //                 }

    //                 // if we're looping through the cols and we find any that is not active
    //                 // definitely we have reached the last highlighted cell
    //                 if(this.rows![i].cells.find(k => k.id == `${this.getCol(j)}${i + 1}`)!.active == false){
    //                     break
    //                 }

    //                 this.rows![i].cells.find(k => k.id == `${this.getCol(j)}${i + 1}`)!.active = false
    //             }
    //         }
    //     }

    //     this.mouseDownProps = undefined
    // }

}

export class Row{
    id: number
    cells: Cell[] = []
    isActive: boolean = false
    isHighlighted: boolean = false

    private alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]
    
    constructor(id: number){
        this.id = id
    }

    activate(cell: string){
        this.isActive = true
        this.cells.find(n => n.id == cell)!.active = true
    }

    deActivate(){
        this.isActive = false
        if(this.cells.find(n => this.isActive) != undefined){
            this.cells.find(n => this.isActive)!.active = false
        }
    }

    addCells(count: number):Row{
        for (let i = 0; i < count; i++) {
            this.cells.push(new Cell(this.id, colFromIndex(i)));
        }

        return this
    }

    /**
     * Toggles between hightlighted and unhighlighted
     */
    highlight(){
        this.isHighlighted = !this.isHighlighted
    }

    // private findCellId(col: number): string{
    //     if (col < 26){
    //         return `${this.alpha[col]}`
    //     }

    //     let m = Math.floor(col / 26) - 1;
    //     let n = (col % 26);
        
    //     return `${this.alpha[m]}${this.alpha[n]}`
    // }
}

export class Cell{
    
    col: string
    row: number
    value?: string
    active: boolean = false
    highlighted: boolean = false
    get id(){
        return `${this.col}${this.row}`
    }

    constructor(row: number, col: string){
        this.col = col
        this.row = row
    }

}


  /**
   * Converts the zero based index of a column position to its corresponding column label
   * @param index The zero based index of the column
   * @returns A column label corresponding to the cell column position in the table
   */
  export function colFromIndex(index: number): string{
    index += 1
    let col = ""
    while (index > 0) {
      let remain = (index - 1) % 26
      col = String.fromCharCode(65 + remain) + col
      index = Math.floor((index - 1) / 26)
    }

    return col
  }

  /**
   * Computes to find the actual column index a row belongs to
   * @param col The alpha column identity
   * @returns a number representing the column index
   */
  export function  colToIndex(col: string): number{
    let c = 0;
    for (let i = 0; i < col.length; i++) {
      c = c * 26 + (col.charCodeAt(i) - 64); //65-90 A-Z
    }

    return c - 1; // zero based
  }