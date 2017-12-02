// @flow

// eslint-disable-next-line import/prefer-default-export
export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`;

helloEndpointRoute();
helloEndpointRoute(1234);
