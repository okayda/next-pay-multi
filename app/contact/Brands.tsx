import { brands } from "@/constants";
import Image from "next/image";

export default function Brands() {
  return (
    <div className="hidden md:block">
      <h3 className="mb-12 font-serif text-2xl font-bold text-dark-grey">
        Join the thousands of innovators already building with us
      </h3>

      {/* <div className="md:flex md:max-w-[600px] md:flex-wrap md:gap-11 lg:justify-between"> */}

      <div className="md:grid md:max-w-[600px] md:grid-cols-2 md:items-center md:gap-10 lg:grid-cols-3">
        {brands.map((brand) => (
          <Image
            src={brand.logo}
            alt={brand.value}
            key={brand.value}
            width={150}
            height={28}
            className="h-auto w-auto"
          />
        ))}
      </div>
    </div>
  );
}
