import Dump from "../../components/Dump";

export default function YQvTXQ3Tui() {
  return (
    <div>
      <Dump id="tommoody">
        {new Array(2).fill(0).map((url, index) => (
          <img
            className="workComponent"
            src={`/YQvTXQ3Tui--${index}.gif`}
            key={index}
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
