import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
const redis = new Redis({
  url: "https://just-cougar-34747.upstash.io",
  token:
    "AYe7ACQgNDYwODBkYzgtOTQ0Ny00YzI5LWIzNDItMDkwYWY3YjBlNWY5MTQyMjdlOTc2NDQ1NGRkNmI5ODVlMDY0NmE2MDhhNGM=",
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(3, "10 s"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});
export async function GET() {
  const identifier = "api";
  const { success } = await ratelimit.limit(identifier);

  if (!success) {
    return Response.json({ message: "Rate limit exceeded" });
  }

  const res = await redis.get("hello");

  return Response.json({ message: res });
}
