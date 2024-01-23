import Header from "@/components/Header";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

export default function Login() {
  return (
    <div className="flex flex-col items-center">
      <Header />

      <div className="flex justify-between w-[500px] mt-24 items-center">
        <div>
          <p className="mb-6 font-bold">Log In</p>
          <LoginForm />
        </div>
        <p className="font-bold">or</p>
        <div>
          <p className="mb-6 font-bold">Sign Up</p>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
