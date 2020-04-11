import { BrowserWindow } from 'electron'

export enum WriterWindowType {
  Document = 'document',
  Settings = 'settings',
  Guide = 'guide'
}

/**
 * Track currently open windows.
 */
export const windows: Array<BrowserWindow> = []

/**
 * Track the currently focused window.
 */
export const focusedWindow: BrowserWindow | null = null

/**
 * attach to BrowserWindow `beforeunload` event
 */
export function onWindowWillClose (event: { preventDefault: Function; sender: BrowserWindow }) {
  // console.log('onWindowWillClose', event)
  // TODO: use the dialog API to ask if unsaved changes
  // dialog.showMessageBox([browserWindow, ]options[, callback])
}

/**
 * attach to BrowserWindow `close` event
 */
export function onWindowClosed (event: { sender: BrowserWindow }) {
  // console.log('onWindowWillClose', event)
  // Stop tracking, remove from array
  const index = windows.findIndex(w => w === event.sender)
  windows.splice(index, 1)
  console.log('tracked windows: ' + windows.length)
  // TODO: if settings manager, unbind / reassign listeners
}

function setEntrypointForWindowType (window: BrowserWindow, type: WriterWindowType) {
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    window.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
    if (!process.env.IS_TEST) window.webContents.openDevTools()
  } else {
    // createProtocol('app') // moved to initialization
    window.loadURL('app://./index.html')
  }
  // document type uses the main entry point
  // TODO: settings and guide have different entry points
}

export function openWindow (type: WriterWindowType) {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // Load an HTML Entry Point
  setEntrypointForWindowType(window, type)
  // Listen for Close
  window.on('closed', onWindowClosed)
  // Track
  windows.push(window)
}

export function closeWindow (id: number) {
  windows[id].close()
}
