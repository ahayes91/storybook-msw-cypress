<h1>Repro for Storybook + MSW + Cypress Component Tests + Docker</h1>

<p>This repo was originally raised for this issue: <a href="https://github.com/mswjs/msw-storybook-addon/issues/173">https://github.com/mswjs/msw-storybook-addon/issues/173</a></p>
<p>This branch is also being used for this issue <a href="https://github.com/cypress-io/cypress-docker-images/issues/1363">https://github.com/cypress-io/cypress-docker-images/issues/1363</a></p>

<p><code>main</code> branch of this repo uses Storybook 8 and React 18</p>
<p><code>with-latest-deps</code> branch of this repo uses later dependencies</p>
<p><code>with-docker</code> branch of this repo is based on <code>main</code> and includes a basic docker compose script</p>
<p><code>with-docker-take-2</code> branch of this repo is based on <code>with-docker</code> and updates the docker compose script with a new Dockerfile to run <code>yarn install</code> prior to running Cypress</p>

<h2>Testing instructions</h2>

<p>Install dependencies:</p>
<pre>
  yarn
</pre>


<p>Run Cypress Component tests in Docker:</p>
<pre>
  yarn cy:docker
</pre>


<p>See the two tests pass.</p>