import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 600,
  site: "moana-store",
  domains: ["moana-store.deco.site"],
});