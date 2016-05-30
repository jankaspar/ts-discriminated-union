module tsDiscriminatedUnion {
  export type ClassType<T> = new (...a) => T;
  export interface TypeMatcher<T>{
    match(type: any): type is T
  }
  export type TypeDescriptor<T> = TypeMatcher<T> | ClassType<T>

  export function matchType<T>(type: TypeDescriptor<T>, value: any): value is T {
    if(typeof type === "function") { // class constructor
      return value instanceof <any>type;
    }
    return (type as TypeMatcher<T>).match(value);
  }
}
