import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  // if there's no found page redirect to /404 route
  if (response.status === 404) {
    return context.redirect("/404")
  }

  // otherwise we are in the happy path
  return response;
})