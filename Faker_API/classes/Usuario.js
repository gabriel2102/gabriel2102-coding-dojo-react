const { faker } = require('@faker-js/faker');
class Usuario{
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.findName();
        this.lastName= faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

        
    }
}
module.exports = Usuario;

