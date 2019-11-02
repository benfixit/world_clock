module.exports = function babelConfig(api){
    api.cache.forever();

    const presets = ["@babel/preset-env", "@babel/preset-react"];

    const plugins = ["@babel/plugin-proposal-class-properties"]

    return {
        presets,
        plugins
    }
}