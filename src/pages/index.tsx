import { Inter } from "next/font/google";
import { axiosClient } from "../lib/api";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
			<div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
				<h1>my cron example(work in progress)</h1>
				<p>{process.env.NEXT_PUBLIC_API_URL}</p>
			</div>
		</main>
	);
}
