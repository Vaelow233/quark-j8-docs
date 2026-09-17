// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightThemeNova()
			],
			title: 'Quark-J8 Docs',
			social: [{ icon: 'github', label: 'Documentation source', href: 'https://github.com/Vaelow233/quark-j8-docs' }],
			sidebar: [
				{ label: 'License & attribution', slug: 'legal' },
				{ label: 'Documentation source', link: 'https://github.com/Vaelow233/quark-j8-docs' },
				{
					label: 'What is Quark-J8?',
					slug: 'description'
				},
				{
					label: 'Getting Started',
					items: [
						{ label: 'Supported Platforms', slug: 'getting-started/platforms' },
						{ label: 'Installing Quark-J8', slug: 'getting-started/installation' },
						{ label: 'Examples', slug: 'getting-started/examples' }
					],
				},
				{
					label: 'Advanced Usage',
					items: [
						{ label: 'Dependency Management', slug: 'advanced-usage/dependency-management' },
						{ label: 'Isolated Class Loaders', slug: 'advanced-usage/isolated-classloaders' },
						{ label: 'Package Relocation', slug: 'advanced-usage/package-relocation' },
						{ label: 'Repository Configuration', slug: 'advanced-usage/repository-configuration' }
					]
				}
			],
		}),
	],
});
