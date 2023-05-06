import React, { useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import GlobalStateContext from "@/context/GlobalState";

function Sidenav() {
  const { setSidenavOpen, sidenavOpen } = useContext(GlobalStateContext);

  function closeModal() {
    setSidenavOpen(false);
  }

  function openModal() {
    setSidenavOpen(true);
  }
  return (
    <>
      <Transition appear show={sidenavOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 h-full w-[80%] bg-white">
              <div className="p-5">
                <div className="flex items-center text-left">
                  <div className="h-12 w-12 bg-green-50 font-medium tracking-wider text-green-600 font-poppins text-sm rounded-full flex items-center justify-center">
                    PB
                  </div>
                  <div className="ml-4">
                    <h1 className="font-medium text-sm font-poppins text-slate-800">
                      Peter B.
                    </h1>
                    <h2 className="font-medium text-xs font-poppins text-slate-400">
                      Your Organizations
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      closeModal();
                    }}
                    className="ml-auto outline-none mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-slate-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <ul className="mt-7 font-medium text-xs text-slate-600 space-y-5 font-poppins">
                  <li>Account</li>
                  <li>Your organizations</li>
                  <li className="text-red-500">Logout</li>
                </ul>
                <div className="mt-10">
                  <ul className="text-xs text-slate-600 space-y-2 font-poppins">
                    <li className="bg-green-600 cursor-pointer w-full text-center text-white py-4 rounded">
                      Create a new organization
                    </li>
                    <li className="py-4 cursor-pointer w-full text-center text-slate-700 rounded">
                      Join an existing organization
                    </li>
                  </ul>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

export default Sidenav;
