import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/w1ClQUTr9Lz1Pk1n1PqUiOznYYyRpuKGynS4kzGW29tgGANBq3kTxNXgGPcy7Fo7rugG42ilhv8f80bkgqEcoq2z3Oa_k_e3F26ADDehxnFZ4mO8duZIXSz-GawdCx3TEjuIsnqP52D4RkPzHGe2ZO04DTUUli7zL2ZUxTzXHDitFXrtlO0hTkkHb_ATOo1UDTu-4Y6ALi2hpWRiCAJC-518eOT7flcQtbS78fP2kzZpyGewufpj3tCFWT6Wrjil5HK42-a6wM29CQ6GBq_kptv0-UXDexFO5rNnzqsGcz4_Ip4mC4_iOhJfRL-prZwggWD_R7WmTmD8GFW5AuV0yvhIQ2cvhdn3E02bn3rtwu539bqsYHw5Wo6EHtZHHYsxSYumGtO1QC6hpCMLppPQw_NdZs6Y8Vs54LdJUyDUtuxZA1QykvGFH23Lf8TUmsrdfFMPLQpH_X5mWF3TTaDo36uu_zlFiFgpLMhjPzHZdwNalHECnvKXQGwiecw7DignzqCzpN9K_0BvCQDB5CReQDEWaOAhlqZXu-Xm7ignWS6tqNVn7cJDS1fbSftMWe4rFeC6dJbYWCcPSb8GBF14p-U-xO-HAwwbx7ou5MKOBCv95_cD1TKMkmrCVRSNXCh8ncdGVEW685xKp2HjpIrL4V5V1keezjsZuOWvdhWg7_vkG5vHDtk=w1440-h479-ft"
];
export default function NOOV2j2acI() {
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
