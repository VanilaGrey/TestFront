export default ({ error, pageName, status }) => ({
	appData: {
		page: {
			error,
			pageName,
			status
		}
	},
	description: 'Test Front',
	getImages(filename, additions = {}, useTablet = true, useMobile = true) {
		const image = Object.assign(additions, {
		  default: `images/${filename}.jpg`,
		  default2x: `images/${filename}@2x.jpg`,
		  webp: `images/${filename}.webp`,
		  webp2x: `images/${filename}@2x.webp`,
		});

		if (useTablet) {
		  image.webpTablet = `images/${filename}-tablet.webp`;
		  image.webpTablet2x = `images/${filename}-tablet@2x.webp`;
		}

		if (useMobile) {
		  image.webpMobile = `images/${filename}-mobile.webp`;
		  image.webpMobile2x = `images/${filename}-mobile@2x.webp`;
		}

		return image;
	  },

	navLinks: [
		{
			title: 'Demos',
			url: '#!'
		},
		{
			links: [
				{
					title: 'Post Header',
					url: '#!'
				},
				{
					title: 'Post Layout',
					url: '#!'
				},
				{
					title: 'Share Buttons',
					url: '#!'
				},
				{
					title: 'Gallery Post',
					url: '#!'
				},
				{
					title: 'Video Post',
					url: '#!'
				}
			],
			title: 'Post',
			url: '#!'
		},
		{
			title: 'Features',
			url: '#!'
		},
		{
			title: 'Categories',
			url: '#!'
		},
		{
			title: 'Shop',
			url: '#!'
		},
		{
			title: 'Buy Now',
			url: '#!'
		}
	],

	pixelperfect: JSON.stringify({ breakpoints: [320, 1200], ext: 'webp' }),
	projectName: 'Test Front',
});
