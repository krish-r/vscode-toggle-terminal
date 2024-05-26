# Toggle Terminal

This extension adds a toggle icon (shortcut) in the status bar.

![Terminal_Toggle](https://user-images.githubusercontent.com/54745129/210171062-86860548-cb66-403c-b4e4-db6d15d322bf.gif)

## Features

This extension tries to address a [closed feature request](https://github.com/microsoft/vscode/issues/115657) by adding a toggle icon (shortcut) in the status bar.

Following are the various options available to open/toggle the terminal.
However, there isn't an one-click option to do the same.

-   View -> Terminal (`` Ctrl + ` ``)
-   View: Toggle Terminal (using Command Palette)
-   Terminal -> New Terminal
-   Click the PROBLEMS view toggle to open the Panel and select Terminal tab`
-   Toggle PANEL (`Ctrl + J`) (and optionally select Terminal tab if its not on focus)

## Setting(s)

The following setting(s) can be specified in your `settings.json`

| Setting                            | Description                                                                                                                       | Value(s)                  |                                                                                |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------ |
| `vscode-toggle-terminal.alignment` | Where to align the toggle button                                                                                                  | `left` (default), `right` | Thanks to [@thumperward](https://github.com/thumperward) for the contribution. |
| `vscode-toggle-terminal.priority`  | Priority of the toggle button position in the status bar. (Higher values mean the toggle button would be shown more to the left.) | `0` (default)             |                                                                                |
| `vscode-toggle-terminal.listNames` | Display terminal names on hover (tooltip)                                                                                         | `false` (default)         | (**Experimental** - values might not update in some cases due to API limitations, requires interaction with the toggle to update) |

## Known Issues/Limitations

-   Clicking on the toggle does not show/hide the terminal -

    -   If the focus is switched from the active terminal to another section on the Panel (like `PROBLEMS` or `OUTPUT`), \
        (Currently there isn't an API to know if the inline terminal has the focus - [117980](https://github.com/microsoft/vscode/issues/117980)).
    -   If the panel is closed using "Close Panel" option

    As a workaround, we need to click the toggle twice to show (focus) on the active terminal first (and once more if we need to hide)

-   This does not work well if the Terminal is created in the Editor Area (`Terminal: Create New Terminal in Editor Area`) instead of Panel (default)

-   Tests - There aren't any tests right now

If you come across any other issue, or if you could improve this extension please feel free to raise a Bug/PR

## Installing from Source

-   Clone the Repository
-   Run `npm install -g @vscode/vsce` to install `vsce`
-   Run `vsce package` from the cloned directory to package the extension
-   Run `Extensions: Install from VSIX` and choose the vsix package

## Release Notes

### 0.0.1

-   Initial Release

### 0.0.2

-   Added CI Pipeline
-   Updated Known Limitation in README

### 0.0.3

-   bump @vscode/vsce - dev dependency

### 0.0.4

-   Added setting for alignment.

### 0.0.5

-   Added setting for priority.
-   Added notification to reload on configuration changes.

### 0.0.6, 0.0.7

 - Added setting to display terminal name on hover (tooltip).
