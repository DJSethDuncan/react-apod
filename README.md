## React Astronomy Photo of the Day

![image](https://github.com/DJSethDuncan/react-apod/assets/4060878/525e5111-5be8-4606-8b08-26e20d5a2bf9)

Shows the NASA "Astronomy Photo of the Day" in a standalone React application using Typescript.

On load, the app calls NASA's APOD API once and shows today's entry. Images render with `Photo`, videos with `Video`.

## Run locally

Requirements: Node.js 18 or newer (CI uses Node 18) and npm.

1. Get a free NASA API key at <https://api.nasa.gov/>. Fill in the "Generate API Key" form; the key arrives by email. NASA's shared `DEMO_KEY` also works, with tight rate limits.
2. Install dependencies:
   ```sh
   npm i
   ```
3. Create a `.env` file from the template and add your key:
   ```sh
   cp .env.example .env
   ```
   ```
   REACT_APP_NASA_API_TOKEN=your-key-here
   ```
   Create React App only exposes variables that start with `REACT_APP_`. Restart `npm start` after changing `.env`.
4. Start the dev server:
   ```sh
   npm start
   ```
   It opens <http://localhost:3000>.

`npm run build` writes a production build to `build/`.

## Tests

Tests live in `src/components/__tests__` and use Jest with React Testing Library.

- `npm test` runs them in watch mode.
- `npm test -- --watchAll=false` runs them once, as CI does.

## Workflows

`.github/workflows/node.js.yml` ("Node.js CI") runs on pushes of tags that start with `v` (for example `v1.0.0`). It does not run on branch pushes or pull requests.

The job runs on Ubuntu with Node 18 and does:

1. `npm ci`
2. `npm run build`
3. `npm test`

It reads `REACT_APP_NASA_API_TOKEN` from the repo's `production` environment secrets. The workflow does not deploy anything.

## Contributing docs

- [NASA APOD API](https://github.com/nasa/apod-api): request parameters and response fields (`title`, `date`, `url`, `hdurl`, `media_type`, `explanation`).
- [React](https://react.dev/): components and hooks (`useState`, `useEffect`).
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Chakra UI v2](https://v2.chakra-ui.com/docs/components): the component library used for layout and text.
- [Create React App](https://create-react-app.dev/docs/getting-started): `react-scripts` commands and `.env` handling.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest](https://jestjs.io/docs/getting-started): tests.
- [axios](https://axios-http.com/docs/intro): the HTTP client in `src/repositories/utils.ts`.
