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
      <div className="flex justify-center gap-x-20 h-16 items-center bg-black text-white">
        {navBarItems.map((item, index) => {
          return (
            <div
              className="hover:scale-110 hover:text-gray-400 transition duration-300"
              key={index}
            >
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
