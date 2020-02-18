import Dump from "../../components/Dump";
const sourceURLS = [
  "https://i.imgur.com/raEJTPZ.jpg",
  "https://lh3.googleusercontent.com/pyvllXZjnxY92PrSgO8DqzYsn_aXgvg_ixvEXBnlaZUOSDqxTgV-4gtnCLqVdVi6sFAU-VW2Aaxb8zuprLoYHnGIBYkcIUf-G7O6HM_W39ro-N9AcF2v2d1of8jfPa1Yv_-FyPo_qtK-nwZLGqTEsaOpG2odxYC8-pJLfYEuGymUU3wb8aCbcKgMxefOgxWV3ETD9oUWsvSgcOCOOguDh4OPM4BJC1VFJHHJa0KocoVAxCMMo4aIQXWKV67qp6L9GrtrsL3gI07v_DNwBi6AZHdpQW2xTPfuhScn8fUdX-xslCzjl7dJWC3Rz3V7xY0Cgc4ggLJ8cX--CEOsmfbH6tGjokNSRzdmlMfNSmeC7601oFZxbzNMaDwgqiT6MyBjym3WKc4u4sNcSBeJAw6yN1SsD4iPnH6iiz841YSY7_bZk5hHX4edwNUv28FyW6r7XW26fCJ2etPxM02aC3hMCAhOeq7c5D7pweWqvp-X5_PBg6FBebPkR5hj2MCmJEG2JBJvGtyscinbzWwFb_UFJMhQOHIOvZRJY0wpXY6_45dSIDfuN-nDcagbFAgkk7z3YLuXR0-K5kNjEqJakw89tt5xoWghsRQkLQPSRgTN3C-Vj8MBEFf0X8yBdG-YHMv_rouicM0o4PY4AnIH5Tjf7vjlwsKBpAqvyt9oQqw_n-V8bNOlNro=w1440-h550-ft",
  "https://lh3.googleusercontent.com/hXec_J8DmD_EWqi7ec4QJlFb0yhc6R6bW62U_u_WSEe602qFRUpcpjn3ff83pqDOpHTNvcgUCDP-hsOKz3vMvJykU3stAaLP0hK5SopdNsVNB8HrN7E6J1fdH5x2ZOuhwMmJnGQsfXzJpogloqhW7V7m0ghOV5G636QPZrOrbQ7fhxacWJw9ru2wI-phSn7zIFG3sh6apufdfJ6OK9pHrTYnp7j6U2eEhYXqSRCbMgtsb7_B_YFERvvastf5WKETrl0IO7Fc_WXGtFDTMHnY16Sr0ISkLvwe5nWwAJsC8ZJbBwGJcqhERpER56AMjp7tGwgIfxWPzw2sjN_s77yEqwK7xBKHfNe3ATyDdFHSkngIPu47m-H884FP6ymxveE0nWQQ21Lag6M9SBSAWb0rWCyVPQyJmQhtbk-Thf1LzsmscjqFcYGyBCYrCzsnM3hI2rBeivkejXUX3YWp59jXlqk6er3DO9JBItLI4EidwZKzPdjAV7fv_H6r85CGh8_ttXbIxK9emYGVgLr97HcvYgor5xfDcvsiJxss0mXJy9AVeOsajMnkWPVHIs07_2zdLTxuFmZEZghtsT-cK15CC3w1qJKpdKrW_zu3QvibwRy0Um0uOvQGSDr5Qow-umdhmXTinhaTp7BvqCcBEJzT6emUWN1ybwgAo-JsTZfHT8BtYtHP6es=w1440-h550-ft"
];
export default function I4kcIEpfoe() {
  return (
    <div>
      <Dump id="melipone">
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
