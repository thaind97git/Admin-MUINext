import { compact, concat, flow, join } from 'lodash/fp';

export const isServer = !process.browser;

export const createLink = flow(compact, concat(['']), join('/'));
