/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import Sidebar from "./Sidenav";
import GlobalStateContext from "@/context/GlobalState";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

function Navbar() {
  const { setSidenavOpen, sidenavOpen } = useContext(GlobalStateContext);
  return (
    <div className="h-16 border-b flex items-center px-6 lg:px-20">
      <img src="/logo.png" className="h-8 lg:h-10" alt="" />
      <div className="ml-4">
        <h1 className="font-medium lg:block text-lg font-poppins text-green-600">
          lead<span className="text-zinc-800">Squad</span>
        </h1>
      </div>
      <div className="ml-6 text-xs text-zinc-400 space-x-4 hidden lg:flex items-center font-poppins">
        <span>/</span>
        <span>Organizations</span>
        <span>/</span>
        <span className="text-black">Dtory</span>
      </div>
      <div className="ml-auto h-full flex items-center">
        <Popover className="relative w-fit h-full">
          <>
            <Popover.Button className="outline-none h-full">
              <div className="h-full border-l px-4 hidden lg:flex items-center text-left">
                <div className="h-12 w-12 bg-green-50 font-medium tracking-wider text-green-600 font-poppins text-sm rounded-full flex items-center justify-center">
                  PB
                </div>
                <div className="ml-4">
                  <h1 className="font-medium text-sm font-poppins text-zinc-800">
                    Peter B.
                  </h1>
                  <h2 className="font-medium text-xs font-poppins text-zinc-400">
                    Your Organizations
                  </h2>
                </div>
                <i className="ml-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </i>
              </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-full -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="bg-white">
                    <ul className="p-4 text-xs text-zinc-600 space-y-4 font-poppins">
                      <li>Account</li>
                      <li>Your organizations</li>
                      <li>Logout</li>
                    </ul>
                    <div className="bg-zinc-50 border-t">
                      <ul className="p-4 text-xs text-zinc-600 space-y-5 font-poppins">
                        <li className="bg-green-600 cursor-pointer w-full text-center text-white py-3 rounded">
                          Create a new organization
                        </li>
                        <li className="cursor-pointer w-full text-center text-zinc-700 rounded">
                          Join an existing organization
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        </Popover>

        <button onClick={() => setSidenavOpen(true)} className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
        <Sidebar />
      </div>
    </div>
  );
}

export default Navbar;
