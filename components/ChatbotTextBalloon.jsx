import Image from "next/image";

export default function ChatbotTextBalloon({ robotMessage }) {
	return (
		<div className="">
			<div className="chat-image avatar">
				<div className="w-16 rounded-full">
					<Image
						src={"/images/student.png"}
						width={64}
						height={64}
						placeholder={`/vercel.svg`}
						alt="Robot profile picture"
					/>
				</div>
			</div>
			<div className="chat-header text-lg">
				Chatbot
				<time className="text-base opacity-50 px-2">12:45</time>
			</div>
			<div className={"chat-bubble-primary"}>message here</div>
		</div>
	);
}
