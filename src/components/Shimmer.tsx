// shimmer UI is skeleton of post-rendered components. It's like pre-rendered UI.
// as soon as the page loads, we want the user to see the skeleton of the UI instead of waiting for results to be loaded
const Shimmer = () => {
  return (
    <>
     <div className="flex buttons-container p-4 items-center justify-center">
        <input className="border border-solid border-black py-1 px-2 rounded"
          type="text"
          placeholder="search restaurants..."
        />
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
        >
          Search
        </button>
      
        <button
          className="px-4 py-2 bg-gray-300 m-4 rounded-lg"
        >
          Top Rated Restaurants
        </button>

        <button
          className="px-4 py-2 bg-slate-300 m-4 rounded-lg"
        >
          All Restaurants
        </button>
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="m-4 p-4 w-[250px] h-[26rem] bg-slate-300 rounded-xl hover:bg-slate-400 hover:shadow-xl">Card</div>
        <div className="m-4 p-4 w-[250px] h-[26rem] bg-slate-300 rounded-xl hover:bg-slate-400 hover:shadow-xl">Card</div>
        <div className="m-4 p-4 w-[250px] h-[26rem] bg-slate-300 rounded-xl hover:bg-slate-400 hover:shadow-xl">Card</div>
        <div className="m-4 p-4 w-[250px] h-[26rem] bg-slate-300 rounded-xl hover:bg-slate-400 hover:shadow-xl">Card</div>
        <div className="m-4 p-4 w-[250px] h-[26rem] bg-slate-300 rounded-xl hover:bg-slate-400 hover:shadow-xl">Card</div>
        <div className="m-4 p-4 w-[250px] h-[26rem] bg-slate-300 rounded-xl hover:bg-slate-400 hover:shadow-xl">Card</div>
        <div className="m-4 p-4 w-[250px] h-[26rem] bg-slate-300 rounded-xl hover:bg-slate-400 hover:shadow-xl">Card</div>
        <div className="m-4 p-4 w-[250px] h-[26rem] bg-slate-300 rounded-xl hover:bg-slate-400 hover:shadow-xl">Card</div>
        <div className="m-4 p-4 w-[250px] h-[26rem] bg-slate-300 rounded-xl hover:bg-slate-400 hover:shadow-xl">Card</div>
        <div className="m-4 p-4 w-[250px] h-[26rem] bg-slate-300 rounded-xl hover:bg-slate-400 hover:shadow-xl">Card</div>
      </div>
    </>
  );
};

export default Shimmer;
