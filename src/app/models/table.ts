export class Workbook{

    worksheets?: Worksheet[]
    constructor (){
        this.createWorksheet()
    }

    createWorksheet(): Workbook{
        this.worksheets = [];
        this.worksheets.push(new Worksheet().setId(1))
        return this
    }

    addColumn(): Workbook{
        return this
    }

    addRow(): Workbook{
        return this
    }
}

class mouseDownProp{
    fromRow?: number
    toRow?: number
    fromCol?: string
    toCol?: string
}
export class Worksheet{

    id: number = 0
    rows?: Row[]
    defaultRowCount = 200;
    defaultColumnCount = 50;
    activeRow: number = 0
    highlightedRow: number = 0
    highlightedCol?: string
    hasMouseDown: boolean = false
    mouseDownProps?: mouseDownProp

    constructor (){
        this.rows = []
        for (let i = 0; i < this.defaultRowCount; i++) {
            this.rows.push(new Row(i + 1).addCells(this.defaultColumnCount));
        }
    }

    setId(i: number): Worksheet{
        this.id = i
        return this
    }

    activateRow(id: number, cellId: string){
        if(this.activeRow != 0){
            this.rows![this.activeRow - 1].deActivate()
        }

        this.unhighlightRow()
        this.unhighlightCol()
        this.activeRow = id
        this.rows![id - 1].activate(cellId)
    }

    highlightRow(id: number){
        if(this.activeRow != 0){
            this.rows![this.activeRow - 1].deActivate()
            this.activeRow = 0
        }

        if (this.highlightedRow != 0){
            this.rows?.find(n => n.isHighlighted)?.highlight()
        }

        this.unhighlightCol()
        this.highlightedRow = id
        this.rows![id - 1].highlight()
    }

    highlightCol(col: string){
        if(this.activeRow != 0){
            this.rows![this.activeRow - 1].deActivate()
            this.activeRow = 0
        }

        if(this.highlightedRow != 0){
            this.unhighlightRow()
        }

        this.highlightedCol = col
    }

    mouseDown(row: number, col: string){
        this.hasMouseDown = true
        this.mouseDownProps = new mouseDownProp()
        this.mouseDownProps.fromRow = row
        this.mouseDownProps.fromCol = col
    }

    private unhighlightRow(){
        let i = this.rows?.findIndex(n => n.isHighlighted)
        if(i != -1){
            this.rows![i!].highlight()
        }

        this.hasMouseDown = false
        this.mouseDownProps = undefined
    }

    private unhighlightCol(){
        this.highlightedCol = undefined
        this.hasMouseDown = false
        this.mouseDownProps = undefined
    }
}

export class Row{
    id: number
    cells: Cell[] = []
    isActive: boolean = false
    isHighlighted: boolean = false

    private alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]
    private activeCell?: string
    
    constructor(id: number){
        this.id = id
    }

    activate(cellId: string){
        this.isActive = true
        this.cells.find(n => n.id == cellId)!.active = true
        this.activeCell = cellId;
    }

    deActivate(){
        this.isActive = false
        if(this.cells.find(n => n.id == this.activeCell) != undefined){
            this.cells.find(n => n.id == this.activeCell)!.active = false
        }
    }

    addCells(count: number):Row{
        for (let i = 0; i < count; i++) {
            this.cells.push(new Cell(this.findCellId(i), this.id));
        }

        return this
    }

    /**
     * Toggles between hightlighted and unhighlighted
     */
    highlight(){
        this.isHighlighted = !this.isHighlighted
    }

    private findCellId(col: number): string{
        if (col < 26){
            return `${this.alpha[col]}`
        }

        let m = Math.floor(col / 26) - 1;
        let n = (col % 26);
        
        return `${this.alpha[m]}${this.alpha[n]}`
    }
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

    constructor(col: string, row: number){
        this.col = col
        this.row = row
    }

}