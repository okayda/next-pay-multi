import Image from "next/image";

export default function Offers() {
  return (
    <section>
      <div className="offers">
        <div>
          <Image
            src="/home/finance.svg"
            alt="Finances"
            width={106}
            height={106}
            className="mx-auto"
          />

          <h3 className="pb-4 pt-8 font-serif text-2xl font-bold text-dark-grey xs:text-[32px]">
            Personal Finances
          </h3>

          <p className="text-slight-grey">
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.
          </p>
        </div>

        <div>
          <Image
            src="/home/bank.svg"
            alt="Banks"
            width={106}
            height={106}
            className="mx-auto"
          />

          <h3 className="pb-4 pt-8 font-serif text-2xl font-bold text-dark-grey xs:text-[32px]">
            Banking & Coverage
          </h3>

          <p className="text-slight-grey">
            With our platform, you can speed up account onboarding and support
            ongoing payments for checking, savings, credit card, and brokerage
            accounts.
          </p>
        </div>

        <div>
          <Image
            src="/home/payment.svg"
            alt="Payments"
            width={106}
            height={106}
            className="mx-auto"
          />

          <h3 className="pb-4 pt-8 font-serif text-2xl font-bold text-dark-grey xs:text-[32px]">
            Consumer Payments
          </h3>

          <p className="text-slight-grey">
            It’s easier to set up secure bank payments with us through a flow
            designed with the user experience in mind. Customers could instantly
            authenticate their account.
          </p>
        </div>
      </div>
    </section>
  );
}
