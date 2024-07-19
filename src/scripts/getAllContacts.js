import path from 'node:path';
import fs from 'node:fs/promises';

const PATH_DB = path.join("src", "db", "db.json");

export const getAllContacts = async () => {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    return contacts;
};

getAllContacts().then(contacts => console.log(contacts));
