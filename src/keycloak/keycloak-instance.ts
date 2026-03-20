import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'https://key.ingenosya.net', // Sans /auth pour Keycloak 17+
  realm: 'VIEWPAY',
  clientId: 'viewpay-client'
});

export default keycloak;