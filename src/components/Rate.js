export default function Rate(props) {
  return (
    <div className="flex justify-around ">
      <span
        onClick={onclick}
        className="bg-[#252D37] py-2 px-4 rounded-full hover:bg-slate-400/50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 active:bg-[#FB7413] cursor-pointer"
      >
        {props.id}
      </span>
    </div>
  );
}
