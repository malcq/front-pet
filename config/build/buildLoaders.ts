import webpack from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  /*
    порядок лоадеров имеет значение,
    лучше отдельно выносить в переменные,
    видеть последовательность в массиве.
*/
  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const cssLoader = buildCssLoader(isDev);
  // Если не используем тайпскрипт - нужен babel-loader
  /* const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }; */

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    /* typescriptLoader, */
    cssLoader,
  ];
}
