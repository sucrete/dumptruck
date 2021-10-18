import Dump from "../../components/Dump";

export default function Rva2Mhxtjs() {
  return (
    <div>
      <Dump id="Rob">
        {new Array(2).fill(0).map((url, index) => (
          <img
            className="workComponent"
            src={`/Rva2Mhxtjs--${index}.gif`}
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
