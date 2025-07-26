export interface Menu{
    id: string;
    name: string;
    children?: MenuItem[]
}

export interface MenuItem{
    id: string;
    name: string;
    //children: string
}