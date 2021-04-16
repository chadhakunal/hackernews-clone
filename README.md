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
.<br>
├── jsconfig.json <br>
├── package.json <br>
├── package-lock.json<br>
├── public<br>
│   ├── index.html<br>
│   ├── logo.png<br>
│   ├── manifest.json<br>
│   └── robots.txt<br>
├── README.md<br>
└── src<br>
    ├── App.js<br>
    ├── assets<br>
    │   └── img<br>
    │       └── logo.png<br>
    ├── components<br>
    │   ├── Navbar.js<br>
    │   └── Story.js<br>
    ├── constants<br>
    │   └── index.js<br>
    ├── containers<br>
    │   └── StoriesContainer.js<br>
    ├── index.js<br>
    ├── layouts<br>
    │   └── layout.js<br>
    ├── services<br>
    │   └── hackernews_api.js<br>
    ├── styles<br>
    │   ├── globalStyles.js<br>
    │   ├── navbar.js<br>
    │   └── story.js<br>
    ├── __tests__<br>
    │   ├── App.spec.js<br>
    │   ├── hackernews_api.spec.js<br>
    │   ├── StoriesContainer.spec.js<br>
    │   └── Story.spec.js<br>
    └── utils<br>
        └── mapDaysAgo.js<br>
