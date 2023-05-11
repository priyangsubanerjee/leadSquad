/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function DefaultOrganization() {
  const [state, setstate] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (router.query.tab == "overview") {
      setstate(0);
    } else if (router.query.tab == "tasks") {
      setstate(1);
    } else if (router.query.tab == "requests") {
      setstate(2);
    } else if (router.query.tab == "members") {
      setstate(3);
    } else if (router.query.tab == "settings") {
      setstate(4);
    } else {
      setstate(0);
    }
  }, [router]);
  return (
    <div className="fixed h-screen w-screen bg-red-50 flex">
      <div className="h-full min-w-[250px] w-fit shrink-0 bg-white border-r font-poppins tracking-wide">
        <ul className="p-4 space-y-2">
          <li
            onClick={() =>
              router.push(`/organizations/wefef?tab=overview`, undefined, {
                shallow: true,
              })
            }
            className={`px-4 py-3 ${
              state == 0 && " bg-slate-100"
            } text-slate-700 rounded-md text-sm flex items-center space-x-3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 text-slate-800"
            >
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
            </svg>
            <span>Overview</span>
          </li>
          <li
            onClick={() =>
              router.push(`/organizations/wefef?tab=tasks`, undefined, {
                shallow: true,
              })
            }
            className={`px-4 py-3 ${
              state == 1 && " bg-slate-100"
            } text-slate-700 rounded-md text-sm flex items-center space-x-3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>

            <span>Tasks</span>
          </li>
          <li
            className={`px-4 py-3 ${
              state == 2 && " bg-slate-100"
            } text-slate-700 rounded-md text-sm flex items-center space-x-3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
              <path
                fill-rule="evenodd"
                d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                clip-rule="evenodd"
              />
            </svg>

            <span>Requests</span>
          </li>
          <li
            className={`px-4 py-3 ${
              state == 3 && " bg-slate-100"
            } text-slate-700 rounded-md text-sm flex items-center space-x-3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clip-rule="evenodd"
              />
            </svg>

            <span>Members</span>
          </li>
          <li
            className={`px-4 py-3 ${
              state == 4 && " bg-slate-100"
            } text-slate-700 rounded-md text-sm flex items-center space-x-3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                clip-rule="evenodd"
              />
            </svg>

            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="h-full w-full bg-white overflow-y-auto overflow-x-hidden">
        <div className="p-16 font-poppins">
          <h1 className="text-3xl text-slate-700 font-bold">
            Organization name
          </h1>
          <div className="mt-16">
            <h1 className="font-medium text-slate-500 border-b pb-2">
              Pending tasks
            </h1>

            <div className="mt-7 grid grid-cols-3 gap-5">
              <div className="flex bg-slate-50 p-3 rounded">
                <div className="bg-white h-full p-2 rounded-md flex flex-col items-center justify-center">
                  <h1 className="font-bold text-slate-700">20</h1>
                  <p className="text-sm text-slate-500 mt-1">May</p>
                </div>
                <div className="ml-4 mr-4">
                  <h2 className="text-base font-medium text-slate-700">
                    Create a presentation
                  </h2>
                  <div className="mt-2 flex items-center -space-x-2">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
                      className="h-7 w-7 rounded-full object-cover"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmRvWPl30b_HpwX2dkF6Yvzy3RlDziSyf4g&usqp=CAU"
                      className="h-7 w-7 rounded-full object-cover"
                      alt=""
                    />
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-red-200 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex bg-slate-50 p-3 rounded">
                <div className="bg-white h-full p-2 rounded-md flex flex-col items-center justify-center">
                  <h1 className="font-bold text-slate-700">20</h1>
                  <p className="text-sm text-slate-500 mt-1">May</p>
                </div>
                <div className="ml-4 mr-4">
                  <h2 className="text-base font-medium text-slate-700">
                    Create a presentation
                  </h2>
                  <div className="mt-2 flex items-center -space-x-2">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
                      className="h-7 w-7 rounded-full object-cover"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmRvWPl30b_HpwX2dkF6Yvzy3RlDziSyf4g&usqp=CAU"
                      className="h-7 w-7 rounded-full object-cover"
                      alt=""
                    />
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-red-200 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex bg-slate-50 p-3 rounded">
                <div className="bg-white h-full p-2 rounded-md flex flex-col items-center justify-center">
                  <h1 className="font-bold text-slate-700">20</h1>
                  <p className="text-sm text-slate-500 mt-1">May</p>
                </div>
                <div className="ml-4 mr-4">
                  <h2 className="text-base font-medium text-slate-700">
                    Create a presentation
                  </h2>
                  <div className="mt-2 flex items-center -space-x-2">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
                      className="h-7 w-7 rounded-full object-cover"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmRvWPl30b_HpwX2dkF6Yvzy3RlDziSyf4g&usqp=CAU"
                      className="h-7 w-7 rounded-full object-cover"
                      alt=""
                    />
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-red-200 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h1 className="font-medium text-slate-500 border-b pb-2">
              Requests <span className="text-xs ml-4">(4 assigned to you)</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultOrganization;
