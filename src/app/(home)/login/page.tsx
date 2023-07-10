import React from "react";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <section className="w-full px-2 sm:px-5 md:px-10 h-[100%] md:h-[calc(100%-25px)]">
      {/* background */}
      <div className="h-[25rem] dashboard-background absolute z-[-1] left-0 right-0 top-0"></div>
      <section className="flex w-full h-full items-center justify-center">
        <div className="bg-[rgba(var(--secondary-color-rgb),1)] mt-[6rem] min-w-[min(30rem,100%)] rounded-[6px]">
          <div className="p-12 pt-10">
            <div>
              <p className="text-sm opacity-50 text-center">
                Log in with credentials
              </p>
              <p className="text-sm opacity-30 text-center">
                (You can fill with random info to login)
              </p>
            </div>
            <div className="pt-2">
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Login;
