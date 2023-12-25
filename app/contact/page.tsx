import FormContact from "./FormContact";
import Brands from "./Brands";

export default function Page() {
  return (
    <section>
      <div className="contact-page">
        <h2 className="mx-auto mb-11 max-w-[520px] text-center font-serif text-[32px] font-bold leading-9 text-dark-grey md:mx-0 md:max-w-[570px] md:text-left md:text-5xl">
          Submit a help request and we will get in touch shortly.
        </h2>

        <div className="gap-8 md:flex md:items-center">
          <FormContact />
          <Brands />
        </div>
      </div>
    </section>
  );
}
