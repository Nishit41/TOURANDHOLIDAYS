import { MdOutlineEmail } from "react-icons/md";

interface Props{
  ContactDetails?: String;
  mobNumber?: number;
}

export const ContactDetails =({ContactDetails , mobNumber}:Props)=>{
return( <div className="flex justify-between text-white items-center bg-blue-700 py-2">
  <div className="flex items-center p-2"><MdOutlineEmail/><h2>{ContactDetails}</h2></div>
   <div>{mobNumber}</div>
</div>)
}