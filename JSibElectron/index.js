var app = require('app'),
    ipc = require('ipc'),
    BrowserWindow = require('browser-window');

app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadUrl('file://' + __dirname + '/index.html');
    
    ipc.on('show-about', function() {
        var aboutWindow = new BrowserWindow({
            width: 300,
            height: 300
        });
        aboutWindow.loadUrl('file://' + __dirname + '/about.html');
    });
    
    mainWindow.on('closed', function() {
        app.quit();
    });
});