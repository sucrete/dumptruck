import Dump from "../../components/Dump";
const sourceURLS = [0, 1, 2, 3];
export default function Yf8AAMBcuO() {
  return (
    <div>
      <Dump id="photocopy">
        {sourceURLS.map((url) => (
          <img
            className="workComponent"
            src={`/Yf8AAMBcuO--${url}.png`}
            key={url}
          />
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
