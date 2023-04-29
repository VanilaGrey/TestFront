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
			webp2x: `images/${filename}@2x.webp`
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
			links: [
				{
					title: 'Demos Header',
					url: '#!'
				},
				{
					title: 'Demos Layout',
					url: '#!'
				},
				{
					title: 'Share Buttons',
					url: '#!'
				},
				{
					title: 'Gallery Demos',
					url: '#!'
				},
				{
					title: 'Video Demos',
					url: '#!'
				}
			],
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
			links: [
				{
					title: 'Features Header',
					url: '#!'
				},
				{
					title: 'Features Layout',
					url: '#!'
				},
				{
					title: 'Share Buttons',
					url: '#!'
				},
				{
					title: 'Gallery Features',
					url: '#!'
				},
				{
					title: 'Video Features',
					url: '#!'
				}
			],
			title: 'Features',
			url: '#!'
		},
		{
			links: [
				{
					title: 'Categories Header',
					url: '#!'
				},
				{
					title: 'Categories Layout',
					url: '#!'
				},
				{
					title: 'Share Buttons',
					url: '#!'
				},
				{
					title: 'Gallery Categories',
					url: '#!'
				},
				{
					title: 'Video Categories',
					url: '#!'
				}
			],
			title: 'Categories',
			url: '#!'
		},
		{
			links: [
				{
					title: 'Shop Header',
					url: '#!'
				},
				{
					title: 'Shop Layout',
					url: '#!'
				},
				{
					title: 'Share Buttons',
					url: '#!'
				},
				{
					title: 'Gallery Shop',
					url: '#!'
				},
				{
					title: 'Video Shop',
					url: '#!'
				}
			],
			title: 'Shop',
			url: '#!'
		},
		{
			title: 'Buy Now',
			url: '#!'
		}
	],

	pixelperfect: JSON.stringify({ breakpoints: [375, 1920], ext: 'webp' }),
	projectName: 'Test Front'
});
