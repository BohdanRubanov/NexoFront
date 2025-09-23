import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/css";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			variant: {
				default: "bg-brand text-white rounded-xl",
			},
			weight: {
				medium: "font-medium",
			},
			fontSize: {
				big: 16,
				small: 14,
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);
interface ButtonProps
	extends React.ComponentProps<"button">,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	width?: string | number;
	height?: string | number;
}
function Button({
	className,
	variant = "default",
	weight = "medium",
	width,
	height,
	asChild = false,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, className, weight }))}
			style={{
				width: width,
				height: height,
			}}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
