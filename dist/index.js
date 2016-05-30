var tsDiscriminatedUnion;
(function (tsDiscriminatedUnion) {
    function createTypeDescriptor(identifier) {
        return {
            create: function (data) {
                var obj = data;
                obj.type = identifier;
                return obj;
            },
            match: function (value) {
                return value.type === identifier;
            }
        };
    }
    tsDiscriminatedUnion.createTypeDescriptor = createTypeDescriptor;
})(tsDiscriminatedUnion || (tsDiscriminatedUnion = {}));
var tsDiscriminatedUnion;
(function (tsDiscriminatedUnion) {
    function matchType(type, value) {
        if (typeof type === "function") {
            return value instanceof type;
        }
        return type.match(value);
    }
    tsDiscriminatedUnion.matchType = matchType;
})(tsDiscriminatedUnion || (tsDiscriminatedUnion = {}));
var tsDiscriminatedUnion;
(function (tsDiscriminatedUnion) {
    function union() {
        return {
            match: function (value) {
                var result;
                var match = false;
                return {
                    default: function (action) {
                        result = action(value);
                        match = true;
                        return this;
                    },
                    case: function (type, action) {
                        if (!match && tsDiscriminatedUnion.matchType(type, value)) {
                            result = action(value);
                        }
                        return this;
                    },
                    result: function () { return result; }
                };
            }
        };
    }
    tsDiscriminatedUnion.union = union;
})(tsDiscriminatedUnion || (tsDiscriminatedUnion = {}));
