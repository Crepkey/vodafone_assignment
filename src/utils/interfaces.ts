interface ContactID {
	name: string;
	value: string;
}

interface ContactName {
	first: string;
	last: string;
	title: string;
}

interface ContactLocation {
	city: string;
	coordinates: { latitude: string; longitude: string };
	country: string;
	postcode: number;
	state: string;
	street: { number: number; name: string };
	timezone: { offset: string; description: string };
}

export interface Contact {
	id: ContactID;
	name: ContactName;
	phone: string;
	location: ContactLocation;
}
