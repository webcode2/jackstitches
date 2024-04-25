import React, { useState } from "react";
import { company_profile } from "../company_profile";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Gallary", href: "/gallery" },
  { name: "Fibrics", href: "/fibric" },
  { name: "Style Guide", href: "style-guide" },

  { name: "Contact", href: "#contact" },
];

function Header({}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" top-0 z-[100] bg-white bg-opacity-95  sticky ">
      <nav
        className="flex items-center justify-between px-6 py-4 lg:py-1 lg:px-14"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">{company_profile.name}</span>
            {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
            <p className=" font-lobster text-2xl">{company_profile.name}</p>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold leading-6 text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end text-primary">
          <div className="flex  flex-col space-y-1">
            <p className="font-ligt font-thin">
              No: 67 Ameria Str. off phase 2 Abuja.
            </p>
            <p className="font-thin flex gab-x-4 items-center leading-8 font-poppins">
              <PhoneArrowUpRightIcon className="h-6 w-6" aria-hidden="true" />
              +234 912377844
            </p>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">{company_profile.name}</span>
              {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                /> */}
              <p className="font-lobster">{company_profile.name}</p>
            </Link>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;
