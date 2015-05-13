({
    baseUrl: 'app/scripts',
    dir: 'dist/scripts',
    modules: [{
        name: "app-require"
    }],
    mainConfigFile: 'app/scripts/app-require.js',
    keepBuildDir: false,
    removeCombined: true,
    findNestedDependencies: true,
    optimize: 'none',
})
