//db.js
const faker = require('faker');
const efaker = require('faker/locale/en');
faker.locale = 'zh_TW';

function generateData() {
    const data = [];

    for (let id = 1; id < 50; id++) {
        let name = faker.name.firstName() + faker.name.lastName();
        let ename = efaker.name.lastName();
        let phoneNumber = faker.phone.phoneNumberFormat();
        let email = faker.internet.email();
        let sex = faker.random.word();
        let city = faker.address.city();
        let township = faker.address.cityPrefix() + faker.address.citySuffix();
        let postcode = faker.address.zipCode();
        let address = faker.address.streetAddress();
        let notes = faker.random.words();
        let created_at = faker.date.past();
        let updated_at = faker.date.future();

        data.push({
            id: id,
            name: name,
            ename: ename,
            phone: phoneNumber,
            email: email,
            sex: sex,
            city: city,
            township: township,
            postcode: postcode,
            address: address,
            notes: notes,
            created_at: created_at,
            updated_at: updated_at
        });
    }
    return { contacts: data };
}

module.exports = generateData;
