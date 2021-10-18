import Dump from "../../components/Dump";
const sourceURLS = [
  "/VFunP8NRhb--0.gif",
  "/VFunP8NRhb--1.png",
  "/VFunP8NRhb--2.gif",
  "/VFunP8NRhb--3.gif",
  "/VFunP8NRhb--4.gif",
];
export default function VFunP8NRhb() {
  return (
    <div>
      <Dump id="weirdnumber">
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
