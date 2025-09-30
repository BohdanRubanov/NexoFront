import ButIcon from "@/shared/assets/but-icon";
import { Input } from "@/shared/ui/input/input";

export default function Auth() {
	return (
		<div>
			<div>
				{/* <AuthFormUi />
				<Image
					src="/images/auth-back.png"
					width={500}
					height={500}
					alt="back"
				/> */}
				<Input label="Enter your email" iconLeft={<ButIcon></ButIcon>}/>
			</div>
		</div>
	);
}
