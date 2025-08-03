module.exports = {
  async redirects() {
    return [
      {
        source: '/', // The incoming request path pattern
        destination: '/home', // The path you want to redirect to
        permanent: true, // Use 308 status code (permanent redirect)
      },
    ];
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  }
};
