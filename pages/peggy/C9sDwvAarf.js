import Dump from "../../components/Dump";
const sourceURLS = [
  "/C9sDwvAarf--0.gif",
  "/C9sDwvAarf--1.jpeg",
  "/C9sDwvAarf--2.gif",
];
export default function C9sDwvAarf() {
  return (
    <div>
      <Dump id="peggy">
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
