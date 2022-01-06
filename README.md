## NOCledgebase

A documentation plattform allowing to quickly decipher technical information in a GSM-R environment.

The project is structured as follows:

- `docs/`: documentation about building, deployment, data structure, etc
- `config/`: configuration for building with webpack
- `dist/`: static files to be distributed with the application
- `src/`: the main source code
  - `index.{html,js}`: entry point. the index.html is templated by webpack
  - `components/`: individual application components
    - `App.jsx`: Main application component
    - `LoadingScreen.jsx`: loading screen, displays while data is being loaded and parsed
    - `css/`: SCSS style files for top-level components
    - `search/`: left column of the application, containing a search function
    - `hierarchy/`: middle column, containing a tree view of the network as well as schematic views for certain components
    - `detail/`: right pane, showing off details about the selected component

### Documentation
The code is documented wherever non-trivial operations are implemented. Furthermore, building, deploying as well as the data structure are documented in `/docs`.
