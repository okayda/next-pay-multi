import { Button } from "./ui/button";

export default function CTA() {
  return (
    <div className="mx-auto flex max-w-[445px] flex-col px-4 pb-[476px] sm:pb-[192px] lg:max-w-xxl lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <h2 className="mb-14 text-center font-serif text-5xl font-bold text-dark-grey lg:mb-0">
        Ready to start?
      </h2>

      <form
        action="#"
        className="flex flex-col gap-4 xs:shadow-md sm:flex-row sm:justify-between sm:gap-0 sm:rounded-full sm:bg-white"
      >
        <input
          className="rounded-full p-4 text-sm font-bold shadow-md outline-none sm:w-[240px] sm:shadow-none lg:w-[280px]"
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          required
        />

        <Button variant="none" size="none" className="link-btn text-[15px]">
          Schedule a Demo
        </Button>
      </form>
    </div>
  );
}
