import './style.css';

const App = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col gap-5 p-36 text-center">
      <h1 className="font-bold text-3xl test-">React todo app!</h1>
      <div className="flex  gap-3 w-3/4  mx-auto bg-gray-500 text-white p-5 rounded justify-center">
        <input
          type="text"
          className="border rounded border-gray-400 p-2"
          placeholder="Add Title"
        />
        <input
          type="text"
          className="border rounded border-gray-400 p-2"
          placeholder="Add Description"
        />
        <button className="bg-blue-500 rounded text-white p-2">Add</button>
      </div>

      <div className="flex flex-col gap-3 w-3/4  mx-auto bg-gray-500 text-white p-5 rounded justify-center">
        <div className="flex gap-3 w-full mx-auto  text-white  rounded justify-between">
          <div className="flex gap-1 flex-col text-start   text-white  rounded justify-between">
            <h3 className="font-bold text-md">Title</h3>
            <h3 className=" ">Description</h3>
          </div>
          <div className="flex gap-1 flex-col   text-white  rounded justify-center">
            <div className="flex gap-1 text-base text-white justify-between">
              <button className="bg-white border-green-400 rounded p-1 text-green-400">
                Complete
              </button>
              <button className="bg-white border-red-400 rounded p-1 text-red-400">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
