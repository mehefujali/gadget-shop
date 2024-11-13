import useDocumentTitle from "../../utility/useDocumentTitle";


const Statistics = () => {
      useDocumentTitle("statistics")
      return (
            <div>
                  <div className="container mx-auto flex flex-col text-center items-center justify-center border-2 min-h-[30vh] rounded-xl border-gray-300">
                        <img className=" opacity-30 max-w-32" src="https://cdn-icons-png.flaticon.com/512/7466/7466140.png" alt="" />
                        <h1 className=" text-gray-400 text-3xl font-thin">No Data </h1>
                  </div>
            </div>
      );
};

export default Statistics;