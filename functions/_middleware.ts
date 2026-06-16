// Pages Function middleware
// Brand migration: fiatrails.network -> netta.network
//
// Runs on every request before static serving. If the request host
// is fiatrails.network or www.fiatrails.network, 301 redirect to the
// matching path on netta.network. Otherwise pass through to the
// static site so netta.network keeps serving the Settlement Computer
// marketing site normally.
//
// This is the correct way to do host-based redirects on Cloudflare
// Pages -- _redirects file only supports path-based source patterns.

export const onRequest: PagesFunction = async (context) => {
    const url = new URL(context.request.url);

    if (url.hostname === "fiatrails.network" || url.hostname === "www.fiatrails.network") {
        const target = new URL(url.pathname + url.search, "https://netta.network");
        return Response.redirect(target.toString(), 301);
    }

    return context.next();
};
