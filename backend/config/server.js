module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', ''),
  admin: {
    url: env('ADMIN_URL', '/admin'),
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'cbd57ac8986a0b3317c9e345254a841e'),
    },
  },
});
