import { useAuthcontext } from "../context/AuthContext";

export const LoginPage = () => {
	const { isChecking, isAuthenticated, loginWithEmailPassword, logout, user } = useAuthcontext();

	if (isChecking) {
		return (
			<div>
				<h3>Login</h3>
				<span>Checking...</span>
			</div>
		);
	}

	return (
		<>
			{isAuthenticated ? (
				<>
					<h3>Welcome</h3>
					<pre>{JSON.stringify(user, null, 2)}</pre>
					<button onClick={logout} className="bg-blue-500 p-2 text-white rounded-xl mt-2">
						Logout
					</button>
				</>
			) : (
				<>
					<h3>Login</h3>

					<button onClick={() => loginWithEmailPassword("aa@aa.com", "aaa")} className="bg-blue-500 p-2 text-white rounded-xl mt-2">
						Login
					</button>
				</>
			)}
		</>
	);
};
