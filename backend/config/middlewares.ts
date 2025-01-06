export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:3000'],  // Allow your Nuxt app's origin
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
      // allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
      credentials: true,  // Allow cookies to be sent
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
