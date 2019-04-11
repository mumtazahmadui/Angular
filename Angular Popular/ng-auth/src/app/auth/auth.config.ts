interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'YOUR-CLIENT-ID', //e.g. 8zOgTfK4Ga1KaiFPNFen6gQstt2Jvwlo
  CLIENT_DOMAIN: 'YOUR-DOMAIN.auth0.com', // e.g., adobot.auth0.com
  AUDIENCE: 'https://YOUR-DOMAIN.auth0.com/userinfo', // e.g., https://adobot.auth0.com/userinfo
  REDIRECT: 'https://auth0.stackblitz.io/callback',
  SCOPE: 'openid profile email'
};