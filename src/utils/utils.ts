import { ContactFormFields } from "./interfaces";

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

export const emptyContact: ContactFormFields = {
	firstName: "",
	lastName: "",
	phone: "",
	email: "",
	address: "",
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
