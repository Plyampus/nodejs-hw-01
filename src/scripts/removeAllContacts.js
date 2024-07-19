import fs from 'node:fs/promises';
import path from 'node:path';

const PATH_DB = path.join("src", "db", "db.json");

export const removeAllContacts = async () => {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
};

removeAllContacts();
