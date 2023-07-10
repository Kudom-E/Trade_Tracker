import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
  return (
    <section className="w-full px-2 sm:px-5 md:px-10 h-[100%] md:h-[calc(100%-25px)]">
      {/* background */}
      <div className="h-[25rem] dashboard-background absolute z-[-1] left-0 right-0 top-0"></div>
      <section className="flex w-full h-full items-center justify-center">
        <div className="bg-[rgba(var(--secondary-color-rgb),1)] mt-[6rem] min-w-[min(30rem,100%)] rounded-[6px]">
          <div className="px-8 py-10 border-b border-[rgba(var(--text-color-rgb),.1)]">
            <div>
              <p className="text-sm opacity-50 text-center">Sign up with</p>
            </div>
            <div className="flex justify-center items-center mt-8 gap-5">
              <button className="h-full gap-3 bg-[rgba(var(--secondary-color-rgb),1)] rounded-[6px] hover:translate-y-[-2px] shadow-[0_0px_10px_0px_rgba(var(--text-color-rgb),.2)] flex items-center justify-between px-5 py-3">
                <FaGithub className="scale-[1.25]" /> Github
              </button>
              <button className="h-full gap-3 bg-[rgba(var(--secondary-color-rgb),1)] rounded-[6px] hover:translate-y-[-2px] shadow-[0_0px_10px_0px_rgba(var(--text-color-rgb),.2)] flex items-center justify-between px-5 py-3">
                <FcGoogle className="scale-[1.25]" /> Google
              </button>
            </div>
          </div>

          <div className="p-12 pt-10">
            <div>
              <p className="text-sm opacity-50 text-center">
                Or sign up with credentials
              </p>
            </div>
            <div className="pt-2">
              <SignUpForm />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SignUp;
