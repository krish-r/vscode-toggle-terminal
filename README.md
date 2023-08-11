# Toggle Terminal

This extension adds a toggle icon (shortcut) in the status bar.

![Terminal_Toggle](https://user-images.githubusercontent.com/54745129/210171062-86860548-cb66-403c-b4e4-db6d15d322bf.gif)

## Features

This extension tries to address an [open feature request](https://github.com/microsoft/vscode/issues/115657) by adding a toggle icon (shortcut) in the status bar.

Following are the various options available to open/toggle the terminal.
However, there isn't an one-click option to do the same.

-   View -> Terminal (`` Ctrl + ` ``)
-   View: Toggle Terminal (using Command Palette)
-   Terminal -> New Terminal
-   Click the PROBLEMS view toggle to open the Panel and select Terminal tab`
-   Toggle PANEL (`Ctrl + J`) (and optionally select Terminal tab if its not on focus)

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
