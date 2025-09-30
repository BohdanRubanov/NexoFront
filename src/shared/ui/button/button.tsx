import cn from "clsx";
import { IButtonProps } from "./button.types";
import styles from "./button.module.scss";

export function Button(props: IButtonProps) {
	const { title, color, size, className, iconLeft, iconRight, ...restProps } =
		props;
	return (
		<button
			className={cn(
				styles.button,
				styles[color],
				styles[size],
				className,
			)}
			{...restProps}
		>
			{iconLeft}
			{title}
			{iconRight}
		</button>
	);
}
