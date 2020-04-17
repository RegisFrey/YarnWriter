import { BrowserWindow } from 'electron'

/**
 * The Settings Owner is the window that currently
 * has the authoritative state for settings.
 *
 * This will start as the initial document window.
 * This will change to settings window if open.
 * This will return to another document window if current owner is closed.
 */
export let settingsOwner: BrowserWindow | null

/**
 * Settings from the Vue store are collected here as a JSON object
 * and can be used in electron. e.g. for setting backgroundColor when
 * opening a new BrowserWindow.
 */
export const settings: Record<string, any> | null = null

export function setSettingsOwner (window: BrowserWindow) {
  // remove vuex listeners from previous
  // add vuex listeners to new
  console.log('setSettingsOwner')
}

/**
 * If settings window, use that
 * If current settingsOwner is in list, keep that
 * If no settings owner use the first document you find
 */
export function chooseSettingsOwner () {
  console.log('chooseSettingsOwner')
}

// Q can settings only be set from settings?
// if so we should just listen on that window
