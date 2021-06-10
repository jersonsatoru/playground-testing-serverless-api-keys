const env = require('env-var')

module.exports = {
    batata: env.get('batata').required().asString(),
};
