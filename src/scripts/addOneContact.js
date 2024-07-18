import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createFakeContact } from '../utils/createFakeContact.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PATH_DB = path.resolve(__dirname, '../db/db.json');

const addOneContact = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContent);

    const newContact = createFakeContact();

    contacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');

    console.log('Successfully added one new contact.');
  } catch (error) {
    console.error('Error adding one contact:', error);
  }
};

addOneContact();
