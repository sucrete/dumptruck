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
      <Link href="/[id]" as={`/${artiste.id}`}>
        <div className="fileContainer" key={artiste.id}>
          <img className="iconImg" src="/Folder-icon.png" />
          <a>{artiste.artist}</a>
        </div>
      </Link>
    ))}

    <style jsx>{`
      h1,
      a {
        font-family: serif;
      }
      .fileContainer {
        padding: 10px 15px;
        border-radius: 5px;
        border: 1px solid #d8d8d8;
        margin-right: 12px;
        margin-bottom: 12px;
        display: inline-block;
        transition: all 0.3s;
        box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
        cursor: pointer;
      }
      .fileContainer:hover {
        box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.05);
        border: 1px solid #c8c8c8;
      }
      .iconImg {
        display: inline-block;
        margin: 0;
        padding: 0;
      }
      .fileContainer > * {
        vertical-align: middle;
      }
      a {
        text-decoration: none;
        color: gray;
        padding-left: 9px;
        transition: all 0.3s;
      }

      .fileContainer:hover a {
        color: #484848;
      }
    `}</style>
  </div>
);

export default TopFiles;
