import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/GHTcuuzEVYQInGRNlRAWVz5cFE6LThH13lXV_7FUp7Zn-QfrdGC39wzICmJkG_nZwCrlx-kc5fOnGl3y3d1Vid0wy8FCNEKyeQDz7jf8xK4Z_6n61EDKh0opV9U_pQRIKfYN_OYxrwdIfYRu0GtLuwjaq916U2FG-L1TpLUmDwUO87ixa1OWLJlGKaIyLHzBdKhz-XwMDzyz6dNaqWCkPygxcJxrVk0l6GiLLLnoaFz-P-dvGFST3o5UrGnI6EMJ8y4eeWQT1WAhzYYPunUMhHp6nEaDZL_iLJ6AMvmDM0HRsYZCpyIvPOIz7b7ng07bvoR1juxYkgv9w-JtXdAD7QyW_g8PfxbLhRjyPHKTvVe_-CalV3MbR0d-Nt_H-gTvecDqXktcC4Ow7GVJTKwsuau13-77SkWfyXVjevY1VTOTOtURXdugBsZaQGDPVOAoUn14NOxCYZqJHXleflJSm5bJf1JIWPPPv2DpqrtfEcbjErh-IUfiesszS8O2F8anxl3unNBrqnKqCWRJ8BTyLgFpGoEW9HxwZc80GUDwj_vcB_2QOyi2NPFbK_mmd8PbYMYUlM8-PjuGOLNAvrO-BN_EEJYfWV41Nf6LWckIwVc_KN3nKImalgeF_n5ChpBnrgpbgHEmqcdb2d6bsV9XEjQVaALMtm7-iWTN_guoUh5G_ClExI8=w1440-h550-ft",
  "https://lh3.googleusercontent.com/vzMy1GGQJv03LOUA8Mi26Gr_rmCQVcdUHrLeL8ZQ-8vdxbyvuScVcemIendGD6SDvT1m2RE960r3Ifqj7Ol5jebmI4qq6T0QC9NSA0RlKtdxPu8FeCIlPfsv7GtbmsLJtNOInNSQOFQZKp3LHaCb0S9eeMcmpv9xjegqCTfbhkEca0O2AweCgLXB9h-QDMam7hGOBWYbZyhcQOFe03pbDYC590pN4No1eAIiAb99fdxFRj2Ai7KB_wgEi8hAd5DNTCtvKiAQinMRLcDAUaelR07h2b5VSgydZRLTJGMzKmozJxDlrN4Dwq5pNzMwzOJdL6YnpmB2Liz8k8tbMUzHoMd1lUq_znCoQ9t8hkYZdJaQyqtdEz_OsT8tvEE1DIsWgKxC6w4XHgV0eSBRPk6h8J8m6WP3b5gkuq77jxNMMqnrLZ1NSR0yBL8dD3gxunYx7ONcfzm8IEotpiWWnyMX2-rL8GuXR4XM1xdLOqoXusuTTFD7sxSfDxp4nKmRK6rNUYczNQczb1rGYJwq9t2_sGtlw5SzbgUcSNJJC1WJ66PNdf8ZxlzYdx6XkmzSHhJGoFM2IUe6EokzqNRj8zmSfi7KYOtXvbZURIIFx7ad0H2VFuvL4EgBEofRKTUGI2oiuiPBK8mPwkTPFZbZYavqa-eyVoiOOnfQ0y1znd1Y5IJYl38z95A=w1440-h550-ft"
];
export default function XsWHICBjNA() {
  return (
    <div>
      <Dump id="plams">
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
