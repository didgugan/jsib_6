var remote = require('remote'),
    ipc = require('ipc'),
    Menu = remote.require('menu');

var menu = Menu.buildFromTemplate([
    {
        label: 'JSib',
        submenu: [{
            label: 'About',
            click: function() {
                ipc.send('show-about');
            }
        }]
    }
]);

Menu.setApplicationMenu(menu);

document.write(JSON.stringify(process.versions));