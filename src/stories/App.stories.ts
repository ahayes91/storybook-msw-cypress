import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw'

import { App } from '../App';

const meta = {
  title: 'Example/App',
  render: App,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppStory: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get('https://api.github.com/repos/TanStack/query', () => {
                    return HttpResponse.json(
                        {
                        full_name: "A mocked response!",
                        description: "🤖 Who knows what this would really say?",
                        },
                    )
                }),
            ]
        }
    }
};
