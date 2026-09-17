# Quark-J8 Documentation

Documentation for [Quark-J8](https://github.com/Vaelow233/Quark-J8), built with Astro and Starlight.

## License and attribution

The documentation is adapted from the [Quark documentation](https://bxteam.org/docs/quark) in [BX-Team/code](https://github.com/BX-Team/code).

- Original material: Copyright © 2022-2026 BX Team. Existing upstream notices are retained.
- Modifications: Copyright © 2026 Vaelow233.
- This documentation and the original site contributions are licensed under **AGPL-3.0-or-later**. See [LICENSE](LICENSE) for the full terms.

## Modifications

- 2026-09-17 (by *Vaelow233*): adapted the documentation for Quark-J8, updated Java requirements and Maven coordinates, adjusted platform coverage, and converted the content to Astro/Starlight. This is an independent adaptation, not an official BX Team publication.

## Build

With Node.js and pnpm installed:

```sh
pnpm install --frozen-lockfile
pnpm build
```

The generated site is written to `dist/`. Use `pnpm dev` for local development or `pnpm preview` to preview the built site.
