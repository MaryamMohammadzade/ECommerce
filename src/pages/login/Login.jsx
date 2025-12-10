import LoginForm from "../../components/forms/login-form"


const Login = () => {
  return (
    <div className="w-screen h-screen bg-slate-100 flex flex-col items-center justify-center gap-4">
      <h1 className="font-bold text-xl">Login</h1>
      <LoginForm />
    </div>
  )
}

export default Login