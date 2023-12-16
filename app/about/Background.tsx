import Image from "next/image";

const costumers = [
  {
    title: "Team Members",
    content: "300+",
  },

  {
    title: "Office in the US",
    content: "3",
  },

  {
    title: "Transactions analyzed",
    content: "10M+",
  },
];

export default function Background() {
  return (
    <section>
      <div className="relative h-[300px] w-full xs:h-[267px] lg:h-[500px]">
        <picture>
          <source
            srcSet="/about/desktop/members.jpg"
            media="(min-width: 940px)"
          />

          <source
            srcSet="/about/tablet/members.jpg"
            media="(min-width: 530px)"
          />

          <Image
            src="/about/mobile/members.jpg"
            alt="Banner"
            className="object-scale-down"
            fill
          />
        </picture>
      </div>

      <div className="mx-auto flex flex-col gap-4 px-4 py-[72px] text-center sm:max-w-xxl sm:flex-row sm:gap-8 lg:px-8">
        {costumers.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-6 border-b border-shade-grey/[.25] pb-4 sm:flex-grow sm:border-y sm:py-4"
          >
            <span className="text-slight-grey">{item.title}</span>
            <span className="font-serif text-3xl font-bold text-pink sm:text-5xl">
              {item.content}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
