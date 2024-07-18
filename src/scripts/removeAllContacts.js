import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const PATH_DB = path.resolve(__dirname, '../constants/contacts.json');

export const removeAllContacts = async () => {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
};

removeAllContacts();
