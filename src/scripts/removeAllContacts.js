import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    fs.writeFileSync(PATH_DB, JSON.stringify([]));
};

removeAllContacts();
