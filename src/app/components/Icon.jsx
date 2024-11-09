"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

function Icon({ src, width, height, alt, className, clickUrl }) {
	const router = useRouter();
	return (
		<Image
			src={src}
			width={width}
			height={height}
			alt={alt}
			className={className}
			onClick={() => router.push(clickUrl)}
		/>
	);
}

export default Icon;
