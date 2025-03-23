import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo-horizontal-white.svg";

export default function LogoFooter() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" width={220} height={32} />
    </Link>
  );
}
