export interface Entry {
    id: number,
    title: string,
    date: number,
    price: number,
    createdOn: number,
    description: string,
    category: string,
    createdBy: number,
};

export interface MonthInfo {
    year: number;
    month: number;
    count: number;
    average: number;
    sum: number;
    categories: { [category: string]: { sum: number }; };
};
