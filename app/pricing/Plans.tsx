import Image from "next/image";

const plans = [
  {
    title: "Free Plan",
    description:
      "Build and test using our core set of products with up to 100 API request",
    price: "$0.00",
    benefits: [
      {
        name: "Transactions",
        valid: true,
      },
      {
        name: "Auth",
        valid: true,
      },
      {
        name: "Identity",
        valid: true,
      },
      {
        name: "Investments",
        valid: false,
      },
      {
        name: "Assets",
        valid: false,
      },
      {
        name: "Liabilities",
        valid: false,
      },
      {
        name: "Reques",
        valid: false,
      },
      {
        name: "Access",
        valid: false,
      },
    ],
  },

  {
    title: "Basic Plan",
    description:
      "Launch your project with unlimited request and no contractual minimums",
    price: "$249.00",
    benefits: [
      {
        name: "Transactions",
        valid: true,
      },
      {
        name: "Auth",
        valid: true,
      },
      {
        name: "Identity",
        valid: true,
      },
      {
        name: "Investments",
        valid: true,
      },
      {
        name: "Assets",
        valid: true,
      },
      {
        name: "Liabilities",
        valid: false,
      },
      {
        name: "Reques",
        valid: false,
      },
      {
        name: "Access",
        valid: false,
      },
    ],
  },

  {
    title: "Premium Plan",
    description:
      "Get tailored solutions, volume pricing, and dedicated support for your team",
    price: "$499.00",
    benefits: [
      {
        name: "Transactions",
        valid: true,
      },
      {
        name: "Auth",
        valid: true,
      },
      {
        name: "Identity",
        valid: true,
      },
      {
        name: "Investments",
        valid: true,
      },
      {
        name: "Assets",
        valid: true,
      },
      {
        name: "Liabilities",
        valid: true,
      },
      {
        name: "Reques",
        valid: true,
      },
      {
        name: "Access",
        valid: true,
      },
    ],
  },
];

export default function Plans() {
  return (
    <section>
      <div className="mx-auto max-w-[350px] px-4 pb-[80px] text-center md:max-w-xxl md:pb-[96px] md:text-left lg:px-8">
        <h2 className="mb-12 font-serif text-[32px] font-bold text-dark-grey md:text-5xl">
          Pricing
        </h2>

        <div className="flex flex-col gap-12 md:flex-row">
          {plans.map((plan) => (
            <div key={plan.title}>
              <div className="mb-6 border-b-2 border-shade-grey/[.15] pb-10 md:border-b">
                <h3 className="mb-4 font-serif text-2xl font-bold text-pink md:text-[32px]">
                  {plan.title}
                </h3>

                <p className="mb-5 max-w-[350px] text-slight-grey">
                  {plan.description}
                </p>

                <span className="block font-serif text-5xl font-bold text-dark-grey">
                  {plan.price}
                </span>
              </div>

              <div className="mb-6 flex justify-center border-b-2 border-shade-grey/[.15] pb-10 md:border-b">
                <ul className="flex flex-col gap-1">
                  {plan.benefits.map((item) => (
                    <li key={item.name} className="flex items-center gap-6">
                      {item.valid ? (
                        <Image
                          src="/shared/check.svg"
                          alt=""
                          className="h-[11px] w-[14px]"
                          height={11}
                          width={14}
                        />
                      ) : (
                        <span className="h-[11px] w-[14px]">&nbsp;</span>
                      )}

                      <span className="text-dark-grey">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="self-center rounded-full border border-shade-grey px-6 py-3 font-bold">
                Request Access
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
