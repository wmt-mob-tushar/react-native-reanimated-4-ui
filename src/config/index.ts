import BaseConfig from './config.base';
import ProdConfig from './config.prod';
import DevConfig from './config.dev';

const ExtraConfig = __DEV__ ? DevConfig : ProdConfig;

const Config = { ...BaseConfig, ...ExtraConfig };

export default Config;
