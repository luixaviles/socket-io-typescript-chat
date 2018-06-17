interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'zcT96ZzfDzvYaKkXUk6sh2rWNyCsTqMt',
  domain: 'alcumus-chat.eu.auth0.com',
  callbackURL: 'https://localhost:4200/callback'
};
