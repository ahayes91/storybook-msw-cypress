#!/usr/bin/env bash

detect_cypress_in_yarn_classic() {
  yarn list --depth=0 | grep " cypress@" | cut -d '@' -f2 | head -1
}

export CYPRESS_VERSION=$(detect_cypress_in_yarn_classic)

run_visual_tests() {
    echo "Running visual tests with Cypress version $CYPRESS_VERSION"
    docker compose -f docker-compose.yml up --renew-anon-volumes --exit-code-from cypress
}

run_visual_tests