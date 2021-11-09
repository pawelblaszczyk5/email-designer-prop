import * as solid from 'solid-js';

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      'v:rect': {};
    }

    interface TdHTMLAttributes<T> extends JSX.HTMLAttributes<T> {
      align?: string;
      bgcolor?: string;
      valign?: string;
    }

    interface HTMLAttributes<T> {
      border?: HTMLTableElement extends T ? string : undefined;
      cellPadding?: HTMLTableElement extends T ? string : undefined;
      cellSpacing?: HTMLTableElement extends T ? string : undefined;
    }
  }
}
