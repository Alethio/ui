module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('ts-loader'),
            },
            // Optional
            {
                loader: require.resolve('react-docgen-typescript-loader'),
                options: {
                    tsconfigPath: __dirname + "/../tsconfig.json"
                }
            }
        ],
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
