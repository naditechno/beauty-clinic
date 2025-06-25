import { DealsProps } from "@/interfaces/landing-page";
import { moneyFormat } from "@/lib/utils";
import Image from "next/image";

function CardDeals({
  image,
  title,
  description,
  duration_minutes,
  doctor,
  price,
}: DealsProps) {
  return (
    <div className="group relative w-fit cursor-pointer overflow-hidden rounded-3xl shadow-md transition-all duration-500">
      <figure className="relative xl:w-[260px] xl:h-[350px] w-[220px] h-[310px]">
        {/* Gambar */}
        {image ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${image}`}
            alt={title}
            fill
            className="object-cover rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-110"
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-gray-300 rounded-3xl" />
        )}

        {/* Overlay saat hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-10 p-5 flex flex-col justify-end text-white">
          <div>
            <h3 className="font-bold text-xl leading-[30px]">{title}</h3>
            <p className="text-sm">
              <span className="font-semibold">
                {moneyFormat.format(Number(price))}
              </span>
            </p>

            <p className="mt-2 text-sm line-clamp-2">{description}</p>

            <div className="flex flex-col gap-1 mt-3 text-sm">
              <div className="flex items-center">
                <Image
                  src="/icons/clock.svg"
                  alt="duration"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                {duration_minutes} mins
              </div>
              <div className="flex items-center">
                <Image
                  src="/icons/profile-2user.svg"
                  alt="doctor"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                {doctor}
              </div>
            </div>
          </div>
        </div>

        {/* Rating tetap tampil walaupun tidak dihover */}
        <div className="absolute top-4 right-4 flex items-center text-white text-sm z-20">
          <Image
            src="/icons/star.svg"
            alt="star-icon"
            width={20}
            height={20}
            className="mr-1"
          />
          4/5
        </div>
      </figure>
    </div>
  );
}

export default CardDeals;
