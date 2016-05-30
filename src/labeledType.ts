// import {TypeDescriptor, TypeMatcher} from './typeDescriptor';
module tsDiscriminatedUnion {
  // labeled type
  export interface TypeLabel<TIdentifier>{
    type: TIdentifier
  }
  export type LabeledType<TIdentifier, TParams> = TParams & TypeLabel<TIdentifier>;

  export interface LabeledTypeDescriptor<TParams, TIdentifier> extends TypeMatcher<LabeledType<TIdentifier, TParams>>{
    identifier: string
    type: LabeledType<TIdentifier, TParams> // safe type of other type attributes to be able to use it later

    create(data: TParams): LabeledType<TIdentifier, TParams>
    match(type: any): type is LabeledType<TIdentifier, TParams>
  }

  export function createTypeDescriptor<TParams, TIDentifier extends string>(identifier: TIDentifier){
    return <LabeledTypeDescriptor<TParams, TIDentifier>>{
      create(data: TParams): LabeledType<TIDentifier, TParams>
      {
        var obj = data as LabeledType<TIDentifier, TParams>
        obj.type = identifier;
        return obj;
      },
      match(value: any): value is LabeledType<TIDentifier, TParams>{
        return value.type === identifier;
      }
    }
  }
}
