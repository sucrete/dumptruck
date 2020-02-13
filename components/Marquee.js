const Marquee = props => (
  <div className="marquee">
    <a id="marqLink" href="/">
      <img
        className="guc"
        alt="logo for dumpTRUCK a dump.fm gallery showcase"
        src="/dumpTRUCKlogo.svg"
      />
    </a>
    <hr />
    <div className="description">{props.children}</div>
    <style jsx>{`
      .description,
      .description > * {
        font-family: "America Expanded Fat", sans-serif;
        margin-left: 5px;
        margin-top: 20px;
        word-break: break-word;
        hyphens: auto;
      }

      #marqLink {
        width: 100%;
        align-content: right;
      }
      .guc {
        width: 175px;
        margin-bottom: 12px;
        margin-top: 3px;
      }
      .marquee {
        background: #f8f8f8;
        padding-left: 20px;
        padding-top: 20px;
        padding-right: 20px;
      }
      hr {
        margin: 0px 5px;
      }
      @font-face {
        font-family: "America Expanded Regular";
        src: url("/fonts/GT-America-Expanded-Regular.otf") format("opentype");
        font-display: auto;
      }
      @font-face {
        font-family: "America Expanded Fat";
        src: url("/fonts/GT-America-Expanded-Bold.otf") format("opentype");
        font-display: auto;
      }
    `}</style>
  </div>
);

export default Marquee;
