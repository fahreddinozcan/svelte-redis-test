// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Platform {
      env: {
        COUNTER: DurableObjectNamespace;
        UPSTASH_REDIS_REST_URL: string;
        UPSTASH_REDIS_REST_TOKEN: string;
      };
      context: {
        waitUntil(promise: Promise<any>): void;
      };
      caches: CacheStorage & { default: Cache };
    }
  }
}

export {};
