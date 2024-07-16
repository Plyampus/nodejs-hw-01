import { faker } from '@faker-js/faker';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


const generateContacts = async (number) => {
    const contacts = [];
    for (let i = 0; i < number; i++) {
        const contact = {
            id: faker.datatype.uuid(),
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
