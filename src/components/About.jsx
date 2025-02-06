import profile from "../assets/githubprofile.jpg";

export default function About() {
  return (
    <div>
      <img src={profile} alt="Profile" className="h-52 w-52 rounded-full" />
    </div>
  );
}
