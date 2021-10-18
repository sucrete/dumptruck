import Dump from "../../components/Dump";
const sourceURLS = [
  "/mh8bV5TDIM--0.gif",
  "/mh8bV5TDIM--1.png",
  "/mh8bV5TDIM--2.png",
  "/mh8bV5TDIM--3.gif",
];
export default function mh8bV5TDIM() {
  return (
    <div>
      <Dump id="slugg">
        {sourceURLS.map((url) => (
          <img className="workComponent" src={url} key={url} />
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
