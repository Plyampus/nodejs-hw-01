import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
    const contacts = JSON.parse(fs.readFileSync(PATH_DB));
    if (contacts.length > 0) {
        contacts.pop();
        fs.writeFileSync(PATH_DB, JSON.stringify(contacts));
    }
};

removeLastContact();
