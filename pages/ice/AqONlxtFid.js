import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/a2FW76GxpC8g8ABZc8yu-OT8lMMAZnn8Y_cStcVVuI28O0Jz3kpk_kFNP-bFrfIJTwRwBFnC3PjnLWzCrKnqpNZ1eX_89AeKpXQIzcyIMe57UCSjdN2os7lpZo5TxFC0iZ2hU0rzj5Urk_tjYiBdXZHKxqFxqKXgwjpqqCCRskJ4vTqoVWhgaElhREHHW2eaOu4qlqDiEaCCRBgxNwsSVvbqwWiANa6ZGksMoSjzchqnEZ1FLldxGj9cfbjGoDtLROpOZRozwtzAUWh0dxQH0WxEX8qqxWphHpGUtZkhYCLRccgOgMRdXxdx6hj5Zdj7HTDDoAALGGJmFaxOBNf1-6PIk2S5OAx1F-Yrn8qU47JQ5lpFckzSzXMWXTfpmFhG2sF0WKVcJV2J4FFbyHWKXtW3R-iJeDn2taFjgHaXsISVNwxe7fFcESK5XsM8IA6j5OLDoMURUTxlPMuQhMS0yAYVnQOJtXkCHR_niX7OxV7rMcT9QQ8o3wFOrL_kPP7NGNICawiQo6w32MWl3OmOsou7fH-3J7BjE8e3ZX0NH1dU_g6uj7A3qxvyRT74geHgGb6kBRIE8yAmUxB6UgAcsp0h1Aa9RLCZOIogJFlKh5puzQEHAWJXzkYH9eVdB7lE-z9xEmbq8SawMljwB_R7-H5ERQbHDpVN3hI7YclG8jx6pJ4PRh8=w1440-h550-ft",
  "https://lh3.googleusercontent.com/P3ZN4lEcLic9IJwo8TJ9JBZM4EvjF5p4WF2XMZhdlFpHSj9GLQgNeEpwy-PqAoEH3n1a7817jQn1LTiZ610kSOHWW5Mu6DTbyNYDAdkIyheTk9VNWGY918ULpvmGtfJw9xPLzcSEe2jgEEE1BM_ya1Pp6r3nz2qTrnAmgj2rkvwhaM--Ukd1CTVHqeKDmeyscRiBVjr4XuDRlYBe_8t7qkP05IMNzLfBNUqWs4U7ONNE_hAdx3V5pubFl_CScJfRAASHp2yh0Idpm028-K32VfQcwwPqjXEXCyFHb_MFe7Y5MUCG2aY8fZ1ZM9IEOItnDvNDy8JN0rfDYA-Qx7_Yho38f3lpF7mFkkPSAlqLNsZ81hD83kKMW4F6hcKsbIaU7-HxNCwNohU16XSVvpYlXAKXM_udbNfjWyD20hGkrX1hRCYS3dD9ZAFqo8ig_gjiwfcbv4pw2jnSEEKilv2RpW8Lt2ghJfhSpX4TYxeiHJbMDa-M8Ks_aOEHUFNBnVAJ1gls3Zwlfo3lGFehWcqR2UXqzbb1wrAFLz_2w8hg25_e_BLSx4HDvME_8wDhv1LM_pmNE3llpATAgbRpOmBccwBkCU7yXqK2K1YjeZ88-NbuB44kmLZXjwvx8nUZSBUFrzvTOoAO9jW8iH4gvQxDnHEmOZkmCupiV_hbzIYnTnrJMHxaQAk=w1440-h550-ft"
];
export default function AqONlxtFid() {
  return (
    <div>
      <Dump id="ice">
        {sourceURLS.map(url => (
          <img className="workComponent" src={url} />
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
