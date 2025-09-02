"use client";
import { FormEvent } from "react";
import { toast } from "react-toastify";

import { credentialLogin } from "@/app/actions/index";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function page() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      await credentialLogin(formData);
      router.refresh();
      router.push("/dashboard");
      toast("Login successful", { type: "success" });
    } catch (err) {
      toast("Something went wrong. Please try again.", { type: "error" });
    }
  }

  return (
    <div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://www.svgrepo.com/show/301692/login.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
           login to your account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500">
          Or{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"
          >
           
            Create a new account
          </Link>
        </p>
      </div>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit}>
            {/* Full Name */}

            {/* Email */}
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="user@example.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                  placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Password */}
            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                  placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium 
                  rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none 
                  focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
