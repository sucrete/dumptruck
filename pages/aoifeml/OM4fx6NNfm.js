import Dump from "../../components/Dump";
const sourceURLS = [
  "/OM4fx6NNfm--0.gif",
  "/OM4fx6NNfm--1.gif",
  "/OM4fx6NNfm--2.png",
  "/OM4fx6NNfm--3.gif",
  "/OM4fx6NNfm--0.gif",
  "/OM4fx6NNfm--0.gif",
];
export default function OM4fx6NNfm() {
  return (
    <div>
      <Dump id="aoifeml">
        {sourceURLS.map((url) => (
          <img className="workComponent" src={url} />
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
