import  useStore  from "./store"


const App = () => {
  const {access_token} = useStore();
  

  return (
    <div>access_token: {access_token? access_token : "access token not set!"}</div>
  )
}

export default App