import bcrypt from 'bcrypt';

async function encryptPassword(pass: string) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pass, salt);
}

async function matchPassword(pass: string, savedPass: string) {

    try {
        return await bcrypt.compare(pass, savedPass);
    } catch (error) {
        console.log(error);
    }

}

export function generateSerial() {

    let chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', serialLength = 10, randomSerial = "",
        i, randomNumber;

    for (i = 0; i < serialLength; i = i + 1) {

        randomNumber = Math.floor(Math.random() * chars.length);

        randomSerial += chars.substring(randomNumber, randomNumber + 1);

    }

    return randomSerial;

}

const helpers = {encryptPassword, matchPassword};

export default helpers;