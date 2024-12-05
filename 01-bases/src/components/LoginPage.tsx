import { useAuthcontext } from "../context/AuthContext";

export const LoginPage = () => {
	const { hola } = useAuthcontext();

	return (
		<div>
			<h3>Login</h3>
			<span>{hola}</span>
		</div>
	);
};
