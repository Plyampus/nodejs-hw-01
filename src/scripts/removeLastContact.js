import fs from 'node:fs/promises';
import path from 'node:path';

const PATH_DB = path.join("src", "db", "db.json");

export const removeLastContact = async () => {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    if (contacts.length > 0) {
        contacts.pop();
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    }
};

removeLastContact();
