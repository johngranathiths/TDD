export const makeHeading = ( text: string, level: number ): string => {
    if ( level < 1 || level >= 3 ) {
    return `invalid header`;
}
return `<h${ level }>${ text }</h${ level }>`;
}