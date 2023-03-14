import { cleanEnv, str } from 'envalid';
import * as dotenv from 'dotenv';
dotenv.config();
export const settings = cleanEnv(process.env, {
  KEYCLOAK_REALM: str({ default: 'pfizer' }),
  KEYCLOAK_URL: str({ default: 'https://auth.pic.osana.dev/auth' }),
  KEYCLOAK_GRANT_TYPE: str({ default: 'password' }),
  KEYCLOAK_CLIENT_ID: str({ default: 'admin-cli' }),
});
