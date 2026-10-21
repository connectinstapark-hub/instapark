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
