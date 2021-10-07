import Dump from "../../components/Dump";
const sourceURLS = [
  "/Om4hKmsSCi--0.png",
  "/Om4hKmsSCi--1.gif",
  "/Om4hKmsSCi--2.gif",
  "/Om4hKmsSCi--3.png",
  "/Om4hKmsSCi--4.png",
  "/Om4hKmsSCi--5.png",
  "/Om4hKmsSCi--6.png",
  "/Om4hKmsSCi--7.png",
  "/Om4hKmsSCi--8.png",
];
export default function Om4hKmsSCi() {
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
