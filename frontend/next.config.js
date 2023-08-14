/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, context) => {
        if(process.env.NEXT_WEBPACK_USEPOLLING) {
            config.watchOptions = {
            poll: 500,
            aggregateTimeout: 300
            }
        }
        return config
    },
}

module.exports = nextConfig
