import { useContext, React } from "react";
import "../styles/SpaceCrewMobile.css";
import FormContext from "../contexts/FormContext";

function SpaceCrewMobile() {
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
    {
      name: `${guestUsername.formData.username}`,
      role: "Space Tourist",
      img: "/src/assets/invitétest_icon.jpg",
    },
  ];
  return (
    <div className="mobileVersion">
      <h1 className="titleSpaceCrew">our Crew</h1>
      <div className="spaceCrewBox">
        {allMembers.map((member, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="border">
            <img className="profileIcon" src={member.img} alt={member.name} />
            <div className="titleProfile">
              <h2 className="nameRole">{member.name}</h2>
              <h3 className="nameRole">{member.role}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpaceCrewMobile;
