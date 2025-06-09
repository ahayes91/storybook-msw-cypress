import { composeStories } from '@storybook/react';

import * as stories from './App.stories';

const { AppStory } = composeStories(stories);

describe('Test on app-level story using MSW and run method', () => {
    it('when app is loaded, "Vite + React" header is shown', () => {
        void AppStory.run(); // if we use this, then the DOM gets mounted twice. once in data-cy-root and maybe another below by decorators?
        cy.mount(<AppStory />);
        cy.findByRole('heading', { level: 1, name: 'Vite + React' }).should('be.visible');
        cy.findByText('A mocked response!').should('be.visible');
    });
});