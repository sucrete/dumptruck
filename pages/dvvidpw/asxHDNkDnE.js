import Dump from "../../components/Dump";
const sourceUrls = [
  "/asxHDNkDnE--0.jpg",
  "/asxHDNkDnE--1.png",
  "/asxHDNkDnE--2.gif",
  "/asxHDNkDnE--3.gif",
  "https://media.giphy.com/media/hTNwEtvTGK9KrY5kes/giphy.gif",
  "/asxHDNkDnE--3.gif",
  "/asxHDNkDnE--2.gif",
  "/asxHDNkDnE--1.png",
  "/asxHDNkDnE--0.jpg",
];

export default function asxHDNkDnE() {
  return (
    <div>
      <Dump id="dvvidpw">
        {sourceUrls.map((url, index) => (
          <img class="workComponent" src={url} key={index} />
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
