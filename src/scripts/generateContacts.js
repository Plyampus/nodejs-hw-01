import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { faker } from '@faker-js/faker';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PATH_DB = path.resolve(__dirname, '../db/db.json');

const generateContacts = (number) => {
    const contacts = [];
    for (let i = 0; i < number; i++) {
        const contact = {
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            phone: faker.phone.number(),
            email: faker.internet.email(),
            job: faker.person.jobTitle(),
        };
        contacts.push(contact);
    }
    fs.writeFileSync(PATH_DB, JSON.stringify(contacts));
};

generateContacts(5);
