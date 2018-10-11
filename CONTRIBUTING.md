# Contributing to Mockoon

There are many ways to contribute to Mockoon: opening bugs or issues, submitting pull requests, suggesting new features...

After cloning the repository please check the opened and unassigned issues. 
If you want to contribute significant changes please discuss with the maintainer (@255kb) before starting to work.
Please note that Mockoon promise is to be simple, easy to use, and fast. So not all features are worth implementing and maintainer may chose to not implement features thatare out of Mockoon's scope.

## Build and run

Prerequisites: 
- Node.js >= 8.x.x

Clone the repository: `git@github.com:255kb/mockoon.git`

### Run the application in dev mode

- Run `npm install`
- Run `npm run dev:app` and `npm run dev:electron`

You will get auto reload on both Angular and Electron applications.

### Build and package the application for production 

- Run `npm run build:app`
- Package the application for different platforms with `npm run package:win|mac|linux`

You will get a packaged application in `./packages` folder.
Mac version can only be built on Mac OS.

Note that Windows and Mac OS versions need to be signed when packaged. This is the responsibility of maintainers (see below).

## Distribute the application

Only maintainers are entitled to build and package the application with Windows code signing and Mac OS certificates.