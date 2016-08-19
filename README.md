### step 0 preparatory work

[page-monitor](https://github.com/nodejs-xx/page-monitor)   
[pmui](https://github.com/nodejs-xx/pmui)



### Step 1. generate monitor script

```bash
vim www.google.com.js
```

content of www.google.com.js:

```javascript
var Monitor = require('page-monitor');
var url = 'https://www.google.com.hk/';
var opt = { /* see https://github.com/fouber/page-monitor#monitor */ };
var monitor = new Monitor(url, opt);
monitor.on('debug', function (data) {
    console.log('[DEBUG] ' + data);
});
monitor.on('error', function (data) {
    console.error('[ERROR] ' + data);
});

monitor.capture(function (code) {
    console.log('[DONE ] ' + (new Date));
});
```

### Step 2. run monitor script

```bash
node www.google.com
```

I highly recommend to use [forever](https://github.com/nodejitsu/forever) to run monitor script as a daemon in the background.

```bash
forever start --spinSleepTime 60000 www.google.com.js
```

