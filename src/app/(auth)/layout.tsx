import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex items-center justify-center">
			<Image
				src="/images/auth-back.png"
				width={500}
				height={500}
				alt="back"
			/>
			{children}
		</div>
	);
}
