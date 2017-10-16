import * as config from 'config';

import { IAppConfig } from './../interfaces/app-config';

const getAppConfig = () =>
    config.get<IAppConfig>('appConfig');

export { getAppConfig };
