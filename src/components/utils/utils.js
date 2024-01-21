export const Adress = (address) => {
    const addressParts = address.split(',');
    const cleanedAddressParts = addressParts.map(part => part.trim());
    const city = cleanedAddressParts[1];
    const country = cleanedAddressParts[2];
    return `${city} ${country}`;
}
