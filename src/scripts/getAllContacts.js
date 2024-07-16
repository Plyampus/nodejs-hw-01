import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
    const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
    return contacts;
};

console.log(await getAllContacts());
