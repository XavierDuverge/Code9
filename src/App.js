import Form from "./components/Form";

function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full h-screen lg:w-1/2 flex items-center justify-center">
        <Form />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-blue-500 rounded-full animate-bounce">  </div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
      </div>
    </div>
  );
}

export default App;
