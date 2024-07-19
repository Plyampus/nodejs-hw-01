import path from 'node:path';
import fs from 'node:fs/promises';

const PATH_DB = path.join("src", "db", "db.json");

export const countContacts = async () => {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data);
    return contacts.length;
};

console.log(await countContacts());
