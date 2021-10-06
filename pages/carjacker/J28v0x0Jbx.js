import Dump from "../../components/Dump";
const sourceURLS = [
  "/1351018122515dumpfmcarjackckerohlala_1351202896_frankhats.gif",
  "/J28v0x0Jbx--1.png",
  "/J28v0x0Jbx--2.png",
  "/J28v0x0Jbx--3.png",
];
export default function J28v0x0Jbx() {
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
