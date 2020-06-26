const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'NorCal Travels',
	dest: './public',
	themeConfig: {
		// repo: 'https://github.com/kfung21/CivilCalifornia.git',
		// repoLabel: 'Repo',
		// editLinks: true,
		// editLinkText: 'Found a bug? Help me improve this page!',
		search: true,
    	searchMaxSuggestions: 10,
		sidebar: false,
		sidebarDepth: 4,
		nav: [
			{text: 'Blog', link: '/blog/' },
			{text: 'Tags', link: '/tags/'},
			{text: 'Archive', link: '/archive/'},
			{text: 'About', link: '/about/'}
		],
		logo: 'https://drive.google.com/uc?export=view&id=13SrSX2X-3bJVPQfJ1Jws2tOpZJM_xC1D',
		docsDir: 'src',
		pageSize: 5,
		startPage: 0
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: 'UA-165628907-2' // UA-00000000-0
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://vuepressblog.org',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-reading-time',
		'vuepress-plugin-janitor',
		'fulltext-search',
		'@vssue/vuepress-plugin-vssue',{
			// set `platform` rather than `api`
			platform: 'github',
	  
			// all other options of Vssue are allowed
			owner: 'Kevin',
			repo: 'https://github.com/kfung21/CivilCalifornia.git',
			clientId: 'c5d51bac395f5b91bbcb',
			clientSecret: '6047858a84980eb1bf103fa3330d3121a70d7100',
		},
	],
	head: [
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon.png' }],
		['link', { rel: 'icon', sizes: '32x32', href: '/cc_logo.png' }],
		['link', { rel: 'icon', sizes: '16x16', href: '/cc_logo.png' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
		['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
		['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
}
