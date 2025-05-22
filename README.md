<h1>Repro for Storybook + MSW + Cypress Component Tests</h1>

<h2>Testing instructions</h2>

<p>Install dependencies:</p>
<pre>
  yarn
</pre>


<p>Run Cypress Component tests:</p>
<pre>
  yarn cy:open
</pre>


<p>See <pre>src/stories/AppUsingApplyMethod.cy.tsx</pre> will pass and DOM shows the app appear once.</p>

<img src="./docs/static/test_passes.png" />

<p>See <pre>src/stories/AppUsingRunMethod.cy.tsx</pre> will fail, DOM shows the app appearing twice.</p>

<img src="./docs/static/test_fails.png" />