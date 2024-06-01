
import  webpack  from "webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {

webpack(config) {
config.plugins.push(
new webpack.NormalModuleReplacementPlugin(
/^isomorphic-form-data$/,
`${config.context}/form-data-mock.js`
)
);
return config;
},
};

export default nextConfig;




