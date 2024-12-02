export const BasicTypes = () => {
	const name: string = "Drubi";
	const age: number = 38;
	const isActive: boolean = false;

	const powers: string[] = ["Velocidad", "Volar", "Respirar en el agua"];

	return (
		<>
			<h3>Tipos Basicos</h3>
			{name}
			{name} - {age} - {isActive ? "Activo" : "Inactivo"}
			{powers.join(", ")}
		</>
	);
};
