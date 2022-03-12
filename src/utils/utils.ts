export const breakePoints = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	smallCompactView: "860px",
	largeCompactView: "950px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};

export const emptyContact = {
	id: { name: "", value: "" },
	name: { first: "", last: "", title: "" },
	phone: "",
	email: "",
	location: {
		city: "",
		coordinates: { latitude: "", longitude: "" },
		country: "",
		postcode: 0,
		state: "",
		street: { number: 0, name: "" },
		timezone: { offset: "", description: "" },
	},
};
