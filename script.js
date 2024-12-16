let http = require("http");
const { faker } = require("@faker-js/faker");
function createRandomUser() {
  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    sex: faker.person.sexType(),
    subscriptionTier: faker.helpers.arrayElement(["free", "basic", "business"]),
  };
}

const user = createRandomUser();
console.log(user);
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`${user.firstName} ${user.lastName}`);
  })
  .listen(8080);
