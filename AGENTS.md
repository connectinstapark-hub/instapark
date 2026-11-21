<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep sitewide tracking in the shared root with one consent controller; this prevents duplicate provider installs across content pages.
- The tracking configuration server function exposes only the validated public GA measurement ID; no API credentials may be returned.
- Keep versioned visitor consent history in first-party browser storage, preserving acceptance on withdrawal; tags must read current purpose-specific permission before sending.
- Keep instaConnect request validation and email preparation in a browser-safe module, shared by its modal and tests; email drafts must not be reported as submitted orders.
- Use the shared site navigation/footer and design-system controls on the instaConnect product route; this preserves sitewide branding and consent behavior.
- Keep the interactive instaConnect walkthrough separate from live vehicle connections; marketing previews must never initiate calls or collect contact details remotely.
- Serve app images from `public/` with plain root paths instead of CDN asset pointers; pointer URLs break outside the Lovable preview.
