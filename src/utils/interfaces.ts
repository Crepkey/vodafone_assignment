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

interface ContactPicture {
	large: string;
	medium: string;
	thumbnail: string;
}

export interface Contact {
	id: ContactID;
	name: ContactName;
	phone: string;
	email: string;
	location: ContactLocation;
	picture: ContactPicture;
}
export interface ContactErrors {
	firstName?: string;
	lastName?: string;
	phone?: string;
	email?: string;
	address?: string;
}

export interface EmptyContact {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	address: string;
}
