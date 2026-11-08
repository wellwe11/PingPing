# Backend
This section outlines the backend server architecture, structural organization, and foundational setup for PulsePing using Node.js, Express, TypeScript, and PostgreSQL.

### src/

#### server.ts/
Main entry point.

#### config/
Configuration files (databse connections and environment variables).

#### controllers/
Logic functions that handle HTTP reqs/resps.

#### routes/
API-endpoints & maps them to their respective controllers.

#### services/
Core operations, database queries and external API calls.

#### utils/
Reusable helper functions and shared utilities (e.g. error handlers, loggers etc.).


### tests/
Test files and test suites, using Vitest.