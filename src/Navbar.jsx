import { HomeIcon } from "@heroicons/react/16/solid";
function Navbar(){
    return(
        <nav className="bg-[#f7f0e7] shadow-md">
            <div className="max-w-7*1 mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <HomeIcon className="h-8 w-8 text-blue-600"/>
                <h1 className="text-3*1 font-bold text-gray-900">CauseHouse</h1>
                </div>
                <button className="px-5 p-2 rounded-full border border-black text-black  font-medium  hover:text-white transition hover:bg-gray-100">Menu
                
                </button>
            </div>
            <div className="w-full h-px bg-black"></div>
        </nav>
    );
}
export default Navbar;