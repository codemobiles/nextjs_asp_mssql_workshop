# NextJS Caches

https://nextjs.org/docs/app/building-your-application/caching
https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating

### All Caching Mechanism

- Request Memoization
- Data-Cache
- Full Route Cache
- Router Cache

### Fetch Revalidation

- export const revalidate = 10; // at segment level - apply for all fetches in currect path
- { next: { revalidate: 10 } } // updated every 10 sec.
- { next: { tags: ["timezone"] } } // set tag that can revalidate the fetch
- revalidateTag("timezone"); // on-demand revalidate using tag
- { cache: "no-cache" } // disable cache in individual fetch
