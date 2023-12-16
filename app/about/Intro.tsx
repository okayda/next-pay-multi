export default function Intro() {
  return (
    <section>
      <div className="mx-auto max-w-xxl px-4 pb-[100px] md:pt-12 lg:px-8">
        <h2 className="mb-12 max-w-[730px] font-serif text-[32px] font-bold leading-9 text-dark-grey sm:text-5xl">
          We empower innovators by delivering access to the financial system
        </h2>

        <div>
          <div className="mb-14 sm:flex sm:justify-between sm:gap-6">
            <h3 className="mb-4 text-center font-serif text-2xl font-bold text-dark-grey sm:text-left sm:text-[32px]">
              Our Vision
            </h3>

            <p className="text-slight-grey max-w-[635px] text-center sm:text-left">
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.
            </p>
          </div>

          <div className="sm:flex sm:justify-between sm:gap-6">
            <h3 className="mb-4 text-center font-serif text-2xl font-bold text-dark-grey sm:text-left sm:text-[32px]">
              Our Business
            </h3>

            <p className="text-slight-grey max-w-[635px] text-center sm:text-left">
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
