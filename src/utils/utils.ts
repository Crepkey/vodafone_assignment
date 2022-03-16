/* Libraries */
import Joi from "joi";
import isEmpty from "lodash/isEmpty";
import set from "lodash/set";

/* Interfaces */
import { Contact, ContactErrors } from "./interfaces";

/* ---------- STYLE ---------- */

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

/* ---------- GENERATE ---------- */

export const emptyContact: Contact = {
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
	picture: { large: "", medium: "", thumbnail: "" },
};

/* 
	I used this closure to store the previously generated ID (names, values)
	so that I cannot distribute such an ID which is already used by a contact
*/
function generateIDClosure() {
	const generatedNames: string[] = [];
	const generatedValues: string[] = [];

	function createID(genType: "name" | "value") {
		let ID: string = "";

		if (genType === "name") {
			do {
				let counter: number = 4;
				while (counter > 0) {
					const captitalLetter: string = String.fromCharCode(65 + Math.floor(Math.random() * 26));
					ID += captitalLetter;
					counter--;
				}
			} while (generatedNames.includes(ID));
			generatedNames.push(ID);
		}

		if (genType === "value") {
			do {
				ID = Date.now() + Math.random().toString().replace(".", "");
			} while (generatedValues.includes(ID));
			generatedNames.push(ID);
		}
		return ID;
	}
	return createID;
}

export const generateID = generateIDClosure();

/* ---------- VALIDATION ---------- */

export const validationSchema = {
	name: {
		first: Joi.string().required().label("First name"),

		last: Joi.string().required().label("Last name"),
	},
	/* TODO: Accept -, () */
	phone: Joi.string()
		.trim()
		.regex(/^[0-9]{7,20}$/)
		.required()
		.messages({ "string.pattern.base": "The phone number format is: 06701234567" })
		.label("Phone number"),
	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: false } })
		.required()
		.label("E-mail"),
	location: { street: { name: Joi.string().min(4).max(60).required().label("Location") } },
};

export function validateForm(contact: Contact, setErrors: (value: React.SetStateAction<ContactErrors>) => void) {
	const newErrors = {};
	const options: Joi.ValidationOptions = { abortEarly: false };
	const { error }: Joi.ValidationResult<any> = Joi.object(validationSchema).validate(contact, options);

	if (error) {
		const foundErrors: Joi.ValidationErrorItem[] = error.details;
		for (const error of foundErrors) {
			if (error.type === "object.unknown") continue;
			set(newErrors, error.path, error.message);
		}
	}

	setErrors(newErrors);
	return isEmpty(newErrors) ? false : true;
}
