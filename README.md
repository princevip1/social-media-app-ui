# Social Media App 📱

This is a social media application built using [Expo](https://expo.dev) and React Native. The app includes features like a tab-based navigation system, stories, posts, and user profiles. It is designed to run on Android, iOS, and the web.

## Features

- **Tab Navigation**: Navigate between Home, Search, New Post, Notifications, and Profile tabs.
- **Stories**: Display user stories in a horizontal scrollable view.
- **Posts**: View user posts with captions, likes, and comments.
- **Responsive Design**: Optimized for mobile and web platforms.

## Get Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

# Project Structure
.
├── app/
│   ├── _layout.tsx          # Main layout for the app
│   ├── old.tsx              # Legacy code (optional)
│   ├── (tabs)/              # Tab-based navigation screens
│       ├── _layout.tsx      # Tab layout configuration
│       ├── index.tsx        # Home screen
│       ├── search.tsx       # Search screen
│       ├── new-post.tsx     # New Post screen
│       ├── notifications.tsx # Notifications screen
│       ├── profile.tsx      # Profile screen
├── assets/                  # Static assets (images, fonts, etc.)
├── .expo/                   # Expo-specific configurations
├── .vscode/                 # VS Code settings
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation


