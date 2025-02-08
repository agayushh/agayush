import profile from "../assets/githubprofile.jpg";

export default function About() {
  return (
    <div className="relative">
      <img
        src={profile}
        alt="Progile"
        className="absolute w-[100%] h-[400px] object-cover"
      />

      <img
        src={profile}
        alt="Profile"
        className=" absolute h-60 w-60 border-white border-4 rounded-full z-10 mt-[300px] ml-9"
      />
    </div>
  );
}
