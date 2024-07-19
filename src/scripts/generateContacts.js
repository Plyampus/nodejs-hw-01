import { PATH_DB } from '../constants/contacts.js';
import { faker } from '@faker-js/faker';
import fs from 'node:fs';

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
