interface Props{
   navLinks: string[];   
}

export const Navbar = ({navLinks}:Props) => {
{navLinks.map((links) => <> <a href="#" className="text-white px-4 py-2 hover:bg-gray-700">{links}</a>
</>)}
}