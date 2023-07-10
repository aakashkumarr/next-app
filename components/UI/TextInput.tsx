
export default function  TextInput(props:{placeholder?:string,name?:string,id?:string,className?:string}){
    return<label className="relative block">
    <span className="sr-only">Search</span>
    <input {...props} className={"placeholder:italic placeholder:text-slate-400 text-black my-2 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm;"+props.className} type="text" />
  </label>

}