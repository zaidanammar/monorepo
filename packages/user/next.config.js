// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

const withTM = require("next-transpile-modules")(["design-system"]);

module.exports = withTM()