import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

enum AuthStatus {
	"checking" = "checking",
	"authenticated" = "authenticated",
	"unauthenticated" = "unauthenticated",
}

interface User {
	name: string;
	email: string;
}
interface AuthState {
	status: AuthStatus;
	token?: string;
	user?: User;
	isChecking: boolean;
	isAuthenticated: boolean;
	loginWithEmailPassword: (email: string, password: string) => void;
	logout: () => void;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthcontext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [status, setstatus] = useState(AuthStatus.checking);
	const [user, setUser] = useState<User>();

	useEffect(() => {
		setTimeout(() => {
			setstatus(AuthStatus.unauthenticated);
		}, 1500);
	}, []);

	const loginWithEmailPassword = (email: string, password: string) => {
		setUser({
			name: "John Doe",
			email: email,
		});
		setstatus(AuthStatus.authenticated);
	};

	const logout = () => {
		setUser(undefined);
		setstatus(AuthStatus.unauthenticated);
	};

	return (
		<AuthContext.Provider
			value={{
				status: status,
				user: user,
				// Getter
				isChecking: status === AuthStatus.checking,
				isAuthenticated: status === AuthStatus.authenticated,

				// Method
				loginWithEmailPassword,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
