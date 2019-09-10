# Application Environment

## The Problem

Have been creating several applications from scratch (mostly with the JS stack, that means NodeJS for backend, maybe an API, and some JS framework for the client side), and even though all is very simple to prepare I feel I loose some minutes doing it, or even worse, forgetting something!

## The Solution

This repo serves as a placeholder for a very few basic files and configurations for a very simple "modern application" starter folder!
The repo is full agnostic, no frameworks, although some options are focus on NodeJS, for now!

## Requirements

- [VS Code](https://code.visualstudio.com/)
- [NodeJS](https://nodejs.org/)
- [Git](https://git-scm.com/)

I believe some options are need on your vscode, just to make things work at 'the push of a button', or a combination of two buttons (like ctrl+s).

```json
// settings.json > vscode options
"editor.formatOnSave": true,
// ups, thought that I had more options, but...
```

## What does it contains?

`.editorconfig` - Defines indents sizes and styles and some other general environment options.

`.prettierrc` - Defines some of my currently preferable styling options, like single quotes, no semi colons, among others.

`.gitignore` - With the most basic 'node_modules' folder, if you prefer to have a 'bigger' gitignore boilerplate I would suggest [gitignore.io](https://www.gitignore.io/).

`.eslintrc` - More focus for NodeJS, so 'comonjs' is active.

All files can, and should be reviewed for each project case! But at least the files are already there!

## How to use?

Just clone the repo `git clone https://github.com/socarlosb/app-env.git your-app-folder` and start your project!

## Remind Myself

- [ ] ? Add `README.md` (with structure!)
- [ ] ? Add `CHANGELOG.md`
- [ ] ? Add `Dockerfile`
- [ ] ? Add `docker-compose.yml`
- [ ] ? Add `.dockerignore`
- [ ] ? Add `package.json`
- [ ] ? Add `.gitlab-ci.yml`
- [ ] ? Add `.env`
- [ ] ? Add `nodemon.json`
- [ ] ? Add `exoframe.json`
