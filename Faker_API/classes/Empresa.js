const { faker } = require('@faker-js/faker');

class Empresa{
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode:faker.address.zipCode(),
            country: faker.address.country()
        };
    }
}

module.exports = Empresa;