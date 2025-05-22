/* eslint-disable @typescript-eslint/no-namespace */

// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import '@testing-library/cypress/add-commands';
import {setProjectAnnotations} from '@storybook/react';
import {configure} from '@testing-library/cypress';
import {mount} from 'cypress/react';

import * as previewAnnotations from '../../.storybook/preview';

// This is starting up MSW from msw-storybook-addon
setProjectAnnotations(previewAnnotations);

configure({
  asyncUtilTimeout: 5000,
});

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);
