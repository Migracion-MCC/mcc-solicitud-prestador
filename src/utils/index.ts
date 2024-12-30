export const generateSecureuUUID = (): string => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const random = crypto.getRandomValues(new Uint8Array(1))[0];
        const value = c === "x" ? random & 0xf : (random & 0x3) | 0x8;
        return value.toString(16);
    });
};

export const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });

export const validateRut = (rut: string): boolean => {

    const rutRegex = /^[0-9]{7,8}-[0-9Kk]$/;

    if (!rutRegex.test(rut)) return false;
    const [body, verificationDigit] = rut.split('-');

    let sum = 0;
    let multiplier = 2;

    for (let i = body.length - 1; i >= 0; i--) {
        sum += parseInt(body[i], 10) * multiplier;
        multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }

    const remainder = sum % 11;
    const calculatedDigit =
        remainder === 0 ? '0' : remainder === 1 ? 'K' : (11 - remainder).toString();

    return verificationDigit.toUpperCase() === calculatedDigit;
}

