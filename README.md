# Monorepo with legacy JS apps importing TS apps from the (separate) yarn workspace

The workspace (`packages` folder) holds typescript based packages. Only typescript, it's not compiled to javascript yet.

The `legacy` folder holds javascript based packages. One of the legacy packages can import from the local typescript packages and through a yarn `preinstall` script in the typescript app, the act of installing node_modules in the legacy app will compile the TS package so that the JS app can import the compiled JS.

Clear as mud!