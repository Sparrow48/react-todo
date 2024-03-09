import { useEffect, useState } from 'react';
import './style.css';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { axiosInstance } from './utils/axiosInstance';

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const App = () => {
  const [todo, setTodo] = useState<Todo[] | []>([]);

  useEffect(() => {
    axiosInstance.get('/todo').then((response) => {
      setTodo(response.data);
    });
  }, []);
  return (
    <div className="h-screen bg-cyan-900">
      <div className="flex flex-col justify-between h-screen max-w-6xl gap-5 px-2 py-5 mx-auto text-center">
        <div className="flex flex-col gap-5 px-2 py-5">
          <h1 className="pb-3 text-3xl font-bold text-white">
            React todo app!
          </h1>
          <div className="p-5 mx-auto rounded bg-cyan-700 lg:w-3/4">
            <div className="flex flex-col items-center justify-center gap-3 mx-auto bg-cyan-700 lg:w-10/12 ">
              <div className="flex justify-end w-full">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-400 rounded focus:outline-none "
                  placeholder="Add Title"
                />
              </div>
              <div className="flex justify-end w-full ">
                <textarea
                  className="w-full p-2 border border-gray-400 rounded focus:outline-none"
                  placeholder="Add Description"
                />
              </div>
              <div className="flex justify-end w-full">
                <button className="p-2 px-4 text-white bg-blue-500 rounded">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center w-10/12 gap-3 mx-auto text-white rounded bg-cyan-700 lg:w-3/4">
            <div className="divide-y divide-white">
              {todo?.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="flex flex-col justify-between w-full gap-3 p-5 mx-auto text-white rounded md:flex-row"
                  >
                    <div className="flex flex-col justify-between gap-1 text-white rounded text-start">
                      <h3 className="font-bold text-md">{item.title}</h3>
                      <h3 className="">{item.description}</h3>
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
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-2 mx-auto text-center text-white rounded bg-cyan-700 lg:w-3/4">
          <div className="flex flex-wrap items-center justify-center lg:gap-2 ">
            <p className="text-lg font-semibold lg:pl-2">Usages Stacks : </p>
            <div className="flex items-center justify-center gap-1 p-2">
              <a
                href="https://webpack.js.org/"
                target="_blank"
                className="px-1 bg-white rounded-tl-lg rounded-br-lg hover:text-blue-700 text-stone-400"
              >
                Webpack
              </a>
              <a
                href="https://react.dev/"
                target="_blank"
                className="px-1 bg-white rounded-tl-lg rounded-br-lg hover:text-blue-700 text-stone-400"
              >
                React
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="px-1 bg-white rounded-tl-lg rounded-br-lg hover:text-blue-700 text-stone-400"
              >
                Tailwind
              </a>
              <a
                href="https://vercel.com"
                target="_blank"
                className="px-1 bg-white rounded-tl-lg rounded-br-lg hover:text-blue-700 text-stone-400"
              >
                Vercel
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-8">
            <p>
              <FaGithub size="24px" />
            </p>
            <p>
              <FaLinkedin size="24px" />
            </p>
            <p>
              <FaFacebook size="24px" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
