import Dump from "../../components/Dump";
const sourceURLS = [
  "/LY8p70ewgW--0.png",
  "/LY8p70ewgW--1.png",
  "/LY8p70ewgW--2.jpeg",
];
export default function LY8p70ewgW() {
  return (
    <div>
      <Dump id="reverberasia">
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
