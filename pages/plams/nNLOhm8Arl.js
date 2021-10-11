import Dump from "../../components/Dump";
const sourceURLS = new Array(36).fill(0);
export default function nNLOhm8Arl() {
  return (
    <div>
      <Dump id="plams">
        {sourceURLS.map((item, index) => {
          return index % 2 == 0 ? (
            <img
              className="workComponent"
              src={`/nNLOhm8Arl--0.jpg`}
              key={index}
            />
          ) : (
            <img
              className="workComponent"
              src={`/nNLOhm8Arl--1.gif`}
              key={index}
            />
          );
        })}
      </Dump>
      <style jsx>{`
        .workComponent {
          max-width: 425px;
        }
      `}</style>
    </div>
  );
}
