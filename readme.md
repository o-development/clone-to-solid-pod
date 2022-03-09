# Clone To Solid Pod Github Action

A github action that will clone a github repo to a Solid Pod

## Instructions

## Running the program without the github hook
```
git clone git@github.com:o-development/clone-to-solid-pod.git
npm i
```

Run `npx @inrupt/generate-oidc-token` to get authentication details for your server.

Create a file calle `.env` in the root folder and fill it out with the information from the authentication, as well as the desired output location

```
INPUT_REFRESH_TOKEN={insert token}
INPUT_CLIENT_ID={insert client id}
INPUT_CLIENT_SECRET={insert client secret}
INPUT_OIDC_ISSUER=https://solidweb.me

INPUT_TARGET_CONTAINER=https://solidweb.me/jackson/cloned/
```

run `npm run start`

## Running the github hook for development

Install ACT (https://github.com/nektos/act).

Run `act`
