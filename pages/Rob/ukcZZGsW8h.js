import Dump from "../../components/Dump";
const sourceURLS = [
  "/ukcZZGsW8h--0.gif",
  "/ukcZZGsW8h--1.png",
  "/ukcZZGsW8h--2.gif",
  "/ukcZZGsW8h--1.png",
];
export default function ukcZZGsW8h() {
  return (
    <div>
      <Dump id="Rob">
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
