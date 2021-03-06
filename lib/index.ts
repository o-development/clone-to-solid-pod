import { SolidNodeClient } from "solid-node-client";
import SolidFileClient from "solid-file-client";
import * as core from "@actions/core";

const auth = new SolidNodeClient();
const fileClient = new SolidFileClient(auth);

async function run() {
  try {
    const inputPath = core.getInput("input_path");
    const targetContainer = core.getInput("target_container");
    const refreshToken = core.getInput("refresh_token");
    const clientId = core.getInput("client_id");
    const clientSecret = core.getInput("client_secret");
    const oidcIssuer = core.getInput("oidc_issuer");

    const session = await auth.login({
      clientId,
      clientSecret,
      refreshToken,
      oidcIssuer,
    });

    if (session.isLoggedIn) {
      await fileClient.copyFolder(`file://${inputPath}`, targetContainer);
      console.log("done");
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
run();
