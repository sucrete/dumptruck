import Dump from "../../components/Dump";
const sourceURLS = [
  "/nsDdrHFcHU--0.gif",
  "/nsDdrHFcHU--1.jpg",
  "/nsDdrHFcHU--2.png",
];
export default function nsDdrHFcHU() {
  return (
    <div>
      <Dump id="kiptok">
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
