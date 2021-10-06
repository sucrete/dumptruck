import Dump from "../../components/Dump";
const sourceURLS = [
  "/i80DYemRih--0.png",
  "/i80DYemRih--1.png",
  "/i80DYemRih--2.png",
  "/i80DYemRih--3.gif",
  "/i80DYemRih--4.png",
  "/i80DYemRih--5.png",
];
export default function i80DYemRih() {
  return (
    <div>
      <Dump id="carjacker">
        {sourceURLS.map((url) => (
          <img className="workComponent" src={url} />
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
