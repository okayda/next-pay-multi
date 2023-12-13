import Link from "next/link";
import Image from "next/image";

export default function Features() {
  return (
    <section>
      <div className="mx-auto max-w-[620px] px-4 pb-[100px] pt-[50px] lg:max-w-xxl lg:px-8 lg:py-[150px]">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-4">
          <Image
            src="/home/easy.svg"
            alt="Implementation"
            width={335}
            height={390}
            className="mx-auto w-[600px] lg:mx-0"
          />

          <div className="text-center lg:max-w-[445px] lg:text-left">
            <h2 className="mb-6 font-serif text-3xl font-bold text-dark-grey xs:text-4xl xs:text-[42px] lg:text-5xl">
              Easy to implement
            </h2>
            <p className="text-slight-grey lg:text-base">
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>

        <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-8">
          <Image
            src="/home/simple.svg"
            alt="Implementation"
            width={335}
            height={390}
            className="mx-auto w-[600px] lg:mx-0"
          />

          <div className="text-center lg:max-w-[445px] lg:text-left">
            <h2 className="mb-6 font-serif text-3xl font-bold text-dark-grey xs:text-4xl xs:text-[42px] lg:text-5xl">
              Simple UI & UX
            </h2>
            <p className="text-slight-grey">
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
