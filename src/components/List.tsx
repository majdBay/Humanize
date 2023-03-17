import React from 'react';

export interface ListItem<T> {
    id: number;
    name: T;
}

interface Props<T> {
    items: ListItem<T>[];
}

export const List = <T extends string | number>({ items }: Props<T>) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

