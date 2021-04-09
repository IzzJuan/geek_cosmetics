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

const helpers = {encryptPassword, matchPassword};

export default helpers;