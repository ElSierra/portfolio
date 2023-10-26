import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";

export default function Modal({
  isOpen,
  imageUri,
  openModal,
  closeModal,
}: {
  isOpen: boolean;
  imageUri: string;
  openModal: () => void;
  closeModal: () => void;
}) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
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
            <div className="fixed z-999 inset-0 backdrop-blur-3xl bg-opacity-100" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[80%] h-[80vh] transform overflow-hidden rounded-2xl dark:bg-[#262626] bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    
                      <Image
                        src={imageUri}
                        alt={""}
                        style={{ objectFit: "cover", borderRadius: "10px" }}
                        fill
                      />
                    </div>
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
