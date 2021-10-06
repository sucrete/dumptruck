import Dump from "../../components/Dump";
const sourceURLS = [
  "/peCbJjWHxV--0.png",
  "/fingerdance.gif",
  "/peCbJjWHxV--1.png",
  "/peCbJjWHxV--2.gif",
];
export default function peCbJjWHxV() {
  return (
    <div>
      <Dump id="isaac">
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
