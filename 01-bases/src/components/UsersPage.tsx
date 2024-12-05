import { UserRow } from "./UserRow";

export const UsersPage = () => {
	return (
		<>
			<div>UsersPage</div>

			<table className="w-[500px] bg-black text-white rounded-xl">
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>

				<tbody>
					<UserRow />
					<UserRow />
					<UserRow />
				</tbody>
			</table>

			<div className="flex justify-between w-[500px] mt-2">
				<button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Previous</button>
				<button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Next</button>
			</div>
		</>
	);
};
