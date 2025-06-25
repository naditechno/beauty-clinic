"use client";
import { Button } from "@/components/atomics/button";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atomics/dropdown-menu";
import Title from "@/components/atomics/title";
import { signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    <header className=" mx-auto fixed inset-x-0 z-20 px-4 md:px-0">
      <div className="px-4 py-2 md:px-6 md:py-0 bg-white/90 flex justify-between items-center shadow">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-beauty.png"
            alt="logo"
            height={36}
            width={133}
            className="w-[100px] md:w-[133px]"
          />
          <h1 className="font-bold text-primary-dark text-lg md:text-2xl">
            Beauty Clinic
          </h1>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-[20px] md:space-x-[30px] text-sm md:text-base">
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              <Link href="#services-section">Beauty Services</Link>
            </li>
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              <Link href="#promo-section">Promo</Link>
            </li>
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              <Link href="#benefits-section">Benefits</Link>
            </li>
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              <Link href="#faq-section">FAQ</Link>
            </li>
          </ul>
        </nav>

        <div>
          <Button variant="default" size="default">
            <Image
              src="/icons/wa.svg"
              alt="Facial treatment"
              width={25}
              height={25}
              className="rounded-lg object-cover mr-2"
            />
            reservation
          </Button>
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Image
                src="/images/mnu.png"
                alt="menu"
                height={24}
                width={24}
                className="w-8 h-8"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px] p-4 space-y-2 mx-4">
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#categories-section">Categories</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#benefits-section">Benefits</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#testimonials-section">Testimonials</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
