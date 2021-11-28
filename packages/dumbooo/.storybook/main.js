module.exports = {
    stories: ['../src/components/**/*.stories.[tj]sx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
    ],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push(
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {},
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }

                ]
            },
        );
        return config;
    }
};
