# Architecture

## Backend

- `src/config` for environment handling
- `src/routes` for API route declarations
- `src/controllers` for request-level orchestration
- `src/data` for seed content payload
- `src/middleware` for global error/not-found handling
- `src/utils` for shared utilities

## Frontend

- `src/api` for fetch clients
- `src/hooks` for data acquisition logic
- `src/components` for reusable UI blocks
- `src/sections` for top-level page composition

This keeps concerns separated and allows replacing static API data with a database layer without refactoring the UI.
