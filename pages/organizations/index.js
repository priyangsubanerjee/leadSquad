import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Navbar from "@/components/Navbar";
import React from "react";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

function Default() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-5 lg:px-28 mt-5">
        <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-5 font-poppins">
          <h1 className="text-slate-700 font-semibold">Organization name</h1>
          <p className="text-xs mt-4 text-slate-500">200 members</p>
          <div className="flex items-center space-x-7 mt-10 text-zinc-600">
            <button className="text-xs text-zinc-700 py-3 px-5 bg-white rounded-full border border-slate-200">
              <span>Assign task</span>
            </button>

            <button className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>
              <span className="text-xs font-medium">Add members</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Default;
