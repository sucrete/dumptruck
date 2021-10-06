import Dump from "../../components/Dump";
const sourceURLS = ["nprmpQpMeH--0.gif", "nprmpQpMeH--1.gif"];
export default function nprmpQpMeH() {
  return (
    <div>
      <Dump id="cosmicdesert">
        {sourceURLS.map((url, index) => (
          <img className="workComponent" src={`/${url}`} key={index} />
        ))}
      </Dump>
      <style jsx>{`
        .workComponent {
          max-width: 425px;
        }
      `}</style>
    </div>
  );
}
