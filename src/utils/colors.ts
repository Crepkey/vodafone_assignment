type ColorCodeType = `rgba(${number}, ${number}, ${number}, ${number})`;

interface Colors {
	[name: string]: ColorCodeType;
}

export const colors: Colors = {
	//BORDERS
	fieldBorder: "rgba(207, 212, 217, 1)",
};
