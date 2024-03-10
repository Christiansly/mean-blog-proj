import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password)
      return setError("Please fill in all fields");
    try {
      setLoading(true);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("response", data);

      if (!data.success) {
        setError(data.message);
      }
      if(response.ok) {
        navigate("/sign-in");
      }
      setLoading(false);
    } catch (error) {
      setError((error as Error).message);
      console.log("error", error);
      setLoading(false);
    }
  };
  console.log("form data", formData);
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
          <form onSubmit={handleSubmit}>
            <div className="">
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Your username"
                id="username"
                onChange={handleChange}
                name="username"
              />
            </div>
            <div className="">
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="Your email"
                id="email"
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="Your password"
                id="password"
                onChange={handleChange}
                name="password"
              />
            </div>
            <Button
              type="submit"
              gradientDuoTone="purpleToPink"
              className="mt-5 w-full"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Signing up...</span>
                </>
              ) : (
                "Sign up"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account already?</span>
            <Link to="/sign-in" className="text-purple-500">
              Sign in
            </Link>
          </div>
          {error && (
            <Alert className="mt-5" color="failure">
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
