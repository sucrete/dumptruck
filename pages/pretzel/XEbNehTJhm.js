import Dump from "../../components/Dump";
const sourceURLS = [
  "/XEbNehTJhm--0.gif",
  "/XEbNehTJhm--1.gif",
  "/XEbNehTJhm--2.jpg",
];
export default function XEbNehTJhm() {
  return (
    <div>
      <Dump id="pretzel">
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
