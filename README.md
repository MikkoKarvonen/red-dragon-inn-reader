# Lorekeeper's Companion

A web-based audio book reader for **Tales from the Red Dragon Inn**, featuring synchronized text and audio playback with customizable reading modes.

## Live 

- [https://red-dragon-inn-reader.netlify.app](https://red-dragon-inn-reader.netlify.app)

## Resources & Tools

- [SlugFest Games — Tales from the Red Dragon Inn Resources](https://slugfestgames.com/tales-from-the-red-dragon-inn-resources/)
- [CloudConvert — Audio Format Converter](https://cloudconvert.com)
- [Clideo — Merge Audio Files](https://clideo.com/merge-audio)
- [Google Cloud Text-to-Speech](https://cloud.google.com/text-to-speech)
  - **Voice Used:** `en-GB-Chirp3-HD-Vindemiatrix`

## Features

- 📖 **Chapter Navigation** - Browse through 25 chapters of tavern tales
- 🎵 **Audio Playback** - Play/pause audio narration for each section
- ⚡ **Playback Speed Control** - Adjust playback speed from 1x to 2x
- 📝 **Compact Mode** - Toggle compact versions of Prologues and Epilogues (Reinforcements remain full-length)
- 🎨 **Modern UI** - Dark-themed interface with responsive design
- 📱 **Mobile Friendly** - Works seamlessly on desktop and mobile devices

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **pnpm** - Package manager

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (install with `npm install -g pnpm`)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd red-dreagon-inn-reader
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
pnpm build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
pnpm preview
```

## Project Structure

```
red-dreagon-inn-reader/
├── public/
│   └── audio/              # Audio files organized by chapter
│       ├── chapter-1/
│       ├── chapter-2/
│       └── ...
├── src/
│   ├── components/         # React components
│   │   └── PlayButton.tsx # Audio playback button component
│   ├── data/
│   │   └── chapters.ts    # Chapter data and text content
│   ├── hooks/
│   │   └── useAudioPlayer.ts # Audio player hook
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
└── package.json
```

## Audio File Structure

Audio files are organized by chapter in the `public/audio/` directory. Each chapter folder contains:

- `prologue.mp3` - Full prologue audio
- `prologue-compact.mp3` - Compact prologue audio (when available)
- `epilogue.mp3` - Full epilogue audio
- `epilogue-compact.mp3` - Compact epilogue audio (when available)
- `reinforcements-0.mp3`, `reinforcements-1.mp3`, etc. - Reinforcement section audio files
- `part-2.mp3` / `part-2-compact.mp3` - Part 2 audio (for specific chapters)

## Usage

1. **Select a Chapter** - Use the dropdown menu to choose a chapter
2. **Toggle Compact Mode** - Enable compact mode to see shorter versions of Prologues and Epilogues
3. **Adjust Playback Speed** - Select your preferred playback speed from the dropdown
4. **Play Audio** - Click the "Play" button next to any section to start audio playback
5. **Pause Audio** - Click "Pause" to stop playback

## Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

### Code Style

This project uses:
- ESLint for code linting
- TypeScript for type checking
- Tailwind CSS for styling

