import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_DB = path.resolve(__dirname, '../db/db.json');

export const countContacts = async () => {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data);
    return contacts.length;
};

console.log(await countContacts());
