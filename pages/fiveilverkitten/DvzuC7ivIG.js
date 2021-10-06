import Dump from "../../components/Dump";
const sourceURLS = ["DvzuC7ivIG--0.png", "icecream.gif", "DvzuC7ivIG--1.png"];
export default function DvzuC7ivIG() {
  return (
    <div>
      <Dump id="5ilverkitten">
        {sourceURLS.map((url, index) => (
          <img className="workComponent" src={`/${url}`} key={index} />
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
