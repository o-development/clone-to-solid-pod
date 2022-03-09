import "dotenv/config";
import { SolidNodeClient } from "solid-node-client";
import SolidFileClient from "solid-file-client";

const auth = new SolidNodeClient();
const fileClient = new SolidFileClient(auth);

console.log(process.env.INPUT_OIDC_ISSUER);

async function run() {
  const inputPath = "/clone-to-solid-pod/testClone/";
  const targetContainer = process.env.INPUT_TARGET_CONTAINER;
  const refreshToken = process.env.INPUT_REFRESH_TOKEN;
  const clientId = process.env.INPUT_CLIENT_ID;
  const clientSecret = process.env.INPUT_CLIENT_SECRET;
  const oidcIssuer = process.env.INPUT_OIDC_ISSUER;

  const session = await auth.login({
    clientId,
    clientSecret,
    refreshToken,
    oidcIssuer,
  });

  if (session.isLoggedIn) {
    await fileClient.copyFolder(`file://${inputPath}`, targetContainer);
  }
}
run();
