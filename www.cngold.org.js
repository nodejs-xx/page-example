
var Monitor = require('page-monitor');
var url = 'http://www.cngold.org/';
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