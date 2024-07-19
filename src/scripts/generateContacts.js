import path from 'node:path';
import { faker } from '@faker-js/faker';
import fs from 'node:fs';

const PATH_DB = path.join("src", "db", "db.json");

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
