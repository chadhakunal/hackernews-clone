# Hacker News Clone
Hacker News Clone developed using React JS

API: https://hn.algolia.com/api

Deployed URL: https://kunalchadha-hackernewsclone.netlify.app/

## How to Run Locally
1. `npm install`
2. `npm run tests`
3. `npm start`

## Build and Deployment
1. `npm run tests`
2. `npm run build`
3. `netlify deploy`

## Directory Structure
```
.
├── jsconfig.json
├── package.json
├── package-lock.json
├── public
│   ├── index.html
│   ├── logo.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.js
    ├── assets
    │   └── img
    │       └── logo.png
    ├── components
    │   ├── Navbar.js
    │   └── Story.js
    ├── constants
    │   └── index.js
    ├── containers
    │   └── StoriesContainer.js
    ├── index.js
    ├── layouts
    │   └── layout.js
    ├── services
    │   └── hackernews_api.js
    ├── styles
    │   ├── globalStyles.js
    │   ├── navbar.js
    │   └── story.js
    ├── __tests__
    │   ├── App.spec.js
    │   ├── hackernews_api.spec.js
    │   ├── StoriesContainer.spec.js
    │   └── Story.spec.js
    └── utils
        └── mapDaysAgo.js

```
