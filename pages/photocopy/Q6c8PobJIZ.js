import Dump from "../../components/Dump";
const sourceURLS = [
  "/Q6c8PobJIZ--0.gif",
  "/Q6c8PobJIZ--1.png",
  "/Q6c8PobJIZ--2.png",
  "/Q6c8PobJIZ--3.png",
];
export default function Q6c8PobJIZ() {
  return (
    <div>
      <Dump id="photocopy">
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
