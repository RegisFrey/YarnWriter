import { app, protocol, BrowserWindow, globalShortcut } from 'electron'
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
import { openWindow } from './windows'
import { WriterWindowType } from '@/types/Window'

/* DUPLICATING */
const isDevelopment = process.env.NODE_ENV !== 'production'
// const hasLocalDevServer = !!process.env.WEBPACK_DEV_SERVER_URL

/**
 * The 'windows-all-closed' event is called, unsuprisingly, when the all the apps windows are closed.
 */
export function onWindowsAllClosed () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
}

/**
 * The 'activate' event is called when the app is focused.
 */
export function onActivate () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  // if (win === null) { createWindow() }
}

/**
 * The 'ready' event  will be called when Electron has finished
 * initialization and is ready to create browser windows.
 * Some APIs can only be used after this event occurs.
 */
export async function onReady () {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are using Windows 10 dark mode, you may need to comment these lines to properly launch
    // In addition, if the linked issue is closed, you should upgrade electron and remove this note
    try {
      await installVueDevtools()
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  // register keys
  globalShortcut.register('CommandOrControl+N', () => {
    openWindow(WriterWindowType.Document)
  })
  // open a document
  openWindow(WriterWindowType.Document)
}
