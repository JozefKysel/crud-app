import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, `../../.env`)
});

export const appConfig = {
    port: parseInt(process.env.PORT, 10),
    axios: {
        url: 'https://jsonplaceholder.typicode.com',
        timeout: 10000
    }
}