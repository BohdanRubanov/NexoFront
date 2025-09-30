import { Button } from "@/shared/ui";

export function SubmitButton(title: string) {
	return (
		<Button type="submit" color="primary" size="lg" title={title} />
	);
}
