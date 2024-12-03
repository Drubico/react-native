const addTwoNumbers = (a: number, b: number): number => {
	return a + b;
};

export const BasicFuncions = () => {
	return (
		<>
			<h3>Funciones Basicas</h3>
			<span>El resultado de la suma es: {addTwoNumbers(5, 3)}</span>
		</>
	);
};
