# Clone To Solid Pod Github Action

A github action that will clone a github repo to a Solid Pod

## Instructions

## Integrating a github hook

Create a github hooks file at `/.github/workflows/myfilename.yml`

```
name: pushToPod

on:
  push:
    branches:
      - main

jobs:
  pushToPod:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - uses: o-development/clone-to-solid-pod@master
        with:
          input_path: /home/runner/work/myRepositoryName/myRepositoryName/
          target_container: https://solid.pod/path/to/desired/container
          refresh_token: ${{ secrets.INPUT_REFRESH_TOKEN }}
          client_id: ${{ secrets.INPUT_CLIENT_ID }}
          client_secret: ${{ secrets.INPUT_CLIENT_SECRET }}
          oidc_issuer: ${{ secrets.INPUT_OIDC_ISSUER }}
```

Run `npx @inrupt/generate-oidc-token` to get authentication details for your server.

Include the results in your repository secrets.

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
