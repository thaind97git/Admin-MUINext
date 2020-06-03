import { flow, identity, join, map, pickBy, toPairs, trim } from 'lodash/fp';

import getHeaders from './getHeaders';

export const objectToQuery = flow(
  pickBy(identity),
  toPairs,
  map(val => `${val[0]}=${val[1]}`),
  join('&'),
  trim
);

export default ({ endpoint, method = 'POST' }) => (
  variables = {},
  opts = {}
) => {
  let curEndpoint = process.env.DOMAIN_SERVER + endpoint;

  if (method === 'GET') {
    const query = objectToQuery(variables);

    return {
      endpoint: query ? curEndpoint + '?' + query : curEndpoint,
      method,
      headers: getHeaders(opts.headers)
    };
  } else {
    return {
      endpoint: curEndpoint,
      method,
      headers: getHeaders(opts.headers),
      body: JSON.stringify(variables)
    };
  }
};
