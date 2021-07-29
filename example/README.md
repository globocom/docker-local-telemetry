# Sample app

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

Sample app to generate traces/metrics for [OpenTelemetry][1]

## Table of Contents

- [About](#about)
- [Install](#install)
- [Usage](#usage)

## About

This app contains only two endpoints:

- `/nice`
- `/hello`

They don't do much as they were created for demonstration purposes.

## Install

You will need to install all node dependencies:

```
$ npm install
```

## Usage

To start the app just execute:

```
$ npm start
```

The app will be available on [localhost:8080](localhost:8080). If you want to
generate some bogus traffic, execute:

```
$ npm run traffic
```

It will perform requests on a loop to generate some data to bee seen on the
dashboards.

[1]: https://opentelemetry.io/
