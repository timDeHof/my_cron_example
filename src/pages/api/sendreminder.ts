import { axiosClient } from "@/lib/api";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	try {
		// const response = await axiosClient.get("/users/profile/photos");

		// res.status(200).json(response.data);
		const user = await fetch("https://dummyjson.com/users/1");
		res.status(200).json({ user });
	} catch (error) {
		if (typeof error === "object" && error !== null && "status" in error) {
			res.status(500).json({ error: error });
		} else {
			// Handle other types of errors or rethrow them
			throw error;
		}
	}
}
