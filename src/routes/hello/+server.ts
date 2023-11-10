import type { RequestHandler } from "./$types";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "https://just-cougar-34747.upstash.io",
  token:
    "AYe7ACQgNDYwODBkYzgtOTQ0Ny00YzI5LWIzNDItMDkwYWY3YjBlNWY5MTQyMjdlOTc2NDQ1NGRkNmI5ODVlMDY0NmE2MDhhNGM=",
});
export const GET = (async ({ url }) => {
  const res = await redis.get("hello");
  return Response.json({ body: res });
}) satisfies RequestHandler;
