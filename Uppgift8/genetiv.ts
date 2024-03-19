export const isPossessive = (name: string): string => {
    const isAlreadyPossessive = name.endsWith('s')
    const possessiveName = isAlreadyPossessive ? name + '' : name + 's'
    return possessiveName
};
