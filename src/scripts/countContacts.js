import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    const contacts = JSON.parse(fs.readFileSync(PATH_DB));
    return contacts.length;
};

console.log(await countContacts());
