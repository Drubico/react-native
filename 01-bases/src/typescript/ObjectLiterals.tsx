import React from "react";

interface User {
	firstName: string;
	lastName: string;
	age: number;
	address: Address;
}

interface Address {
	country: string;
	city: string;
	street?: string;
}

export const ObjectLiterals = () => {
	const user: User = {
		firstName: "Diego",
		lastName: "Rubi",
		age: 25,
		address: {
			country: "El Salvador",
			city: "Santa Tecla",
		},
	};

	return (
		<>
			<h3>Object Literals</h3>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</>
	);
};
