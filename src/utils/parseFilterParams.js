const parseType = (type) => {
    const isString = typeof type === 'string';
    if (!isString) return;

    const isContactType = (type) => ['work', 'home', 'personal'].includes(type);
    if (isContactType(type)) return type;
};

const parseIsFavourite = (isFavourite) => {
    const isString = typeof isFavourite === 'string';
    if (!isString) return;

    return isFavourite.toLowerCase() === 'true' ? true : isFavourite.toLowerCase() === 'false' ? false : null;
};

export const parseFilterParams = (query) => {
    const { type, isFavourite } = query;

    const parsedType = parseType(type);
    const parsedIsFavourite = parseIsFavourite(isFavourite);

    return {
        type: parsedType,
        isFavourite: parsedIsFavourite,
    };
};