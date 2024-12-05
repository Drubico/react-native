import React from "react";

export const UserRow = () => {
	return (
		<tr className="p-2">
			<td>
				<img src="https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw" alt="avatar" className="w-10 h-10 rounded-full" />
			</td>
			<td>
				{"Fernando"} {"Herrera"}
			</td>
			<td>{"fernando@google.com"}</td>
		</tr>
	);
};
