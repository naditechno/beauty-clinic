import Link from "next/link";
import Menu from "./menu";
import DataMenu from "@/json/footer-menu.json";
import { Input } from "@/components/atomics/input";
import { Button } from "@/components/atomics/button";
import Image from "next/image";
import { Separator } from "@/components/atomics/separator";

function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-[50px] lg:py-[60px] px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0">
          <Menu title="Solutions" data={DataMenu.data.solutions} />
          <Menu title="Product" data={DataMenu.data.product} />
          <Menu title="Company" data={DataMenu.data.company} />
          <div className="col-span-2 text-white space-y-4">
            <span className="font-semibold leading-6 text-primary-dark text-sm md:text-base">
              Subscribe & Free Rewards
            </span>
            <div className="relative mt-3">
              <Input
                type="text"
                placeholder="Email Address"
                icon="/icons/sms.svg"
                variant="footer"
                className="w-full"
              />
              <Button
                variant="default"
                size="footer"
                className="absolute right-0 top-0"
              >
                Subscribe
              </Button>
            </div>
            <div className="mt-[30px] space-y-3">
              <span className="font-semibold leading-6 text-primary-dark text-sm md:text-base">
                Choose Language
              </span>
              <div className="flex items-center space-x-2.5">
                <Image
                  src="/images/uk.svg"
                  alt="UK"
                  height={0}
                  width={0}
                  className="w-[26.67px] h-5"
                />
                <span className="leading-6 text-primary-dark text-sm md:text-base">
                  English (UK)
                </span>
                <Image
                  src="/icons/arrow-down.svg"
                  alt="arrow"
                  height={0}
                  width={0}
                  className="w-[18px] h-[18px]"
                />
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-[50px] bg-separator-foreground" />
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between">
          <div className="flex items-center">
            <Image src="/logo-beauty.png" alt="logo" height={36} width={133} />
            <h1 className="font-bold text-lg md:text-2xl">Beauty Clinic</h1>
          </div>
          <span className="leading-6 lg:text-right text-primary-dark text-sm md:text-base">
            All Rights Reserved by Naditechno 2025
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
