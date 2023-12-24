import Link from "next/link";
import Image from "next/image";
import { brands } from "@/constants";

export default function Work() {
  return (
    <section className="bg-shade-grey px-4 py-[80px]">
      <div className="mx-auto flex max-w-[480px] flex-col gap-6 lg:max-w-xxl lg:flex-row-reverse lg:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-11 lg:max-w-[525px] lg:justify-end lg:gap-x-12 lg:gap-y-0">
          {brands.map((brand) => (
            <Image
              src={brand.logo}
              className="brightness-[1000%]"
              alt={brand.value}
              key={brand.value}
              width={130}
              height={28}
            />
          ))}
        </div>

        <div className="flex flex-col gap-8 text-center text-white lg:max-w-[445px] lg:text-left">
          <h2 className="font-serif text-3xl font-bold sm:text-5xl">
            Who we work with
          </h2>

          <p className="leading-7 text-light-grey opacity-70">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>

          <Link
            href="/about"
            className="self-center rounded-full border border-white px-8 py-3 lg:self-start"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
