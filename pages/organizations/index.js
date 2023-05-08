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
      <div className="px-5 mt-5 font-medium text-xs text-zinc-400 space-x-3 flex lg:hidden items-center font-poppins">
        <span>/</span>
        <span>Organizations</span>
        <span>/</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-5 lg:px-28 mt-5">
        <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-5 font-poppins">
          <h1 className="text-slate-700 font-semibold">Organization name</h1>
          <p className="text-xs mt-4 text-slate-500">200 members</p>
          <div className="flex items-center space-x-5 mt-10 text-zinc-600">
            <button className="text-xs text-zinc-700 py-3 px-5 bg-white rounded-full border border-slate-200">
              <span>Assign task</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Default;
