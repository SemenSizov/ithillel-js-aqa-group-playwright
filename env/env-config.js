const dotenv = require('dotenv');
let envPath;
switch (process.env.NODE_ENV) {
	case 'stage':
		envPath = './env/.env.stage';
		break;
	case 'qa':
		envPath = './env/.env.qa';
		break;
	default:
		envPath = './env/.env.dev';
}

dotenv.config({ path: envPath });

const config = {
	userName: process.env.USER_NAME,
	userPass: process.env.USER_PASS,
	baseUrl: process.env.HOST,
};
console.log(config);
module.exports.envConfig = config;
