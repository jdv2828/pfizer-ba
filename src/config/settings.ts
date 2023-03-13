import { cleanEnv, str, num } from 'envalid';
import * as dotenv from 'dotenv';
dotenv.config();
export const settings = cleanEnv(process.env, {
  KEYCLOAK_REALM: str({ default: 'pfizer' }),
  KEYCLOAK_URL: str({ default: 'https://auth.pic.osana.dev/auth' }),
  GRANT_TYPE: str({ default: 'password' }),
  CLIENT_ID: str({ default: 'admin-cli' }),
});
