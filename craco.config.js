const CracoLessPlugin = require('craco-less');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = {
  babel: {
    presets: ['@babel/preset-react'],
    plugins: ['@babel/plugin-syntax-jsx'],
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    },
  },

  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@layout-header-background': '#483D8B',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: {
        overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
          return cracoConfig;
        },
        overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
          console.log('🚀 ~ file: craco.config.js ~ line 38 ~ webpackConfig', webpackConfig);
          webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(p => p.constructor.name !== 'ModuleScopePlugin');

          // throw new Error('error');
          return webpackConfig;
        },
        overrideDevServerConfig: ({ devServerConfig, cracoConfig, pluginOptions, context: { env, paths, proxy, allowedHost } }) => {
          return devServerConfig;
        },
        overrideJestConfig: ({ jestConfig, cracoConfig, pluginOptions, context: { env, paths, resolve, rootDir } }) => {
          return jestConfig;
        },
      },
      options: {},
    },
  ],
};
