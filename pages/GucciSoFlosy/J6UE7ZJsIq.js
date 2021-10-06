import Dump from "../../components/Dump";
const sourceURLS = [
  "https://media.giphy.com/media/U6dz3IgpLzciLPnmKs/giphy.gif",
  "https://media.giphy.com/media/hTNaNA1CBl9vN9ADbV/giphy.gif",
];
export default function J6UE7ZJsIq() {
  return (
    <div>
      <Dump id="GucciSoFlosy">
        {sourceURLS.map((url, index) => (
          <img className="workComponent" src={url} key={index} />
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
