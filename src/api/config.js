// import {IS_DEVELOPER, ANDROID_URL_HEAD, IOS_URL_HEAD, PRODUCTION_URL_HEAD} from '@env';

const IS_DEVELOPER = true;
const DEV_URL_HEAD = 'https://fraudtransaction-e8e4dcdue9gdfmaa.southindia-01.azurewebsites.net/'

const development = IS_DEVELOPER;
let urls;

if (development) {
  urls = {
    BASE_URL: DEV_URL_HEAD, 
  };
} else {
  // Production urls
  urls = {
    BASE_URL: PRODUCTION_URL_HEAD,
  };
}

export const {BASE_URL} = urls;

export const REGISTER = 'api/FraudTransaction/post-user';
export const LOGIN = 'api/FraudTransaction/post-user-login';
export const POST_TRANS = 'api/FraudTransaction/postTransaction';
export const GET_TRANS = 'api/FraudTransaction/GETTransaction';