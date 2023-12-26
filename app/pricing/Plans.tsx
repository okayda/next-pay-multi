import { Button } from "@/components/ui/button";
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
            <div className="flex flex-col justify-between" key={plan.title}>
              <div className="flex h-full flex-col justify-between pb-5 md:text-center lg:text-left">
                <div className="pb-7">
                  <h3 className="mb-4 font-serif text-2xl font-bold text-pink md:text-[32px]">
                    {plan.title}
                  </h3>

                  <p className="max-w-[350px] text-slight-grey">
                    {plan.description}
                  </p>
                </div>

                <span className="block font-serif text-5xl font-bold text-dark-grey">
                  {plan.price}
                </span>
              </div>

              <div className="border-t-2 border-shade-grey/[.15] md:border-t">
                <div className="mb-6 flex justify-center border-b-2 border-shade-grey/[.15] py-8 md:justify-start md:border-b">
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

                <Button
                  variant="ghost"
                  className="rounded-full border border-slate-800 p-6 text-[15px] font-bold hover:bg-shade-grey hover:text-white"
                >
                  Request Access
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
