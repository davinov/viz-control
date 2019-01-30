# viz-controller

## Environment
This exercise uses Mocha, Chai and jsdom as testing environment.
It was bootstrapped with vue-cli 3, hence the use of Vue components.

## Synopsis
Once upon a time, a dev who thought he could be an artist made some trippy visuals rendered in a WebGL canvas.
This viz was parameterized by five values, names after famous brainwaves frequency spans:
- alpha
- beta1
- beta2
- beta3
- gamma

How to make a UI control that would be funny to discover, simple to explore and easy enough for anyone?

Moreover, imagine there is an exhibit in 2 hours... What's pragmatic to do and still better than five inputs?

Steps towards resolution:
1. a simple surface that only controls two params
2. a more elaborate surface to map all params
3. easing calculations to simplify discovery
4. connect to the main screen

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
