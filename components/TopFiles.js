import Link from "next/link";

function returnArtists() {
  return [
    { id: "maxlabor", artist: "maxlabor" },
    { id: "kiptok", artist: "kiptok" },
    { id: "joy", artist: "joy" }
  ];
}

const TopFiles = () => (
  <div>
    {/* <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link> */}

    {returnArtists().map(artiste => (
      <div className="fileContainer" key={artiste.id}>
        <Link href="/[id]" as={`/${artiste.id}`}>
          <a>{artiste.artist}</a>
        </Link>
      </div>
    ))}

    <style jsx>{`
      h1,
      a {
        font-family: serif;
      }
      .fileContainer {
        padding: 10px 15px;
        border-radius: 5px;
        border: 1px solid #f8f8f8;
        margin-right: 12px;
        margin-bottom: 12px;
        display: inline-block;
        box-shadow:  3px 3px 0px rgba(0,0,0,0.1);
        cursor: pointer;
}
      }
      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: pink;
      }

      .fileContainer:hover a {
        opacity: 0.6;
      }
    `}</style>
  </div>
);

export default TopFiles;
