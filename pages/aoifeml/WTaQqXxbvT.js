import Dump from "../../components/Dump";
const sourceURLS = [
  "/WTaQqXxbvT--0.png",
  "/WTaQqXxbvT--1.png",
  "/WTaQqXxbvT--2.gif",
  "/WTaQqXxbvT--1.png",
  "/WTaQqXxbvT--2.gif",
  "/WTaQqXxbvT--1.png",
  "/OM4fx6NNfm--1.gif",
];
export default function WTaQqXxbvT() {
  return (
    <div>
      <Dump id="aoifeml">
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
