import Dump from "../../components/Dump";
const sourceURLS = [
  "/Tu1yarVqwK--0.gif",
  "/Tu1yarVqwK--1.gif",
  "/Tu1yarVqwK--2.jpg",
  "/Tu1yarVqwK--3.gif",
  "/Tu1yarVqwK--4.gif",
];
export default function Tu1yarVqwK() {
  return (
    <div>
      <Dump id="polymer">
        {sourceURLS.map((url, index) => (
          <img className="workComponent" src={url} key={index} />
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
