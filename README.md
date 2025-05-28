<h1>Repro for Storybook + MSW + Cypress Component Tests + Docker</h1>

<p>This repo was originally raised for this issue: <a href="https://github.com/mswjs/msw-storybook-addon/issues/173">https://github.com/mswjs/msw-storybook-addon/issues/173</a></p>
<p>This branch is also showing the error when using <code>cypress/included</code> Docker image to try and run component tests.</p>

<p><code>main</code> branch of this repo uses Storybook 8 and React 18</p>
<p><code>with-latest-deps</code> branch of this repo uses later dependencies</p>
<p><code>with-docker</code> branch of this repo is based on <code>main</code> and includes a basic docker compose script</p>

<h2>Testing instructions</h2>

<p>Install dependencies:</p>
<pre>
  yarn
</pre>


<p>Run Cypress Component tests in Docker:</p>
<pre>
  yarn cy:docker
</pre>


<p>See rollup error thrown as below in the terminal:</p>
<pre>
aislinn.hayes@AC02FG7F1MD6N storybook-msw-cypress % yarn cy:docker
yarn run v1.22.22
$ ./scripts/runDocker.sh
Running visual tests with Cypress version 14.4.0
[+] Running 1/1
 ✔ Container docker_cypress  Recreated                                                                                                   0.1s 
Attaching to docker_cypress
docker_cypress  | [STARTED] Task without title.
docker_cypress  | [SUCCESS] Task without title.
docker_cypress  | 
docker_cypress  | DevTools listening on ws://127.0.0.1:40953/devtools/browser/13738001-6a3a-4ede-99e4-44085240b0cf
docker_cypress  | Missing baseUrl in compilerOptions. tsconfig-paths will be skipped
docker_cypress  | Your configFile is invalid: /cypress/cypress.config.ts
docker_cypress  | 
docker_cypress  | It threw an error when required, check the stack trace below:
docker_cypress  | 
docker_cypress  | Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
docker_cypress  |     at requireWithFriendlyError (/cypress/node_modules/rollup/dist/native.js:64:9)
docker_cypress  |     at Object.<anonymous> (/cypress/node_modules/rollup/dist/native.js:73:76)
docker_cypress  |     at Module._compile (node:internal/modules/cjs/loader:1730:14)
docker_cypress  |     at node:internal/modules/cjs/loader:1895:10
docker_cypress  |     at Object.require.extensions.<computed> [as .js] (/root/.cache/Cypress/14.4.0/Cypress/resources/app/node_modules/ts-node/dist/index.js:848:20)
docker_cypress  |     at Module.load (node:internal/modules/cjs/loader:1465:32)
docker_cypress  |     at Function._load (node:internal/modules/cjs/loader:1282:12)
docker_cypress  |     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
docker_cypress  |     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
docker_cypress  |     at node:internal/modules/esm/translators:233:5
docker_cypress  |     at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:200:7)
docker_cypress  |     at ModuleJobSync.runSync (node:internal/modules/esm/module_job:400:35)
docker_cypress  |     at ModuleLoader.importSyncForRequire (node:internal/modules/esm/loader:427:47)
docker_cypress  |     at loadESMFromCJS (node:internal/modules/cjs/loader:1561:24)
docker_cypress  |     at Module._compile (node:internal/modules/cjs/loader:1712:5)
docker_cypress  |     at node:internal/modules/cjs/loader:1895:10
docker_cypress  |     at Object.require.extensions.<computed> [as .js] (/root/.cache/Cypress/14.4.0/Cypress/resources/app/node_modules/ts-node/dist/index.js:848:20)
docker_cypress  |     at Module.load (node:internal/modules/cjs/loader:1465:32)
docker_cypress  |     at Function._load (node:internal/modules/cjs/loader:1282:12)
docker_cypress  |     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
docker_cypress  |     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
docker_cypress  |     at Module.require (node:internal/modules/cjs/loader:1487:12)
docker_cypress exited with code 1
Aborting on container exit...
[+] Stopping 1/1 Desktop   o View Config   w Enable Watch
 ✔ Container docker_cypress  Stopped                                                                                                     0.0s 

error Command failed with exit code 1.
</pre>