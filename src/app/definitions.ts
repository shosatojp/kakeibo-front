export interface Entry {
    title: string,
    date: number,
    price: number,
    createdOn: number,
    description: string,
    category: string,
    createdBy: number,
};
export interface Categories {
    [category: string]: Entry[]
}