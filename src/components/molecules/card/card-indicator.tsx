import { CategoriesProps } from "@/interfaces/landing-page";
import Image from "next/image";

function CardIndicator({ icon, title, subtitle }: CategoriesProps) {
  return (
    <div className="relative w-full h-[200px] rounded-2xl overflow-hidden shadow-md">
      {/* Background image */}
      <Image src={icon} alt={title} fill className="object-cover" />

      {/* Absolute Text Top Right */}
      <div className="absolute top-2 right-2 bg-white/30 backdrop-blur-md rounded-lg px-2 flex items-center gap-2">
        <Image
          src="/logo-beauty.png"
          alt="logo"
          height={20}
          width={100}
          className="w-[80px] md:w-[100px]"
        />
      </div>
    </div>
  );
}

export default CardIndicator;
