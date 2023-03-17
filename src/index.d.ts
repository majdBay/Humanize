// index.d.ts
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface IntrinsicElements {
    [elemName: string]: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
}

declare global {
    namespace JSX {
        interface IntrinsicElements extends IntrinsicElements { }
    }
}
