import Dump from "../../components/Dump";
const sourceURLS = [
  "/GX7xU8SfpI--0.jpeg",
  "/GX7xU8SfpI--1.png",
  "/GX7xU8SfpI--2.jpeg",
];
export default function GX7xU8SfpI() {
  return (
    <div>
      <Dump id="roppercat">
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
