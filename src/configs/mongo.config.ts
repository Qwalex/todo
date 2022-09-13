import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
	configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
	return {
		uri: getMongoConnectString(configService),
		...getMongoOptions(),
	};
};

const getMongoConnectString = (configService: ConfigService) => {
	const username = configService.get('DATABASE_USERNAME');
	const password = configService.get('DATABASE_PASSWORD');
	const host = configService.get('DATABASE_HOST');
	const port = configService.get('DATABASE_PORT');
	const dbname = configService.get('DATABASE_NAME');

	return `mongodb://${username}:${password}@${host}:${port}/${dbname}`;
};

const getMongoOptions = () => ({
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
