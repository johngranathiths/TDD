export const isZipValid = (zip: string): boolean => {
    const zipRegx = /^\d{5}$/;
    return zipRegx.test(zip);
} 