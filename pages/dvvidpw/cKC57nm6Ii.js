import Dump from "../../components/Dump";
const sourceURLS = [
  "cKC57nm6Ii--0.gif",
  "cKC57nm6Ii--1.gif",
  "cKC57nm6Ii--0.gif",
];
export default function cKC57nm6Ii() {
  return (
    <div>
      <Dump id="dvvidpw">
        {sourceURLS.map((url, index) => (
          <img className="workComponent" src={`/${url}`} key={index} />
        ))}
      </Dump>
      <style jsx>{`
        .workComponent {
          max-height: 400px;
          max-width: 500px;
        }
      `}</style>
    </div>
  );
}
