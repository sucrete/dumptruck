import Link from "next/link";

const artists = [
  { pageName: "maxlabor", artistName: "maxlabor" },
  { pageName: "kiptok", artistName: "kiptok" },
  { pageName: "joy", artistName: "joy" },
  { pageName: "fiveilverkitten", artistName: "5ilverkitten" },
  { pageName: "carjacker", artistName: "carjacker" },
  { pageName: "D_MAGIK", artistName: "D_MAGIK" },
  { pageName: "FAUXreal", artistName: "FAUXreal" },
  { pageName: "glasspopcorn", artistName: "glasspopcorn" },
  { pageName: "grass", artistName: "grass" },
  { pageName: "ice", artistName: "ice" },
  { pageName: "polymer", artistName: "polymer" },
  { pageName: "qil", artistName: "qil" },
  { pageName: "robocide", artistName: "robocide" },
  { pageName: "sidonie", artistName: "sidonie" },
  { pageName: "ssnack", artistName: "ssnack" },
  { pageName: "eighteenhundreddogcig", artistName: "1800dogcig" },
  { pageName: "aoifeml", artistName: "aoifeml" },
  { pageName: "cosmicdesert", artistName: "cosmicdesert" },
  { pageName: "decrvnk", artistName: "decrvnk" },
  { pageName: "dvvidpw", artistName: "dvvidpw" },
  { pageName: "girlafraid", artistName: "girlafraid" },
  { pageName: "gordonramsay", artistName: "gordonramsay" },
  { pageName: "gosane", artistName: "gosane" },
  { pageName: "GucciSoFlosy", artistName: "GucciSoFlosy" },
  { pageName: "gularjinoish", artistName: "gularjinoish" },
  { pageName: "illalli", artistName: "illalli" },
  { pageName: "isaac", artistName: "isaac" },
  { pageName: "kalan", artistName: "kalan" },
  { pageName: "kintrala", artistName: "kintrala" },
  { pageName: "lianne", artistName: "lianne" },
  { pageName: "loserbitch", artistName: "loserbitch" },
  { pageName: "melipone", artistName: "melipone" },
  { pageName: "peggy", artistName: "peggy" },
  { pageName: "petrograd", artistName: "petrograd" },
  { pageName: "photocopy", artistName: "photocopy" },
  { pageName: "plams", artistName: "plams" },
  { pageName: "polymer", artistName: "polymer" },
  { pageName: "pretzel", artistName: "pretzel" },
  { pageName: "pummp", artistName: "pummp" },
  { pageName: "reverberasia", artistName: "reverberasia" },
  { pageName: "Rob", artistName: "Rob" },
  { pageName: "roppercat", artistName: "roppercat" },
  { pageName: "ryz", artistName: "ryz" },
  { pageName: "Seacrestcheadle", artistName: "Seacrestcheadle" },
  { pageName: "selfmade", artistName: "selfmade" },
  { pageName: "slugg", artistName: "slugg" },
  { pageName: "sol", artistName: "sol" },
  { pageName: "tommoody", artistName: "tommoody" },
  { pageName: "weirdnumber", artistName: "weirdnumber" },
  { pageName: "yo_matty", artistName: "yo_matty" }
];

const TopFiles = () => (
  <div>
    {artists.map(artiste => (
      <Link href="/[artiste.artistName]" as={`/${artiste.pageName}`}>
        <div className="fileContainer" key={artiste.artistName}>
          <img className="iconImg" src="/Folder-icon.png" />
          <a>{artiste.artistName}</a>
        </div>
      </Link>
    ))}

    <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap");

      h1,
      a {
        font-family: serif;
      }
      .fileContainer {
        padding: 10px 15px;
        border-radius: 5px;
        border: 1px solid #d0d0d0;
        margin-right: 12px;
        margin-bottom: 12px;
        display: inline-block;
        transition: all 0.2s;
        box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.19);
        cursor: pointer;
      }
      .fileContainer:hover {
        box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.14);
        // border: 1px solid #c8c8c8;
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
        color: #484848;
        padding-left: 9px;
        transition: all 0.3s;
        font-family: "Work Sans", sans-serif;
        font-size: 0.9em;
      }
      @font-face {
        font-family: "America Expanded Regular";
        src: url("/fonts/GT-America-Expanded-Regular.otf") format("opentype");
        font-display: auto;
      }
    `}</style>
  </div>
);

export default TopFiles;
