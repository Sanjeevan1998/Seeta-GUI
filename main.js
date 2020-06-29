const electron = require('electron');
const url = require('url');
const path = require('path');

const {app,BrowserWindow} = electron;

let mainWindow;

//Listen for the app to be ready
app.on('ready', function(){
  //Create new Window
  mainWindow = new BrowserWindow({});

  mainWindow.setMenu(null);
  //load the html file
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol:'file:',
    slashes: true

  }));

});
