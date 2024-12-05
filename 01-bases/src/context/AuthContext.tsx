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
}

export const AuthContext = createContext({} as AuthState);

export const useAuthcontext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [status, setstatus] = useState(AuthStatus.checking);

	useEffect(() => {
		setTimeout(() => {
			setstatus(AuthStatus.unauthenticated);
		}, 1500);
	}, []);

	return (
		<AuthContext.Provider
			value={{
				status: status,

				// Getter
				isChecking: status === AuthStatus.checking,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
