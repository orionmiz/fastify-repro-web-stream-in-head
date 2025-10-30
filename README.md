# Fastify minimal reproducible example

**ISSUE: Web stream payload is unhandled in HEAD route**

1. Install dependencies first
```
$ npm i
```

2. Run server
```
$ npm run start
```

3. Find an error message in the printed logs

```
TypeError [ERR_INVALID_ARG_TYPE]: The "string" argument must be of type string or an instance of Buffer or ArrayBuffer. Received an instance of ReadableStream
    at Function.byteLength (node:buffer:777:11)
    ...
```
