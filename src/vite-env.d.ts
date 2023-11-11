/// <reference types="vite/client" />

declare interface ObjectConstructor {
  entries<T>(o: { [s: string]: T }): [string, T][];
  values<T>(o: { [s: string]: T }): T[];
}
