import qs from 'query-string';
import config from '../../config';

const options = {
  client_id: config.clientId,
  redirect_uri: `${window.location.origin}/callback`,
  scope: config.scopes,
  response_type: 'token',
};

const login = async () => {
  const params = qs.stringify(options);
  const url = `${config.authorizeUrl}?${params}`;
  window.location.href = url;
};

console.log(options.client_id)

export default login;
