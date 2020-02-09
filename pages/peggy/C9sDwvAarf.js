import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/SuiOarx6ZRMyUbOu76YmgWHinPZjmqbx0IH8GkPFQduY3385K9El7WDdmuei3mkIgplHdVcGBFgnq5fhp4Et5j_OiJyz3T4g9M2B0qF5gG2hyyMtK4kVAziXgVbymP1s9uOW2Vl8_5kVSmlV5LAF5OVtNspHC7CSM3TZ94byGtpn-low6QzK22gqH80ycNRDyggPog13EtqwAlZ7TGqn55ZFRl-IbBlO1gUfmbdU-a4Tf68m6cZZPEoIj5N1LfZpVvzQ7F-5nu2cVh9rUw6tJaPEErYqmJAFs5ovDP3_2lQS_sN_KPPY-v3QNau1REUYvKFD93cTLWnRo7Sn-KEwvxFr3qMs33iJ1VopsiYyHc0BAns1kNWnbNJWV9FHnjlM9DNWdFNbaRR8D_X-Wsbw2NGYE7TCd8jHaUnJ2WrHGBaOwntZVxlNp9T2kW94ld7y5Oq-rkyqrITlgmnlZ3BE9_aghAiY3Wa4kzTV0tajS3HoWWw7TTc7c-62BaK-CJDbYOktvUanzIYXQLEqbdcCL6hywvQ7E5bfwD0z49DWPG-SMx2iNSduTPOtE2nosoyW_HN5b72MqzGlIJtxUVsViUphKexoHtNo6mAQRmeKAB87xpZr2JP1qAJZbj_1aB3mfy8t05rCNu374Cy2d_lzRk0ThAW3HPWFj59F-ydKrpwoA1XyO-0=w1440-h550-ft",
  "https://lh3.googleusercontent.com/CnewhHQG-eGb9ctBaZtZmFHm3njaAf78uo2eNl9Ou10gkn9hYsqvbq3qtLGlKnioLFopl-icRXt-4f6A6p4y_-9sLSLJld-d4qw9Kn8X-vpLkaIOpffDEk5wzXg6-BqTZDeLH9JEiLJfg0imh6t7A-FzA1830x3w7MXsuMIiCBTyv7q7t0Qnefm8ispqtSym3GoOjaNUfHt5cjJ8knfE5giRYtJ6GaCj2bFO5qEQb8VPNoekBLYxJLFOO2VlY36Us4tu1p3HV8a_JsYSGOegRB6yBU-Fi7jjjeGeNJArckEwVjteAyZ2BS6kCRlIWrz3iCN2172tlODDP_axuBul-nxUvx-79dT6qa6WeANBenuRE79E0V-IYiWEDxpDZ7nLWjkFAWXNSAuit1oaDgkc62nLZafsPqswWFgFI98i8eajwGM25w2biR5RM6kG-YGvsSO3QJOuBgmihshQkcZyC3kNHnJGrnMdQdG6Rhnq1Zx3ynRKmCTSDsryIOy7NYwm7SNBHViiZrlbmzzI8oCl29NXuI3nPUJwwlpP8XA80xJb_HsLG8uy-0NstZMtEq9vUm_HdaS9AUo6TgEWx1bSyHkrg9pb-KpAupugQsGI5vE_XTNi3u-A4_esg7FvWBRprkgi5XADqO-uZmx326SjjnB8tHLK5YcAoLxZ6rmEAUu6-PriIo0=w1440-h550-ft",
  "https://lh3.googleusercontent.com/Ge23njSEWpanheWdRyG6yS7wOU3BkvR1i08-LwRgJD3lMEIB-5cs05zIC1TU2cqBFKBv42WgUvb-B_gc7m6Xz_4aK9NInyXDcvmRCk2w6gvqWzY6LeabpmvrW8WappSJu-nWu2ZfbMvN9RwGUnd2VgPw5mprDWM2hnqVx4gUnWWvACdBtkG2bva0Zvo1jxRiNt1_BW6dszIAHq4NJ4uARo-lZ16chYbOKL6SvpdQ_Vjst7uawuirrkyqtta6pblnNVhHG6t0H6s-57vZA08_kXgnbUBtOVNFA-Kq1uW6wfOU-3KHF_z9WX4ZMm5NMPL20ZCxhE8Tb6we9PYyf0DL4ccovZeovIhoAQv4ZygEVicOqCdbVIqfBU2pw41BnP2f11phTvU7criCPOO8Nm49pT1hGBmOH3JGqYbTQfq286Tw_zrNuiMInA83YcCMGkFQRRpfhiZC6sseAn5pSLpWahIxDi-6zAAhjve5Yrt4okRt7DcPwfl6ChGWy5HQVBHrMdqZrc1LZ9tqF9bd4xsO6WGnsRTXtjgxjY1_gMzRP24FMB6wgTudJCHf9jxF5d9MeyoU_MfMkrBM3N2VqEBSa2jcFCRMpUiN0XP25Jim119QsM1hdpAeI4O0dm1MR0UZ4B0tcD2YDwoyUZysppV-3LJOCC9SUXfuaCpexdIrA9-GqKnLieM=w1440-h550-ft"
];
export default function C9sDwvAarf() {
  return (
    <div>
      <Dump id="peggy">
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
