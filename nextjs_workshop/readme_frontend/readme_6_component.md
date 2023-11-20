# Server and Client Components

- Server component is default
- Client component is optional - it is set with "use client"

When to use Server and Client Components:
To simplify the decision between Server and Client Components, we recommend using Server Components (default in the app directory) until you have a use case for a Client Component.

Or

- **Use Server Components When:**
  1. **Data Fetching and SEO**: If the component needs to fetch data that must be rendered server-side for SEO purposes.
  2. **Reduced JavaScript Bundle Size**: To reduce the size of the JavaScript bundle sent to the client, as server components do not send their code to the client.
  3. **Using Server-Side Resources**: For components that need to access server-side resources like databases or internal APIs.

- **Use Client Components When:**
  1. **Interactive Elements**: For components that require immediate interactivity, such as input fields, buttons, or other elements that respond to user actions.
  2. **Client-Specific Functionality**: For features that rely on the client's environment, like accessing the local storage, client-side routing, or animations.
  3. **Real-time Updates**: If the component needs to update in real-time in response to user actions or real-time data feeds.

The choice between server and client components in Next.js is largely about balancing the performance benefits of server-side rendering (like faster initial load times and SEO) with the need for interactivity and dynamic features on the client side.

vdom(Server) -> vdom(Client)

```yaml
-app
--components
```

> **Note that** by default components that create in `/app` is Server components So, to implement `useEffect, useState, onClick...` you need to put `use client` at the top of your `.tsx` file

This is a documentation for server/client components when to use either Client or Server
But in sum:
**data fetching** or something about **api/sensitive info** should use in server

**Lifecycle effects/React Hooks** or **event listeners** should use in cleint

references:<https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components>
