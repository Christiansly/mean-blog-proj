import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen mt-20 dark:bg-primary">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-10">
        <div className="flex-1">
          <Link
            to="/"
            className="font-bold dark:text-white text-4xl dark:bg-black py-2 px-3 rounded-md"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Christian's
            </span>{" "}
            Blog
          </Link>
          <p className="text-sm mt-5 dark:text-slate-300">
            A blog about web development, programming, and other tech-related
            topics. You can sign up with your email
          </p>
        </div>
        <div className="flex-1">
          <form>
            <div className="">
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Your username"
                id="username"
              />
            </div>
            <div className="">
              <Label value="Your email" />
              <TextInput type="text" placeholder="Your email" id="email" />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput
                type="text"
                placeholder="Your password"
                id="password"
              />
            </div>
            <Button
              type="submit"
              gradientDuoTone="purpleToPink"
              className="mt-5 w-full"
            >
              Sign up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account already?</span>
            <Link to="/sign-in" className="text-purple-500">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
