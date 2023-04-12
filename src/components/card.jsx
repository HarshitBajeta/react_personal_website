function Cards(props){
  return (
    <div className='space-y-4 text-center bg-[#1f0732] rounded-tr-[1rem] rounded-b-[1rem] hover:bg-opacity-10 hover:border-y-cyan-700 hover:border-[1px] cursor-default  hover:border-x-fuchsia-700 shadow-md shadow-slate-500 hover:shadow-none max-w-xs pt-3 pb-6'>
     <img src={props.img} className="h-[50%]" />
     <p className="font-medium">{props.title}</p>
     <p className='px-1'>{props.info}</p>
    <button className=" px-1 hover:border-b-[1px] rounded-md hover:border-fuchsia-900 "><a className="no-underline" href={props.path}>Learn More</a></button>
    
    </div>
  );
}
export default Cards;