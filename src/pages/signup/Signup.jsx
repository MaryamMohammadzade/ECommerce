import SignupForm from "../../components/forms/signup-form/Signup"

const Signup = () => {
  return (
        <div className="w-screen h-screen bg-slate-100 flex flex-col items-center justify-center gap-4">
      <h1 className="font-bold text-xl">Signup</h1>
      <SignupForm />
    </div>
  )
}

export default Signup