import { Button } from "@/shared/ui/button";

export function SubmitButton({ children }: { children: React.ReactNode }) {
	return (
		<Button height={52} type="submit" width={399}>
			{children}
		</Button>
	);
}
