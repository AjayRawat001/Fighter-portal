module.exports = {
  siteMetadata: {
    title: `WelCome to News Portal`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-starter-default',
				short_name: 'formax',
				start_url: '/',
				background_color: '#1361bb',
				theme_color: '#1361bb',
				display: 'minimal-ui',
				icon: 'src/assets/images/website-icon.png' // This path is relative to the root of the site.
			}
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-offline'
	]
};
