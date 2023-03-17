import React from 'react';

interface ListItem {
    id: number;
    name: string;
}

interface Props {
    items: ListItem[];
}

const List: React.FC<Props> = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

export default List;
