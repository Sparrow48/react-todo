import './style.css';

const App = () => {
  return (
    <div className="flex flex-col max-w-6xl gap-5 pt-5 mx-auto text-center md:pt-8 lg:28 xl:p-36">
      <h1 className="text-3xl font-bold test-">React todo app!</h1>
      <div className="flex flex-col justify-center gap-3 p-5 mx-auto text-white bg-gray-500 rounded lg:w-3/4 md:flex-row">
        <input
          type="text"
          className="p-2 border border-gray-400 rounded"
          placeholder="Add Title"
        />
        <input
          type="text"
          className="p-2 border border-gray-400 rounded"
          placeholder="Add Description"
        />
        <button className="p-2 text-white bg-blue-500 rounded">Add</button>
      </div>

      <div className="flex flex-col justify-center w-10/12 gap-3 p-5 mx-auto text-white bg-gray-500 rounded lg:w-3/4">
        <div className="flex flex-col justify-between w-full gap-3 mx-auto text-white rounded md:flex-row">
          <div className="flex flex-col justify-between gap-1 text-white rounded text-start">
            <h3 className="font-bold text-md">Title</h3>
            <h3 className="">Description</h3>
          </div>
          <div className="flex flex-col justify-center gap-1 text-white rounded">
            <div className="flex gap-3 text-base text-white md:justify-between">
              <button className="p-1 text-green-400 bg-white border-green-400 rounded">
                Complete
              </button>
              <button className="p-1 text-red-400 bg-white border-red-400 rounded">
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
