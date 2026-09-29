import Image from "next/image";

interface EchoLogoProps {
  size?: number;
  className?: string;
}

export function EchoLogo({ size = 28, className }: EchoLogoProps) {
  return (
    <Image
      src="/echogpt-logo.svg"
      alt="EchoGPT"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
