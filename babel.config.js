// Change this:
// module.exports = {

// To this:
export default {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: "automatic" }],
    ],
};