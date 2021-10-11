import Dump from "../../components/Dump";
const sourceURLS = [
  "/GT8GWQLpkq--0.png",
  "/GT8GWQLpkq--1.gif",
  "/GT8GWQLpkq--2.gif",
];
export default function GT8GWQLpkq() {
  return (
    <div>
      <Dump id="petrograd">
        {sourceURLS.map((url, index) => (
          <img className="workComponent" src={url} key={index} />
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
