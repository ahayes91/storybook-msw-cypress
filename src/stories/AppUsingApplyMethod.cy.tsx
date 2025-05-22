import { composeStories } from '@storybook/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './App.stories';

const { AppStory } = composeStories(stories);

describe('Test on app-level story using MSW and applyRequestHandlers method', () => {
    it('when app is loaded, "Vite + React" header is shown', () => {
        // Using this method should allow you to apply more request handlers, to override the default ones from the story
        applyRequestHandlers(AppStory.parameters.msw);
        cy.mount(<AppStory />);
        cy.findByRole('heading', { level: 1, name: 'Vite + React' }).should('be.visible');
    });
});