import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


export const countContacts = async () => {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data);
    return contacts.length;
};

console.log(await countContacts());
