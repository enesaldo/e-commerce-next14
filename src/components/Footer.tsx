import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-primary w-full items-center justify-center flex px-4 flex-col lg:pt-10 pt-2 pb-4">
      <div className="flex align-center justify-center md:text-xl text-xs text-white gap-4">
        <Link href="/" className="text-uppercase">
          PRIVACY POLICY
        </Link>
        <div className="vert-line"></div>
        <Link href="/" className="text-uppercase">
          TERM OF SERVICE
        </Link>
        <div className="vert-line"></div>
        <Link href="/" className="text-uppercase">
          ABOUT BuyerFe.
        </Link>
      </div>
      <span className="text-white md:text-xl text-xs pt-2 ">
        &copy; 2022 BuyerFe. All Rights Reserved.
      </span>
    </div>
  );
}
