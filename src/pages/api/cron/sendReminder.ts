import { axiosClient } from "@/lib/api";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	try {
		const response = await axiosClient.get("/users/profile/photos");
		res.status(200).json(response.data);
	} catch (error) {
		if (typeof error === "object" && error !== null && "status" in error) {
			res.status(error.status).json({ error: error });
		} else {
			// Handle other types of errors or rethrow them
			throw error;
		}
	}
}
