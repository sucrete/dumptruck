import Dump from "../../components/Dump";
const sourceURLS = [
  "/kgMDkv7cQz--0.gif",
  "/kgMDkv7cQz--1.gif",
  "/kgMDkv7cQz--2.png",
];
export default function kgMDkv7cQz() {
  return (
    <div>
      <Dump id="glasspopcorn">
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
