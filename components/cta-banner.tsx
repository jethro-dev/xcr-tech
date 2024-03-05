import Link from "next/link";

type Props = {};

export const CtaBanner = (props: Props) => {
  return (
    <section className="border w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 text-center md:px-6">
        <div className="space-y-2 text-center">
          <h1 className="font-akony text-3xl font-bold sm:text-5xl">
            XR IN EDUCATION AND TRAINING
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We deliver, we execute, and we are confident to make the best out of
            the best.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Explore Resources
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};
