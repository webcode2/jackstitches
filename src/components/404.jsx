import { Link } from "react-router-dom";
import Flyshadow from "./flyshadow";
import Header from "./Header";
import SimpleFooter from "./Footer";

export default function ErrorPage() {
  return (
    <div className="">
      <Header />
      <Flyshadow />
      <main className="grid min-h-full place-items-center  px-6 py-[20vh] sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-5xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
      <div className="absolute bottom-0 w-full"><SimpleFooter/></div>
    </div>
  );
}
