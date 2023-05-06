/*
WEBPACK:

=> What is Webpack?
    - Static module bundler
    - Its purpose is to package all application modules from one or more entry points into one or more bundles, which are static files contenting everything needed for the application to function
    - The webpack construct a dependency graph for the entry points, which allows we know what exactly modules will be necessary
    - https://webpack.js.org/
=> Webpack Key pieces:
    - Entry: entry points from where the webpack will search for files to bundle
    - Output: the resulting output of the modules bundle process  
    - Loaders: by default, the webpack just understand javascript and json; loaders allows webpack understand another file types (css, per example), transforming the valid modules and including them into dependency graph
    - Plugins: they are used to understand the webpack behavior, performing more elaborate tasks than loaders
=> Why does we use webpack?
    - Ability to work with modules more easily
    - Ability to automate the modules management and application dependency
    - Pack the modules into static files allows them be seen in the web servers easily and faster
    - Webpack is one of the solutions more used in the market for static assets management, being used for big techs and popular frameworks like Next.Js, Vue.js, etc
*/