
```html
firebase functions:log --project control-my-lighs
2021-05-30T18:04:14.031Z ? updateGarage:     at processTicksAndRejections (internal/process/task_queues.js:97:5)
2021-05-30T18:04:15.107Z E updateGarage: Error: Process exited with code 16
    at process.<anonymous> (/layers/google.nodejs.functions-framework/functions-framework/node_modules/@google-cloud/functions-framework/build/src/invoker.js:275:22)
    at process.emit (events.js:314:20)
    at process.EventEmitter.emit (domain.js:483:12)
    at process.exit (internal/process/per_thread.js:168:15)
    at Object.sendCrashResponse (/layers/google.nodejs.functions-framework/functions-framework/node_modules/@google-cloud/functions-framework/build/src/logger.js:37:9)
    at process.<anonymous> (/layers/google.nodejs.functions-framework/functions-framework/node_modules/@google-cloud/functions-framework/build/src/invoker.js:271:22)
    at process.emit (events.js:314:20)
    at process.EventEmitter.emit (domain.js:483:12)
    at processPromiseRejections (internal/process/promises.js:209:33)
    at processTicksAndRejections (internal/process/task_queues.js:98:32)
2021-05-30T18:04:25.644468172Z N updateGarage: 
2021-05-30T18:14:28.870453Z I : 
2021-05-30T18:14:29.170182Z I : 
2021-05-30T18:14:30.371944Z N updateGarage: 
2021-05-30T18:15:36.776727Z N updateGarage: 
2021-05-30T18:28:51.856151587Z D updateGarage: Function execution started
2021-05-30T18:28:51.911Z W updateGarage: Function returned undefined, expected Promise or value
2021-05-30T18:28:51.925301683Z D updateGarage: Function execution took 70 ms, finished with status: 'ok'
2021-05-30T18:32:16.601Z ? updateGarage: Unhandled rejection
2021-05-30T18:32:16.601Z ? updateGarage: TypeError: Cannot read property 'doc' of undefined
2021-05-30T18:32:16.601Z ? updateGarage:     at /workspace/index.js:20:9
2021-05-30T18:32:16.601Z ? updateGarage:     at processTicksAndRejections (internal/process/task_queues.js:97:5)
2021-05-30T18:32:17.970Z E updateGarage: Error: Process exited with code 16
    at process.<anonymous> (/layers/google.nodejs.functions-framework/functions-framework/node_modules/@google-cloud/functions-framework/build/src/invoker.js:275:22)
    at process.emit (events.js:314:20)
    at process.EventEmitter.emit (domain.js:483:12)
    at process.exit (internal/process/per_thread.js:168:15)
    at Object.sendCrashResponse (/layers/google.nodejs.functions-framework/functions-framework/node_modules/@google-cloud/functions-framework/build/src/logger.js:37:9)
    at process.<anonymous> (/layers/google.nodejs.functions-framework/functions-framework/node_modules/@google-cloud/functions-framework/build/src/invoker.js:271:22)
    at process.emit (events.js:314:20)
    at process.EventEmitter.emit (domain.js:483:12)
    at processPromiseRejections (internal/process/promises.js:209:33)
    at processTicksAndRejections (internal/process/task_queues.js:98:32)
2021-05-30T18:41:52.632854Z I : 
2021-05-30T18:41:52.986410Z I : 
2021-05-30T18:41:54.241235Z N updateGarage: 
2021-05-30T18:43:05.140969Z N updateGarage: 
2021-05-30T19:25:19.353311Z I : 
2021-05-30T19:25:19.700197Z I : 
2021-05-30T19:25:20.976786Z N updateGarage: 
2021-05-30T19:26:25.017448Z N updateGarage: 
2021-05-30T19:28:08.685592Z I : 
2021-05-30T19:28:08.950658Z I : 
2021-05-30T19:28:10.193327Z N updateGarage: 
2021-05-30T19:29:11.637770Z N updateGarage: 
2021-05-30T19:34:04.532315Z I : 
2021-05-30T19:34:04.876667Z I : 
2021-05-30T19:34:06.052541Z N updateGarage: 
2021-05-30T19:35:13.534912Z N updateGarage: 
2021-05-30T19:35:43.595986Z I : 
2021-05-30T19:35:43.852178Z I : 
2021-05-30T19:35:45.180154Z N updateGarage: 
2021-05-30T19:36:55.044093Z N updateGarage: 
neuberfran@ubuntu2010:~/Projects/firestore3/functions$  
```        
