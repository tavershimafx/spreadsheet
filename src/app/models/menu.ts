export interface Menu{
    id: number;
    name: string;
    children?: MenuItem[]
}

export interface MenuItem{
    id: string;
    name: string;
    //children: string
}

export interface IOption{
    key: any
    value: string
}