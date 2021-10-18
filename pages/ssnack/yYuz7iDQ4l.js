import Dump from "../../components/Dump";
const sourceURLS = [
  "/yYuz7iDQ4l--0.png",
  "/yYuz7iDQ4l--1.png",
  "/yYuz7iDQ4l--2.jpeg",
];
export default function yYuz7iDQ4l() {
  return (
    <div>
      <Dump id="ssnack">
        {sourceURLS.map((url) => (
          <img className="workComponent" src={url} key={url} />
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
