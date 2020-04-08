'use strict'

import { app, protocol } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import { onActivate, onWindowsAllClosed, onReady } from './electron/lifecycle'

const isDevelopment = process.env.NODE_ENV !== 'production'
const hasLocalDevServer = !!process.env.WEBPACK_DEV_SERVER_URL

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])
if (!hasLocalDevServer) { // skip creating protocol in dev server
  createProtocol('app')
}

app.on('window-all-closed', onWindowsAllClosed)
app.on('activate', onActivate)
app.on('ready', onReady)

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
