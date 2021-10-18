import Dump from "../../components/Dump";
const sourceURLS = [
  "https://media.giphy.com/media/efTlWxsgSS7tWy84vZ/giphy.gif",
  "/eBR6ZJDQNu.gif",
];
export default function eBR6ZJDQNu() {
  return (
    <div>
      <Dump id="pretzel">
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
