//db.js
const faker = require('faker');

function generateData() {
    const data = [];

    for (let id = 0; id < 10; id++) {
        let firstName = faker.name.firstName();
        let lastName = faker.name.firstName();
        let phoneNumber = faker.phone.phoneNumberFormat();

        data.push({
            id: id,
            first_name: firstName,
            last_name: lastName,
            phone: phoneNumber
        });
    }
    return { customers: data };
}

module.exports = generateData;
