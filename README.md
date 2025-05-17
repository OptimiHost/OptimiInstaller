# Minecraft Modpack Installer

This project is a Minecraft modpack installer built using Electron and HTML. It provides a user-friendly interface for selecting and installing modpacks from Modrinth.

## Features

- **Starting Page**: A welcoming interface to introduce the installer.
- **Modpack Selection**: Users can choose between two modpacks: Optimi and Optimi Light.
- **Version Selection**: Fetches available versions from the Modrinth API for users to select.
- **Directory Selection**: Allows users to choose the installation directory for the modpack.
- **Installation Process**: Includes a progress bar to track the installation of the selected modpack.
- **Completion Page**: Displays a message once the installation is complete.

## Project Structure

```
minecraft-modpack-installer
├── src
│   ├── main
│   │   ├── main.ts
│   │   ├── preload.ts
│   │   └── api
│   │       ├── modrinth.ts
│   │       └── installer.ts
│   └── renderer
│       ├── index.html
│       ├── pages
│       │   ├── start.html
│       │   ├── modpack-selection.html
│       │   ├── version-selection.html
│       │   ├── directory-selection.html
│       │   ├── installation.html
│       │   └── done.html
│       ├── styles
│       │   └── main.css
│       └── scripts
│           ├── navigation.ts
│           ├── modpack-selection.ts
│           ├── version-selection.ts
│           ├── directory-selection.ts
│           └── installation.ts
├── assets
│   └── icons
├── forge.config.ts
├── package.json
├── tsconfig.json
├── electron-builder.json
└── README.md
```

## Installation

To install the project, clone the repository and run the following commands:

```bash
npm install
npm start
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.# OptimiInstaller
