import { ReactNode } from 'react';

export type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};

export type ValueOf<T> = T[keyof T];
