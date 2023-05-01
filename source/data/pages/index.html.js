export default ({ getImages }) => ({
	pageHeading: 'Промо',
	promoItems: [
		{
			author: 'Niek Bove',
			datetime: {
				date: '2018-04-08',
				day: '8,',
				month: 'April',
				year: 2018
			},
			description: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
			heading: `Eat Right For Your Exercise Regime`,
			mark: 'Lifestyle',
			views: '3K Views'
		},
		{
			author: 'Niek Bove',
			datetime: {
				date: '2018-04-08',
				day: '8,',
				month: 'April',
				year: 2018
			},
			description: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
			heading: `The Look: Perfect Balance`,
			mark: 'Lifestyle',
			views: '3K Views'
		},
		{
			author: 'Niek Bove',
			datetime: {
				date: '2018-04-08',
				day: '8,',
				month: 'April',
				year: 2018
			},
			description: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
			heading: `Fun Things to Do in Rome`,
			mark: 'Style',
			views: '3K Views'
		},
		{
			author: 'Niek Bove',
			datetime: {
				date: '2018-04-08',
				day: '8,',
				month: 'April',
				year: 2018
			},
			description: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
			heading: `24 Colorful Ceilings That Add Unexpected Contrast to Any Room`,
			mark: 'Style',
			views: '3K Views'
		},
		{
			author: 'Niek Bove',
			datetime: {
				date: '2018-04-08',
				day: '8,',
				month: 'April',
				year: 2018
			},
			description: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
			heading: `9 New Songs to Heat Up Your Fall Playlist`,
			mark: 'Lifestyle',
			views: '3K Views'
		},
		{
			author: 'Niek Bove',
			datetime: {
				date: '2018-04-08',
				day: '8,',
				month: 'April',
				year: 2018
			},
			description: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
			heading: `What You Need on Your Bedside Table`,
			mark: 'Events',
			views: '3K Views'
		},
		{
			author: 'Niek Bove',
			datetime: {
				date: '2018-04-08',
				day: '8,',
				month: 'April',
				year: 2018
			},
			description: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
			heading: `When Two Wheels Are Better Than Four`,
			mark: 'Travel',
			views: '3K Views'
		},
		{
			author: 'Niek Bove',
			datetime: {
				date: '2018-04-08',
				day: 8,
				month: 'April',
				year: 2018
			},
			description: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
			heading: `26 Living Room Ideas from the Homes of Top Designers`,
			mark: 'Travel',
			views: '3K Views'
		},
		{
			author: 'Niek Bove',
			datetime: {
				date: '2018-04-08',
				day: 8,
				month: 'April',
				year: 2018
			},
			description: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
			heading: `What Makes Your City’s Style Unique`,
			mark: 'Music',
			views: '3K Views'
		}
	].map((item, i) => ({
		...item,
		image: getImages(`foto-${i}`, { alt: `${item.heading}.` }, false, true)
	}))
});
