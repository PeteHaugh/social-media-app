import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import {
  Bars3BottomRightIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Avatar from "./Avatar";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 flex items-center bg-white px-2 py-1 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Link href="/">
          <Image
            objectFit="contain"
            src="https://i.ibb.co/7Sc6ZwJ/Reddit-Logo.png"
            layout="fill"
          />
        </Link>
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search Box */}
      <form className="flex flex-1 items-center space-x-2 border-gray-200 rounded-full bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <hr className="h-10 border-gray-100" />
        <ChatBubbleLeftIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <div className="flex flex-row items-center bg-gray-200 rounded-full py-1 px-4 text-gray-700 hover:bg-gray-300">
          <MegaphoneIcon className="h-6 w-6 pr-1"/>
          Advertise
        </div>
      </div>

      <div className="mx-5 flex items-center lg:hidden">
        <Bars3BottomRightIcon className="icon" />
      </div>

      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden items-center lg:flex space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Avatar seed={session?.user?.name} tiny />
          </div>
          <div className="flex-1 text-xs">
            <p>{session?.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden items-center lg:flex space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              layout="fill"
              src="https://links.papareact.com/23l"
              alt=""
            />
          </div>

          <div>
            <p className="text-gray-400">Sign in</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
