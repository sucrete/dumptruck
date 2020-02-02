import Marquee from "../components/Marquee";
import Body from "../components/ArtistBody";
import Link from "next/link";

const works = [
  "Om4hKmsSCi",
  "YqZmNPyL6L",
  "nsDdrHFcHU",
  "FDDGLaTJpX",
  "sjmnBqeus7",
  "WBE5xVtWzK"
];
export default function Kiptok() {
  return (
    <div className="page">
      <Marquee>
        <div className="profile">PROFILE</div>
        <div className="header">kiptok</div>
      </Marquee>
      <Body>
        {works.map(work => (
          <Link href="/[work]" as={`/${work}`}>
            <div className="fileName" key={work}>
              <span>kiptok/{work}.dump</span>
            </div>
          </Link>
        ))}
      </Body>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap");
        .profile {
          font-family: "Work Sans";
          font-size: 77%;
        }
        .fileName {
          text-align: right;
          border-bottom: 1px solid #e8e8e8;
          height: 25px;
          font-family: "Work Sans";
          border-top: 1px solid transparent;
          transition: all 0.25s;
          cursor: pointer;
          border-left: 8px solid #f8f8f8;
        }
        .fileName:hover {
          background: #f8f8f8;
        }
        .fileName span {
          vertical-align: middle;
          font-size: 0.8em;
          color: #484848;
          position: relative;
        }
        .page {
          margin: 10px;
          margin-top: 20px;
          padding-bottom: 100px;
        }
        .header {
          font-size: 3em;
          position: relative;
          margin-top: 6px;
          left: -3px;
          padding-bottom: 30px;
        }
      `}</style>
    </div>
  );
}
