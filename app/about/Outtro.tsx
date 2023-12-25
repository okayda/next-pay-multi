export default function Outtro() {
  return (
    <section>
      <div className="outtro">
        <div className="mb-14 sm:flex sm:justify-between sm:gap-6">
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-dark-grey sm:text-left sm:text-[32px]">
            The Culture
          </h3>

          <p className="max-w-[635px] text-center text-slight-grey sm:text-left">
            We strongly believe there is always an opportunity to learn from
            each other outside of day-to-day work, whether it is company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
        </div>

        <div className="sm:flex sm:justify-between sm:gap-6">
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-dark-grey sm:text-left sm:text-[32px]">
            The People
          </h3>

          <p className="max-w-[635px] text-center text-slight-grey sm:text-left">
            We are all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
        </div>
      </div>
    </section>
  );
}
