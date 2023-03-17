interface ListItem {
    id: number;
    name: string;
}

export const getItems = (): Promise<ListItem[]> => {
    return Promise.resolve([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ]);
};
