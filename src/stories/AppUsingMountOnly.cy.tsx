import { composeStories } from '@storybook/react';

import * as stories from './App.stories';

const { AppStory } = composeStories(stories);

describe('Test on app-level story using MSW and applyRequestHandlers method', () => {
    it('when app is loaded, "Vite + React" header is shown', () => {
        cy.mount(<AppStory />);
        cy.findByRole('heading', { level: 1, name: 'Vite + React' }).should('be.visible');
        cy.findByText('A mocked response!').should('be.visible');
    });
});