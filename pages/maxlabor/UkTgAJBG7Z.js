import Dump from "../../components/Dump";
const sourceURLS = ["/pinerack1.gif", "/pinerack2.gif", "/pinerack3.gif"];
export default function UkTgAJBG7Z() {
  return (
    <div>
      <Dump id="maxlabor">
        {sourceURLS.map(url => (
          <img className="workComponent" src={url} />
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
