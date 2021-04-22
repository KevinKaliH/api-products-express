import dotenv from 'dotenv'
const envFound = dotenv.config();

if(envFound.error){
    throw new Error("The .env file doesn't fi");
}

const puerto = process.env.PORT as string;
const saltBcrypt = process.env.SALT_BCRYPT as string;

export default {
    DB_USER: process.env.DB_USER ?? "",
    PORT: parseInt(puerto, 10),
    SALT_BCRYPT: parseInt(saltBcrypt, 10),
    DB_MONGO: process.env.DB_MONGO ?? "",
    TOKEN_SECRET: process.env.JWT_SECRET ?? "",
    TOKEN_EXPIRE: parseInt(process.env.TOKEN_EXPIRE as string, 10)
}