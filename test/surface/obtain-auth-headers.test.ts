import { getAuthFetcher, getAuthHeaders } from "solid-auth-fetcher";
test("can obtain auth headers", async () => {
  const oidcIssuer = process.env.SERVER_ROOT;
  const cookie = process.env.COOKIE || "";
  const appOrigin = "https://tester";
  const authFetcher = await getAuthFetcher(oidcIssuer, cookie, appOrigin);
  const authHeaders = await getAuthHeaders(
    `${oidcIssuer}/example/url.txt`,
    "GET",
    authFetcher
  );
  expect(authHeaders.Authorization.length > 0).toBeTruthy();
  expect(authHeaders.DPop.length > 0).toBeTruthy();
});
