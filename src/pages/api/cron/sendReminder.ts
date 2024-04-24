import type { NextApiRequest, NextApiResponse } from "next";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
	try {
		const response = await fetch(
			`http://localhost:5000/api/v1/users/profile/photos`,
		);

		if (!response.ok) {
			throw new Error("Failed to fetch users data");
		}
		const usersData = await response.json();
		res.status(200).json({ usersData });
	} catch (error) {
		if (typeof error === "object" && error !== null && "status" in error) {
			res.status(500).json({ error: error });
		} else {
			// Handle other types of errors or rethrow them
			throw error;
		}
	}
}
