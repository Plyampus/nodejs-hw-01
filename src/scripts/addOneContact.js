import fs from 'node:fs/promises';
import path from 'node:path';
import { createFakeContact } from '../utils/createFakeContact.js';

const PATH_DB = path.join("src", "db", "db.json");

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
