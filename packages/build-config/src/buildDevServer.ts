import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return ({
    // static: './build',
    port: options.port ?? 3000,
    open: false,
    historyApiFallback: true,
    hot: true
  })
}
