"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../assets/images/nsdmalogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Forecast", href: "/" },
  { name: "Advisories", href: "/advisories" },
  { name: "About", href: "/about" },
  { name: "Weather Buletin", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathName = usePathname("/");

  return (
    <Disclosure
      as="nav"
      className="bg-white md:py-3 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 sticky top-0 z-40"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-between">
            <Link href="/" className=" block sm:hidden">
              <div className="shrink-0 items-center">
                <Image src={logo} width={320} height={36} alt="logo" />
              </div>
            </Link>

            <Link href="/" className="hidden sm:block">
              <div className="shrink-0 items-center">
                <Image src={logo} width={640} height={72} alt="logo" />
              </div>
            </Link>

            <div className="hidden sm:block">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      "group relative px-3 py-2 text-sm font-medium transition-colors",
                      pathName === item.href ? "text-red-600" : "text-red-600",
                    )}
                  >
                    {item.name}

                    <span
                      className={classNames(
                        "absolute left-1/2 -bottom-1 h-0.5 bg-red-600 transition-all duration-500 ease-out",
                        pathName === item.href
                          ? "w-full -translate-x-1/2"
                          : "w-0 -translate-x-1/2 group-hover:w-full",
                      )}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel
        transition
        className="
    fixed
    top-0
    left-0
    z-50
    w-72
    bg-[#051937]
    shadow-xl
    sm:hidden
    transition duration-300 ease-out
    data-closed:-translate-x-full
  "
      >
        <div className="py-16 px-4 space-y-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-red-600 hover:bg-gray-100"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
