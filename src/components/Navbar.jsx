const navBarItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Experience",
    path: "/",
  },
  {
    name: "Events",
    path: "/",
  },
  {
    name: "Contacts",
    path: "/",
  },
];

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-center gap-x-20 h-16 items-center bg-black">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-inherit-purple-400 via-green-300 to-orange-400 flex gap-x-24">
          {navBarItems.map((item, index) => {
            return (
              <div
                className="hover:scale-110 hover:text-white transition duration-300"
                key={index}
              >
                <div className=" ">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
