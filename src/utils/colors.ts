type ColorCodeType = `rgba(${number}, ${number}, ${number}, ${number})`;

interface Colors {
	[name: string]: ColorCodeType;
}

export const colors: Colors = {
	//BASIC COLORS
	red: "rgba(212, 44, 31, 1)",

	//BORDERS & LINES
	fieldBorder: "rgba(207, 212, 217, 1)",
	contactCardBorder: "rgba(238, 238, 238, 1)",

	//FONTS
	title: "rgba(34, 37, 41, 1)",
	filterBar: "rgba(76, 76, 76, 1)",
	contactName: "rgba(0, 0, 0, 1)",
	contactDetails: "rgba(143, 143, 143, 1)",
};
