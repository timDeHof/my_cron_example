import type { NextApiRequest, NextApiResponse } from "next";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
	try {
		const response = await fetch(
			`http://localhost:5000/api/v1/users/profile/photos`,
		);
		res.status(200).json(response);
	} catch (error) {
		if (typeof error === "object" && error !== null && "status" in error) {
			res.status(500).json({ error: error });
		} else {
			// Handle other types of errors or rethrow them
			throw error;
		}
	}
}
