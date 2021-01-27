import { app, BrowserWindow } from 'electron';
import path from 'path';
import ioHook from 'iohook';
import robotjs from 'robotjs';
process.environment = process.argv[2] && (process.argv[2] === 'dev' || process.argv[2] === 'prod') ?
  process.argv[2] as typeof process.environment : 'prod';
console.log(path.join(process.cwd(), 'dist/frontEnd/index.html'));
console.log(process.environment);
// tslint:disable-next-line:no-var-requires
ioHook.start(false);
const eventHandler = function (type: string) {
  switch (type) {
    case 'mouseclick':
      console.log('mouse is click!');
      break;
    case 'mousedown':
      console.log('mouse is press!');
      break;
    case 'mouseup':
      console.log('mouse is release!');
      break;
    case 'mousedrag':
      console.log('mouse is moving!');
      break;
    case 'mousedrag':
      console.log('mouse is moving!');
      break;
    case 'mousewheel':
      console.log('keybord is rolling!');
      break;
    case 'keydown':
      console.log('keybord is press!');
      break;
    default:
      console.log('move mouse or keyboard try it!');
      break;
  }
};
ioHook.start(false);
ioHook.on('mouseclick', () => {
  eventHandler('mouseclick');
});
ioHook.on('mousedown', () => {
  eventHandler('mousedown');
});
ioHook.on('mouseup', (e) => {
  console.log(e);
  eventHandler('mouseup');
});
ioHook.on('mousedrag', () => {
  eventHandler('mousedrag');
});
ioHook.on('mousewheel', () => {
  eventHandler('mousewheel');
});
ioHook.on('mouse', () => {
  eventHandler('mousedrag');
});
ioHook.on('keyup', () => {
  eventHandler('keyup');
});
ioHook.on('keydown', () => {
  eventHandler('keydown');
});



app.on('before-quit', () => {
  // 卸载iohook监听
  ioHook.unload();
  ioHook.stop();
});

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  // mainWindow.setProgressBar(0.5);
  // and load the index.html of the app.
  if (process.environment === 'dev') {
    // 开发模式
    mainWindow.loadURL('http://127.0.0.1:8080/index.html');
  } else {
    /**
     * 与package.json中build选项下的to路径相对应
     */
    mainWindow.loadFile(path.join(process.cwd(), 'resources/frontEnd/index.html'));
  }

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) { createWindow(); }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { app.quit(); }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
