// eslint-disable-next-line import/no-import-module-exports
import path from 'path';

exports.onCreateWebpackConfig = function ({ actions }: { actions: any }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@layouts': path.resolve(__dirname, 'src/components/layouts'),
        '@shared': path.resolve(__dirname, 'src/components/shared'),
        '@ui': path.resolve(__dirname, 'src/components/ui'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@main': path.resolve(__dirname, 'src/main.ts'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
  });
};
