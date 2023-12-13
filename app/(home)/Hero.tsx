import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-[490px] px-4 xs:max-w-[550px] lg:flex lg:max-w-xxl lg:flex-row-reverse lg:items-center lg:justify-between lg:px-8">
        <Image
          src="/home/phone.svg"
          className="mx-auto xs:h-[410px] xs:w-[260px] lg:mx-0 lg:h-[660px] lg:w-[420px]"
          width={190}
          height={300}
          alt="Smartphone"
        />

        <div className="lg:max-w-[540px]">
          <h1 className="mb-7 text-center font-serif text-3xl font-bold text-dark-grey xs:mb-8 xs:text-5xl lg:mb-10 lg:text-left lg:text-7xl">
            Start building with our APIs for absolutely free.
          </h1>

          <form
            action="#"
            className="mx-auto mb-4 flex max-w-[380px] flex-col gap-4 xs:max-w-[450px] xs:flex-row xs:justify-between xs:gap-0 xs:rounded-full xs:bg-white xs:shadow-md lg:mx-0 lg:max-w-[470px]"
          >
            <input
              className="rounded-full p-4 text-sm font-bold shadow-md outline-none xs:w-[60%] xs:shadow-none lg:w-[64%]"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
            <button className="link-btn">Schedule a Demo</button>
          </form>

          <p className="text-center text-[#6c8294] lg:pl-4 lg:text-left">
            Have any questions?{" "}
            <Link href="/contact" className="font-bold">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
