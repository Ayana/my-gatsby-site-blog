module.exports = {
	siteMetadata: {
		title: `Ayaos`,
		author: `Ayana`,
		description: `Ayaos playground - about web development and fun projects`,
		siteUrl: `https://ayaos.work/`,
		image: `/images/img_ogp.jpg`, // have to build after putting images
		social: {
			twitter: `ayanaosawa`,
			instagram: `ayaos_eats`,
			linkedin: `ayana-osawa-22b623b`,
			github: `Ayana`,
		},
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/assets/`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					`gatsby-remark-smartypants`,
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-PQHKHDP',
				includeInDevelopment: false,
				defaultDataLayer: { platform: 'gatsby' },
			},
		},
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Ayaos Work`,
				short_name: `Ayaos`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#333`,
				display: `minimal-ui`,
				icon: `src/assets/images/ayaos-icon.png`,
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: `gatsby-plugin-styled-components`,
		},
		{
			resolve: `gatsby-plugin-transition-link`,
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-instagram`,
			options: {
				username: `misawayanohanashi`,
			},
		},
	],
}
