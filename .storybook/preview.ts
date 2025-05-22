import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'
import '../src/index.css'

export const getOrigin = (): string => {
  return `${window.location.pathname.replace('/index.html', '').replace('/iframe.html', '').replace(/\/$/, '')}`;
};

// Initialize MSW
initialize({
  serviceWorker: {
    url: `${getOrigin()}/mockServiceWorker.js`,
  }
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  // Provide the MSW addon loader globally
  loaders: [mswLoader],
};

export default preview;