import Link from "next/link";

const artists = [
  "maxlabor",
  "kiptok",
  "joy",
  "5ilverkitten",
  "blingscience",
  "D_MAGIK",
  "FAUXreal",
  "glasspopcorn",
  "grass",
  "ice",
  "petrograd",
  "polymer",
  "qil",
  "robocide",
  "Samantha",
  "sidonie",
  "ssnack",
  "wakefulness",
  "1800dogcig",
  "aoifeml",
  "cosmicdesert",
  "decrvnk",
  "dvvidpw",
  "frankhat",
  "girlafraid",
  "gordonramsay",
  "gosane",
  "GucciSoFlosy",
  "gularjinoish",
  "illalli",
  "isaac",
  "kalan",
  "kintrala",
  "lianne",
  "loserbitch",
  "melipone",
  "peggy",
  "petrograd",
  "photocopy",
  "plams",
  "polymer",
  "pretzel",
  "pummp",
  "reverberasia",
  "Rob",
  "roppercat",
  "ryz",
  "Seacrestcheadle",
  "selfmade",
  "slugg",
  "sol",
  "tommoody",
  "weirdnumber",
  "yo_matty"
];

const TopFiles = () => (
  <div>
    {artists.map(artiste => (
      <Link href="/[artiste]" as={`/${artiste}`}>
        <div className="fileContainer" key={artiste}>
          <img className="iconImg" src="/Folder-icon.png" />
          <a>{artiste}</a>
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
        font-family: "America Expanded Regular", sans-serif;
        font-size: 0.9em;
      }

      .fileContainer:hover a {
        //
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
