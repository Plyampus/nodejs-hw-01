import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Створюємо еквівалент __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Використовуємо path.resolve для створення абсолютного шляху
const PATH_DB = path.resolve(__dirname, '../constants/contacts.json');

export const removeLastContact = async () => {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    if (contacts.length > 0) {
        contacts.pop();
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    }
};

removeLastContact();
