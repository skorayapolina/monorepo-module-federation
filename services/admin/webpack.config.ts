import path from 'node:path';
import webpack from 'webpack';
import { buildWebpack } from '@packages/build-config';
import { BuildMode, BuildPlatform, BuildPaths } from '@packages/build-config';

interface EnvVariables {
  mode: BuildMode;
  port: number;
  analyzer: boolean;
  platform?: BuildPlatform;
}

const config = (env: EnvVariables): webpack.Configuration => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src')
  }

  return buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    platform: env.platform ?? 'desktop',
    analyzer: env.analyzer
  });
};

export default config;
