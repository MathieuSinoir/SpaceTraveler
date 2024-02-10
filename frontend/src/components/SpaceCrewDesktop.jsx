import { useContext, React } from "react";
import "../styles/SpaceCrewDesktop.css";
import FormContext from "../contexts/FormContext";

function SpaceCrewDesktop() {
  const guestUsername = useContext(FormContext);
  const allMembers = [
    {
      name: "Farah",
      role: "Spaceship Captain",
      img: "/src/assets/farah_icon.jpg",
    },
    {
      name: "Mathieu",
      role: "Astronaut-Researcher",
      img: "/src/assets/mathieu_icon.png",
    },
    {
      name: "Paul",
      role: "On-board Engineer",
      img: "/src/assets/paul_icon.jpg",
    },
    {
      name: "Thibault",
      role: "Payload Specialist",
      img: "/src/assets/thibault_icon.jpg",
    },
    { name: "Noemie", role: "Pilot", img: "/src/assets/noemie_icon.png" },
  ];

  return (
    <div className="desktopVersion">
      {allMembers.map((member) => (
        <div className={member.name}>
          <img src={member.img} alt="mettre alt" />
          <div className="NameRoleDesktop">
            <h2>
              <a href={member.github} rel="noopener noreferrer" target="_blank">
                {member.name}
              </a>
            </h2>
            <h3>{member.role}</h3>
          </div>
          <div className={`${member.name}Diagonal`}> </div>
        </div>
      ))}
      <div className="Guest">
        <img
          src="/src/assets/invitétest_icon.jpg"
          alt="Thomas Pesquet, french astronaut"
        />
        <div className="NameRoleDesktop">
          <h2>{guestUsername.formData.username}</h2>
          <h3>Space Tourist</h3>
        </div>
        <div className="GuestDiagonal"> </div>
      </div>
    </div>
  );
}

export default SpaceCrewDesktop;
