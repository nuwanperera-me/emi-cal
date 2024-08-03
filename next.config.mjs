/** @type {import('next').NextConfig} */


import withPWA from "next-pwa"

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = withPWA(nextConfig);


// import withPWA from "next-pwa";
// // import runtimeCaching from "next-pwa/cache";

// export default withPWA({
// 	reactStrictMode: true,
// 	pwa: {
// 		dest: "public",
// 		register: true,
// 		skipWaiting: true,
// 		buildExcludes: [/middleware-manifest.json$/]
// 	}
// });