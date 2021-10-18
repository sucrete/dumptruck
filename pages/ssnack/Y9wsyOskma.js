import Dump from "../../components/Dump";
const sourceURLS = [
  "/Y9wsyOskma--0.png",
  "/Y9wsyOskma--1.gif",
  "/Y9wsyOskma--2.gif",
  "/Y9wsyOskma--3.gif",
  "/Y9wsyOskma--4.gif",
];
export default function Y9wsyOskma() {
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
