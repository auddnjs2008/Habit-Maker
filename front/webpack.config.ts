import path from 'path';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import Dotenv from 'dotenv-webpack';

const isDevelopment = process.env.NODE_ENV !== 'production';

interface Configuration extends WebpackConfiguration {}

const config: Configuration = {
  name: 'HABITMAKER',
  mode: isDevelopment ? 'development' : 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@typings': path.resolve(__dirname, 'src/typings'),
    },
  },
  entry: {
    app: './client',
  },
  target: ['web', 'es5'],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['last 2 chrome versions'] },
                debug: isDevelopment,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          env: {
            development: {
              plugins: [['@emotion/babel-plugin', { sourceMap: true }], require.resolve('react-refresh/babel')],
            },
            production: {
              plugins: ['@emotion/babel-plugin'],
            },
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({ async: false }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: isDevelopment ? 'development' : 'production',
    }),
    new Dotenv(),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3080,
    devMiddleware: { publicPath: '/dist/' },
    static: { directory: path.resolve(__dirname) },
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
};

if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin({ overlay: { useURLPolyfill: true } }));
}

export default config;
