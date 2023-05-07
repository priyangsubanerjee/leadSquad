/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <div className="bg-white pt-16 h-screen w-screen fixed inset-0 overflow-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        <div className="h-full bg-white hidden lg:block border-r p-20">
          <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
          <p className="mt-5 leading-9">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora a
            suscipit illo impedit cupiditate, voluptate facere molestiae,
            fugiat, rerum consequatur laboriosam soluta numquam quis repudiandae
            libero explicabo harum? Fuga, rerum.
          </p>
        </div>
        <div className="w-full max-w-lg lg:mx-auto lg:rounded-lg h-fit bg-white lg:my-auto py-16 px-6">
          <h1 className="font-medium lg:font-semibold lg:text-2xl font-poppins text-slate-800 flex items-center justify-center">
            Welcome to
            <span className="ml-2 font-medium lg:block font-poppins text-green-600">
              lead<span className="text-slate-800">Squad</span>
            </span>
          </h1>
          <p className="text-center text-zinc-500 text-xs font-poppins mt-4 font-medium">
            Login to your account
          </p>
          <div className="mt-8">
            <label
              htmlFor=""
              className="block text-sm font-poppins text-slate-500 font-medium"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="abc@gmail.com"
              className="border-b w-full py-3 mt-1 rounded-none"
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor=""
              className="block text-sm font-poppins text-slate-500 font-medium"
            >
              Password
            </label>
            <input
              type="text"
              placeholder="*********"
              className="border-b w-full py-3 mt-1 rounded-none"
            />
          </div>
          <div className="mt-10">
            <button className="bg-green-600 py-3 w-full text-white rounded opacity-50">
              Sign In
            </button>
          </div>
          <div className="mt-16 flex items-center justify-center text-slate-700 space-x-5 font-poppins">
            <div className="w-28 h-[1px] bg-slate-300"></div>
            <span className="text-xs font-medium">Login with</span>
            <div className="w-28 h-[1px] bg-slate-300"></div>
          </div>
          <div className="grid grid-cols-2 font-poppins w-full mt-10 gap-4">
            <button className="border px-2 py-3 flex items-center justify-center rounded">
              <img
                className="h-5"
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt=""
              />
              <span className="text-sm font-medium ml-3">Google</span>
            </button>
            <button className="border px-2 py-3 flex items-center justify-center rounded">
              <img
                className="h-5"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
              />
              <span className="text-sm font-medium ml-3">Github</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
