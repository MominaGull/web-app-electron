const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width:800,
    height:650,
    minimizable: false,
    maximizable: false,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  })
  win.setMenu(null);
  // win.openDevTools()

  win.loadFile('main.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})