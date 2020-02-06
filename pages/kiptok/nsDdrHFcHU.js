import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/twRVXWaSd1dtjOFy8WHojMZZ6KlH-Ww7A10-ZAdLrWq7ysmrN5-U1CmaH_zOC9hYdNzPd-MN4edGcYftddcXKexpC4-gqaiUk9xQza76UPAR25qD44HihvvCunCdGdsnLFSFHJn2QnFcRFcGB6TmtJB_ACxEDJE7Avve8tqtLUvxDb2n7S3JqepXoumXo-ls7kwDCnOxzs2M5vo2PWCnh4QeSP-MqaqKpJ8beMJbacmf-P74qM6T4sSBp0YJ_Et3fopA7mx6SETFKvkR2-qjdFO7xHfxLA3dx90t7CAHtYjpcY5oMqWlSyCt3AslmJISITBXUcjk3bQhMJ90Z8Fn6auakGp4bJGCp7pb_EmUOL6JXdfpDj6EsXBI2xwL-dYZsfFs_JP2qJsgRsgOatyg1StHPoEQJQS4luL2b7gQ5FS6m4xpGxgheFAA-GbCWeTm6vZqmucRHIdkzhHTFGqxRIyzY-_7nuuIjyr-0M14YdTBaSRNj0B8UDl7jk_dUQ9nyjrUWObP62uZWdBSBEWhR9Qr_CXTys2T90ZrKdt0O8QEljA32CasbIXeR8Eav8I7Lq-vnlvDYvuh8XDFWGuupNLbAdFYehsS8CyJFdtxqdwT5ERgLOP_2y520U700EQVuBkOk5E-qRDv8PyrlAwxdmqxq4YVOEpegMnD9fY3OFVgB9UmMoE=w1440-h479-ft",
  "https://lh3.googleusercontent.com/gjXjQ9HGpU4AShl3Bqdp89tjty_Pe_2B45N5JjNf4Ur-54eOpeT-K3iW4SeFvWA72zBPG61hjJvc_nodGFSiJouAJ_B9mOsVLAr26orF1FWthwb8xsQQrBEEPywGK9IFutdoPOrNag-7jjcUPJE9R_lsT2dt7R228PwIxmkI97xGDF9xKqDX6mK5dr8oebDHhRYqxmmA1SiVBeL-KetAh-cIseT7vCdDpakPOOFjNIuVIwlXcX2gGtPV_zK9y4Rcsuke6e80s36CI9ReaY-41HsCioI_80N3xcTPgDLiiDFEhdFtQ_CZG3_IOtddJMgYDRdRSOcPaWha0mXh1aZM0C6eRIFt4ovPyspHX4i39q64mmeAD8pNqPdRXUSL7okagEl4L3NUwHoYYbrHUKMe3sA6q1eWBAUduPok_CP6KGSXm5BeHTplwXwYgVn6hYFom-MsDaCDvqvOO_ph1Y-WbGoPOq9YKD3GWRUOhrNtNhsk-4QGaSNb1B2S32efdKLQc0VCo69argsm5lQI9qdHwvYipvLl5OvxRdH5jszG3yq4DcJ1_KFRBto1z4WMJvMeASjRgGc2S1aZktpt0qG6tDQYLNt84RW30Ijzmh_uexYw41G4tTxLl6AB_LTFEXkmHAg7K6VK9FQdiqXbTCfeuFtRQVPzt_R7qnImLaGy7Ydg7BhFpPU=w1440-h479-ft",
  "https://lh3.googleusercontent.com/z-EZlvhEP2dOj8vY8uXE64F7wqX8yVME2cP-80_1EsFd1ibLU-ytYKfoh5NFfwYx4LALoht1KVODF9p8Vm2LzX91L3eex7Rxam_sJCnDA48mRrll83Wa7nSE6Vw2dHRNH3-Bza4jLKYJ2uSI6fQ97HeXIuDoct90EVuWCzCMpgAXwR-TWLIFbONePpTr6nZbK3louAxzERrE3CTjZEVq153taqXXOZwhIOYklq5YIvosG0ng-VQkAmxGewrYIdwMhflhXtPw78HidW4flC5_QkrO8VEWRnJjhRRWhlUo0r8DNZGT4NDrRLbiuaIsHz2pSEni9y_6i7jsE-BCw0OjP7ssoxZ7CGInvrVs5AfjB0SUGv1nlFfnEpl4iG109yR7A8Rqs59_A0w5eCEMAoM_Q6iIL65fkqh2PS3lWBS0wuP8FqLM_e_7XrElQjZr_jOABsH_GH9qLcXIt1I9AMQfHTyl3Y1J7_WW5KTfe_3To_3dBwO76NlZizDN2PtzECSNt5W2lhy7Vzcnsj2zw3LucWCVxjrCyx4JsX6oCjBhGZ5nMXa98bwivBeHGlBANhGurhBx-eZD7GbfAD14Fw1aPOQexsZs04kw6eBZ6gu_pgLpKOFe3mWIyaf5-sgugVC4ogLprorbGlZFROBg7aQT95lqewaUcXD8g92ev4Fm9joHr3gNyRM=w1440-h479-ft"
];
export default function nsDdrHFcHU() {
  return (
    <div>
      <Dump id="kiptok">
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
