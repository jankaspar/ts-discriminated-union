declare module "ts-discriminated-union" {
    export = tsDiscriminatedUnion;
}
declare module tsDiscriminatedUnion {
    interface TypeLabel<TIdentifier> {
        type: TIdentifier;
    }
    type LabeledType<TIdentifier, TParams> = TParams & TypeLabel<TIdentifier>;
    interface LabeledTypeDescriptor<TParams, TIdentifier> extends TypeMatcher<LabeledType<TIdentifier, TParams>> {
        identifier: string;
        type: LabeledType<TIdentifier, TParams>;
        create(data: TParams): LabeledType<TIdentifier, TParams>;
        match(type: any): type is LabeledType<TIdentifier, TParams>;
    }
    function createTypeDescriptor<TParams, TIDentifier extends string>(identifier: TIDentifier): LabeledTypeDescriptor<TParams, TIDentifier>;
}
declare module tsDiscriminatedUnion {
    type ClassType<T> = new (...a) => T;
    interface TypeMatcher<T> {
        match(type: any): type is T;
    }
    type TypeDescriptor<T> = TypeMatcher<T> | ClassType<T>;
    function matchType<T>(type: TypeDescriptor<T>, value: any): value is T;
}
declare module tsDiscriminatedUnion {
    interface Union<TValue, TMatchable> {
        match(value: TValue): TMatchable;
        type: TValue;
    }
    interface Union1<T1> extends Union<T1, FirstMatchable1<T1>> {
    }
    interface Union2<T1, T2> extends Union<T1 | T2, FirstMatchable2<T1, T2>> {
    }
    interface Union3<T1, T2, T3> extends Union<T1 | T2 | T3, FirstMatchable3<T1, T2, T3>> {
    }
    interface Union4<T1, T2, T3, T4> extends Union<T1 | T2 | T3 | T4, FirstMatchable4<T1, T2, T3, T4>> {
    }
    interface Union5<T1, T2, T3, T4, T5> extends Union<T1 | T2 | T3 | T4 | T5, FirstMatchable5<T1, T2, T3, T4, T5>> {
    }
    interface Union6<T1, T2, T3, T4, T5, T6> extends Union<T1 | T2 | T3 | T4 | T5 | T6, FirstMatchable6<T1, T2, T3, T4, T5, T6>> {
    }
    interface Union7<T1, T2, T3, T4, T5, T6, T7> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7, FirstMatchable7<T1, T2, T3, T4, T5, T6, T7>> {
    }
    interface Union8<T1, T2, T3, T4, T5, T6, T7, T8> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8, FirstMatchable8<T1, T2, T3, T4, T5, T6, T7, T8>> {
    }
    interface Union9<T1, T2, T3, T4, T5, T6, T7, T8, T9> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9, FirstMatchable9<T1, T2, T3, T4, T5, T6, T7, T8, T9>> {
    }
    interface Union10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10, FirstMatchable10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>> {
    }
    interface Union11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11, FirstMatchable11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>> {
    }
    interface Union12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12, FirstMatchable12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>> {
    }
    interface Union13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13, FirstMatchable13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>> {
    }
    interface Union14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14, FirstMatchable14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>> {
    }
    interface Union15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15, FirstMatchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>> {
    }
    interface Union16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16, FirstMatchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>> {
    }
    interface Union17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17, FirstMatchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>> {
    }
    interface Union18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18, FirstMatchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>> {
    }
    interface Union19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18 | T19, FirstMatchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>> {
    }
    interface Union20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18 | T19 | T20, FirstMatchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>> {
    }
    interface Union21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18 | T19 | T20 | T21, FirstMatchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21>> {
    }
    interface Union22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18 | T19 | T20 | T21 | T22, FirstMatchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22>> {
    }
    interface Union23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18 | T19 | T20 | T21 | T22 | T23, FirstMatchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23>> {
    }
    interface Union24<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24> extends Union<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18 | T19 | T20 | T21 | T22 | T23 | T24, FirstMatchable24<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24>> {
    }
    interface FirstMatchable1<T> {
        case<TReturn>(type: TypeDescriptor<T>, action: (v: T) => TReturn): {
            result(): TReturn;
        };
    }
    interface FirstMatchable2<T1, T2> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable1<T2, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable1<T1, TReturn>;
    }
    interface FirstMatchable3<T1, T2, T3> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable2<T2, T3, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable2<T1, T3, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable2<T1, T2, TReturn>;
    }
    interface FirstMatchable4<T1, T2, T3, T4> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable3<T2, T3, T4, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable3<T1, T3, T4, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable3<T1, T2, T4, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable3<T1, T2, T3, TReturn>;
    }
    interface FirstMatchable5<T1, T2, T3, T4, T5> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable4<T2, T3, T4, T5, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable4<T1, T3, T4, T5, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable4<T1, T2, T4, T5, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable4<T1, T2, T3, T5, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable4<T1, T2, T3, T4, TReturn>;
    }
    interface FirstMatchable6<T1, T2, T3, T4, T5, T6> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable5<T2, T3, T4, T5, T6, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable5<T1, T3, T4, T5, T6, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable5<T1, T2, T4, T5, T6, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable5<T1, T2, T3, T5, T6, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable5<T1, T2, T3, T4, T6, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable5<T1, T2, T3, T4, T5, TReturn>;
    }
    interface FirstMatchable7<T1, T2, T3, T4, T5, T6, T7> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable6<T2, T3, T4, T5, T6, T7, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable6<T1, T3, T4, T5, T6, T7, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable6<T1, T2, T4, T5, T6, T7, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable6<T1, T2, T3, T5, T6, T7, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable6<T1, T2, T3, T4, T6, T7, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable6<T1, T2, T3, T4, T5, T7, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable6<T1, T2, T3, T4, T5, T6, TReturn>;
    }
    interface FirstMatchable8<T1, T2, T3, T4, T5, T6, T7, T8> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable7<T2, T3, T4, T5, T6, T7, T8, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable7<T1, T3, T4, T5, T6, T7, T8, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable7<T1, T2, T4, T5, T6, T7, T8, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable7<T1, T2, T3, T5, T6, T7, T8, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable7<T1, T2, T3, T4, T6, T7, T8, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable7<T1, T2, T3, T4, T5, T7, T8, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable7<T1, T2, T3, T4, T5, T6, T8, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable7<T1, T2, T3, T4, T5, T6, T7, TReturn>;
    }
    interface FirstMatchable9<T1, T2, T3, T4, T5, T6, T7, T8, T9> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable8<T2, T3, T4, T5, T6, T7, T8, T9, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable8<T1, T3, T4, T5, T6, T7, T8, T9, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable8<T1, T2, T4, T5, T6, T7, T8, T9, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable8<T1, T2, T3, T5, T6, T7, T8, T9, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable8<T1, T2, T3, T4, T6, T7, T8, T9, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable8<T1, T2, T3, T4, T5, T7, T8, T9, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable8<T1, T2, T3, T4, T5, T6, T8, T9, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable8<T1, T2, T3, T4, T5, T6, T7, T9, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable8<T1, T2, T3, T4, T5, T6, T7, T8, TReturn>;
    }
    interface FirstMatchable10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable9<T2, T3, T4, T5, T6, T7, T8, T9, T10, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable9<T1, T3, T4, T5, T6, T7, T8, T9, T10, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable9<T1, T2, T4, T5, T6, T7, T8, T9, T10, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable9<T1, T2, T3, T5, T6, T7, T8, T9, T10, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable9<T1, T2, T3, T4, T6, T7, T8, T9, T10, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable9<T1, T2, T3, T4, T5, T7, T8, T9, T10, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable9<T1, T2, T3, T4, T5, T6, T8, T9, T10, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable9<T1, T2, T3, T4, T5, T6, T7, T9, T10, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable9<T1, T2, T3, T4, T5, T6, T7, T8, T10, TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable9<T1, T2, T3, T4, T5, T6, T7, T8, T9, TReturn>;
    }
    interface FirstMatchable11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable10<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable10<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable10<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable10<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable10<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable10<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable10<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable10<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable10<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, TReturn>;
    }
    interface FirstMatchable12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable11<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable11<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable11<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable11<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable11<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable11<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable11<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable11<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable11<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, TReturn>;
    }
    interface FirstMatchable13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable12<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable12<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable12<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable12<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable12<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable12<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable12<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable12<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable12<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, TReturn>;
    }
    interface FirstMatchable14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable13<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable13<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable13<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable13<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable13<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable13<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, TReturn>;
    }
    interface FirstMatchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable14<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable14<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable14<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable14<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable14<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable14<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, TReturn>;
    }
    interface FirstMatchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable15<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable15<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable15<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable15<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable15<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable15<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TReturn>;
    }
    interface FirstMatchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable16<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable16<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable16<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable16<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable16<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable16<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, TReturn>;
    }
    interface FirstMatchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable17<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable17<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable17<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable17<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable17<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable17<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T18, TReturn>;
        case<TReturn>(type: TypeDescriptor<T18>, action: (v: T18) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TReturn>;
    }
    interface FirstMatchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable18<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable18<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable18<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable18<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable18<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable18<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T18, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T18>, action: (v: T18) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T19, TReturn>;
        case<TReturn>(type: TypeDescriptor<T19>, action: (v: T19) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TReturn>;
    }
    interface FirstMatchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable19<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable19<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable19<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable19<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable19<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable19<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T18, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T18>, action: (v: T18) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T19, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T19>, action: (v: T19) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T20, TReturn>;
        case<TReturn>(type: TypeDescriptor<T20>, action: (v: T20) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TReturn>;
    }
    interface FirstMatchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable20<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable20<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable20<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable20<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable20<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable20<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T18, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T18>, action: (v: T18) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T19, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T19>, action: (v: T19) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T20, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T20>, action: (v: T20) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T21, TReturn>;
        case<TReturn>(type: TypeDescriptor<T21>, action: (v: T21) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TReturn>;
    }
    interface FirstMatchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable21<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable21<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable21<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable21<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable21<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable21<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T18, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T18>, action: (v: T18) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T19, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T19>, action: (v: T19) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T20, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T20>, action: (v: T20) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T21, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T21>, action: (v: T21) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T22, TReturn>;
        case<TReturn>(type: TypeDescriptor<T22>, action: (v: T22) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TReturn>;
    }
    interface FirstMatchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable22<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable22<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable22<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable22<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable22<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable22<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T18, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T18>, action: (v: T18) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T19, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T19>, action: (v: T19) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T20, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T20>, action: (v: T20) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T21, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T21>, action: (v: T21) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T22, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T22>, action: (v: T22) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T23, TReturn>;
        case<TReturn>(type: TypeDescriptor<T23>, action: (v: T23) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TReturn>;
    }
    interface FirstMatchable24<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable23<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable23<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable23<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable23<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable23<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable23<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T18, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T18>, action: (v: T18) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T19, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T19>, action: (v: T19) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T20, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T20>, action: (v: T20) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T21, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T21>, action: (v: T21) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T22, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T22>, action: (v: T22) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T23, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T23>, action: (v: T23) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T24, TReturn>;
        case<TReturn>(type: TypeDescriptor<T24>, action: (v: T24) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TReturn>;
    }
    interface Matchable<T, TResult> {
        default<TReturn>(action: (a: T) => TReturn): {
            result(): TResult | TReturn;
        };
    }
    interface Matchable1<T, TResult> extends Matchable<T, TResult> {
        case<TReturn>(type: TypeDescriptor<T>, action: (v: T) => TReturn): {
            result(): TResult | TReturn;
        };
    }
    interface Matchable2<T1, T2, TResult> extends Matchable<T1 | T2, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable1<T2, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable1<T1, TResult | TReturn>;
    }
    interface Matchable3<T1, T2, T3, TResult> extends Matchable<T1 | T2 | T3, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable2<T2, T3, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable2<T1, T3, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable2<T1, T2, TResult | TReturn>;
    }
    interface Matchable4<T1, T2, T3, T4, TResult> extends Matchable<T1 | T2 | T3 | T4, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable3<T2, T3, T4, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable3<T1, T3, T4, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable3<T1, T2, T4, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable3<T1, T2, T3, TResult | TReturn>;
    }
    interface Matchable5<T1, T2, T3, T4, T5, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable4<T2, T3, T4, T5, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable4<T1, T3, T4, T5, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable4<T1, T2, T4, T5, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable4<T1, T2, T3, T5, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable4<T1, T2, T3, T4, TResult | TReturn>;
    }
    interface Matchable6<T1, T2, T3, T4, T5, T6, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable5<T2, T3, T4, T5, T6, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable5<T1, T3, T4, T5, T6, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable5<T1, T2, T4, T5, T6, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable5<T1, T2, T3, T5, T6, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable5<T1, T2, T3, T4, T6, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable5<T1, T2, T3, T4, T5, TResult | TReturn>;
    }
    interface Matchable7<T1, T2, T3, T4, T5, T6, T7, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable6<T2, T3, T4, T5, T6, T7, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable6<T1, T3, T4, T5, T6, T7, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable6<T1, T2, T4, T5, T6, T7, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable6<T1, T2, T3, T5, T6, T7, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable6<T1, T2, T3, T4, T6, T7, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable6<T1, T2, T3, T4, T5, T7, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable6<T1, T2, T3, T4, T5, T6, TResult | TReturn>;
    }
    interface Matchable8<T1, T2, T3, T4, T5, T6, T7, T8, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable7<T2, T3, T4, T5, T6, T7, T8, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable7<T1, T3, T4, T5, T6, T7, T8, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable7<T1, T2, T4, T5, T6, T7, T8, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable7<T1, T2, T3, T5, T6, T7, T8, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable7<T1, T2, T3, T4, T6, T7, T8, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable7<T1, T2, T3, T4, T5, T7, T8, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable7<T1, T2, T3, T4, T5, T6, T8, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable7<T1, T2, T3, T4, T5, T6, T7, TResult | TReturn>;
    }
    interface Matchable9<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable8<T2, T3, T4, T5, T6, T7, T8, T9, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable8<T1, T3, T4, T5, T6, T7, T8, T9, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable8<T1, T2, T4, T5, T6, T7, T8, T9, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable8<T1, T2, T3, T5, T6, T7, T8, T9, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable8<T1, T2, T3, T4, T6, T7, T8, T9, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable8<T1, T2, T3, T4, T5, T7, T8, T9, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable8<T1, T2, T3, T4, T5, T6, T8, T9, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable8<T1, T2, T3, T4, T5, T6, T7, T9, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable8<T1, T2, T3, T4, T5, T6, T7, T8, TResult | TReturn>;
    }
    interface Matchable10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable9<T2, T3, T4, T5, T6, T7, T8, T9, T10, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable9<T1, T3, T4, T5, T6, T7, T8, T9, T10, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable9<T1, T2, T4, T5, T6, T7, T8, T9, T10, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable9<T1, T2, T3, T5, T6, T7, T8, T9, T10, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable9<T1, T2, T3, T4, T6, T7, T8, T9, T10, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable9<T1, T2, T3, T4, T5, T7, T8, T9, T10, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable9<T1, T2, T3, T4, T5, T6, T8, T9, T10, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable9<T1, T2, T3, T4, T5, T6, T7, T9, T10, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable9<T1, T2, T3, T4, T5, T6, T7, T8, T10, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable9<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult | TReturn>;
    }
    interface Matchable11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable10<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable10<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable10<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable10<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable10<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable10<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable10<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable10<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable10<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, TResult | TReturn>;
    }
    interface Matchable12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable11<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable11<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable11<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable11<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable11<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable11<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable11<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable11<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable11<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, TResult | TReturn>;
    }
    interface Matchable13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable12<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable12<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable12<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable12<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable12<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable12<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable12<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable12<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable12<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, TResult | TReturn>;
    }
    interface Matchable14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable13<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable13<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable13<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable13<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable13<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable13<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, TResult | TReturn>;
    }
    interface Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable14<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable14<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable14<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable14<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable14<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable14<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, TResult | TReturn>;
    }
    interface Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable15<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable15<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable15<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable15<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable15<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable15<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TResult | TReturn>;
    }
    interface Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable16<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable16<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable16<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable16<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable16<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable16<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, TResult | TReturn>;
    }
    interface Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable17<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable17<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable17<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable17<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable17<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable17<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T18, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T18>, action: (v: T18) => TReturn): Matchable17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, TResult | TReturn>;
    }
    interface Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18 | T19, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable18<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable18<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable18<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable18<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable18<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable18<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T18, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T18>, action: (v: T18) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T19, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T19>, action: (v: T19) => TReturn): Matchable18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, TResult | TReturn>;
    }
    interface Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18 | T19 | T20, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable19<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable19<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable19<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable19<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable19<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable19<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T18, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T18>, action: (v: T18) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T19, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T19>, action: (v: T19) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T20, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T20>, action: (v: T20) => TReturn): Matchable19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, TResult | TReturn>;
    }
    interface Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18 | T19 | T20 | T21, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable20<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable20<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable20<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable20<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable20<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable20<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T18, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T18>, action: (v: T18) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T19, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T19>, action: (v: T19) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T20, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T20>, action: (v: T20) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T21, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T21>, action: (v: T21) => TReturn): Matchable20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, TResult | TReturn>;
    }
    interface Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18 | T19 | T20 | T21 | T22, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable21<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable21<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable21<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable21<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable21<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable21<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T18, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T18>, action: (v: T18) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T19, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T19>, action: (v: T19) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T20, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T20>, action: (v: T20) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T21, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T21>, action: (v: T21) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T22, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T22>, action: (v: T22) => TReturn): Matchable21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, TResult | TReturn>;
    }
    interface Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18 | T19 | T20 | T21 | T22 | T23, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable22<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable22<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable22<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable22<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable22<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable22<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T18>, action: (v: T18) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T19, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T19>, action: (v: T19) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T20, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T20>, action: (v: T20) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T21, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T21>, action: (v: T21) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T22, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T22>, action: (v: T22) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T23, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T23>, action: (v: T23) => TReturn): Matchable22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, TResult | TReturn>;
    }
    interface Matchable24<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult> extends Matchable<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18 | T19 | T20 | T21 | T22 | T23 | T24, TResult> {
        case<TReturn>(type: TypeDescriptor<T1>, action: (v: T1) => TReturn): Matchable23<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T2>, action: (v: T2) => TReturn): Matchable23<T1, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T3>, action: (v: T3) => TReturn): Matchable23<T1, T2, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T4>, action: (v: T4) => TReturn): Matchable23<T1, T2, T3, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T5>, action: (v: T5) => TReturn): Matchable23<T1, T2, T3, T4, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T6>, action: (v: T6) => TReturn): Matchable23<T1, T2, T3, T4, T5, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T7>, action: (v: T7) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T8>, action: (v: T8) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T9>, action: (v: T9) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T10>, action: (v: T10) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T11>, action: (v: T11) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T12>, action: (v: T12) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T13>, action: (v: T13) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T14>, action: (v: T14) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T15>, action: (v: T15) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T16, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T16>, action: (v: T16) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T17, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T17>, action: (v: T17) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T18, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T18>, action: (v: T18) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T19, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T19>, action: (v: T19) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T20, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T20>, action: (v: T20) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T21, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T21>, action: (v: T21) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T22, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T22>, action: (v: T22) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T23, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T23>, action: (v: T23) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T24, TResult | TReturn>;
        case<TReturn>(type: TypeDescriptor<T24>, action: (v: T24) => TReturn): Matchable23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, TResult | TReturn>;
    }
    function union<T1>(t1: TypeDescriptor<T1>): Union1<T1>;
    function union<T1, T2>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>): Union2<T1, T2>;
    function union<T1, T2, T3>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>): Union3<T1, T2, T3>;
    function union<T1, T2, T3, T4>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>): Union4<T1, T2, T3, T4>;
    function union<T1, T2, T3, T4, T5>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>): Union5<T1, T2, T3, T4, T5>;
    function union<T1, T2, T3, T4, T5, T6>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>): Union6<T1, T2, T3, T4, T5, T6>;
    function union<T1, T2, T3, T4, T5, T6, T7>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>): Union7<T1, T2, T3, T4, T5, T6, T7>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>): Union8<T1, T2, T3, T4, T5, T6, T7, T8>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>): Union9<T1, T2, T3, T4, T5, T6, T7, T8, T9>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>, t10: TypeDescriptor<T10>): Union10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>, t10: TypeDescriptor<T10>, t11: TypeDescriptor<T11>): Union11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>, t10: TypeDescriptor<T10>, t11: TypeDescriptor<T11>, t12: TypeDescriptor<T12>): Union12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>, t10: TypeDescriptor<T10>, t11: TypeDescriptor<T11>, t12: TypeDescriptor<T12>, t13: TypeDescriptor<T13>): Union13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>, t10: TypeDescriptor<T10>, t11: TypeDescriptor<T11>, t12: TypeDescriptor<T12>, t13: TypeDescriptor<T13>, t14: TypeDescriptor<T14>): Union14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>, t10: TypeDescriptor<T10>, t11: TypeDescriptor<T11>, t12: TypeDescriptor<T12>, t13: TypeDescriptor<T13>, t14: TypeDescriptor<T14>, t15: TypeDescriptor<T15>): Union15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>, t10: TypeDescriptor<T10>, t11: TypeDescriptor<T11>, t12: TypeDescriptor<T12>, t13: TypeDescriptor<T13>, t14: TypeDescriptor<T14>, t15: TypeDescriptor<T15>, t16: TypeDescriptor<T16>): Union16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>, t10: TypeDescriptor<T10>, t11: TypeDescriptor<T11>, t12: TypeDescriptor<T12>, t13: TypeDescriptor<T13>, t14: TypeDescriptor<T14>, t15: TypeDescriptor<T15>, t16: TypeDescriptor<T16>, t17: TypeDescriptor<T17>): Union17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>, t10: TypeDescriptor<T10>, t11: TypeDescriptor<T11>, t12: TypeDescriptor<T12>, t13: TypeDescriptor<T13>, t14: TypeDescriptor<T14>, t15: TypeDescriptor<T15>, t16: TypeDescriptor<T16>, t17: TypeDescriptor<T17>, t18: TypeDescriptor<T18>): Union18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>, t10: TypeDescriptor<T10>, t11: TypeDescriptor<T11>, t12: TypeDescriptor<T12>, t13: TypeDescriptor<T13>, t14: TypeDescriptor<T14>, t15: TypeDescriptor<T15>, t16: TypeDescriptor<T16>, t17: TypeDescriptor<T17>, t18: TypeDescriptor<T18>, t19: TypeDescriptor<T19>): Union19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>, t10: TypeDescriptor<T10>, t11: TypeDescriptor<T11>, t12: TypeDescriptor<T12>, t13: TypeDescriptor<T13>, t14: TypeDescriptor<T14>, t15: TypeDescriptor<T15>, t16: TypeDescriptor<T16>, t17: TypeDescriptor<T17>, t18: TypeDescriptor<T18>, t19: TypeDescriptor<T19>, t20: TypeDescriptor<T20>): Union20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>, t10: TypeDescriptor<T10>, t11: TypeDescriptor<T11>, t12: TypeDescriptor<T12>, t13: TypeDescriptor<T13>, t14: TypeDescriptor<T14>, t15: TypeDescriptor<T15>, t16: TypeDescriptor<T16>, t17: TypeDescriptor<T17>, t18: TypeDescriptor<T18>, t19: TypeDescriptor<T19>, t20: TypeDescriptor<T20>, t21: TypeDescriptor<T21>): Union21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>, t10: TypeDescriptor<T10>, t11: TypeDescriptor<T11>, t12: TypeDescriptor<T12>, t13: TypeDescriptor<T13>, t14: TypeDescriptor<T14>, t15: TypeDescriptor<T15>, t16: TypeDescriptor<T16>, t17: TypeDescriptor<T17>, t18: TypeDescriptor<T18>, t19: TypeDescriptor<T19>, t20: TypeDescriptor<T20>, t21: TypeDescriptor<T21>, t22: TypeDescriptor<T22>): Union22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>, t10: TypeDescriptor<T10>, t11: TypeDescriptor<T11>, t12: TypeDescriptor<T12>, t13: TypeDescriptor<T13>, t14: TypeDescriptor<T14>, t15: TypeDescriptor<T15>, t16: TypeDescriptor<T16>, t17: TypeDescriptor<T17>, t18: TypeDescriptor<T18>, t19: TypeDescriptor<T19>, t20: TypeDescriptor<T20>, t21: TypeDescriptor<T21>, t22: TypeDescriptor<T22>, t23: TypeDescriptor<T23>): Union23<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23>;
    function union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>, t4: TypeDescriptor<T4>, t5: TypeDescriptor<T5>, t6: TypeDescriptor<T6>, t7: TypeDescriptor<T7>, t8: TypeDescriptor<T8>, t9: TypeDescriptor<T9>, t10: TypeDescriptor<T10>, t11: TypeDescriptor<T11>, t12: TypeDescriptor<T12>, t13: TypeDescriptor<T13>, t14: TypeDescriptor<T14>, t15: TypeDescriptor<T15>, t16: TypeDescriptor<T16>, t17: TypeDescriptor<T17>, t18: TypeDescriptor<T18>, t19: TypeDescriptor<T19>, t20: TypeDescriptor<T20>, t21: TypeDescriptor<T21>, t22: TypeDescriptor<T22>, t23: TypeDescriptor<T23>, t24: TypeDescriptor<T24>): Union24<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24>;
}
