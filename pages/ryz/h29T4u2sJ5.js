import Dump from "../../components/Dump";
const sourceURLS = [
  "/h29T4u2sJ5--0.gif",
  "/h29T4u2sJ5--1.gif",
  "/h29T4u2sJ5--2.png",
];
export default function h29T4u2sJ5() {
  return (
    <div>
      <Dump id="ryz">
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
