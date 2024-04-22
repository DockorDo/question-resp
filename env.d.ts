/// <reference types="vite/client" />

import "pinia"
declare module 'pinia' {
    type KeyOf<T> = keyof T;
    interface DefineStoreOptionsBase<S, Store> {
        // persistence?: KeyOf<S>[]
        persistence?: Array<KeyOf<S>>
    }
}