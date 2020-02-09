import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/BrQWftMwUClf2-NyBc8KE2aHUfvxDdZZBGQhKPTCAHRlm04MNPBi4kn7xaAAK-wI3-xiABQDZKkkSGnH82i3rS83B2-U9LsZe5mbGrIarbEa2_Twue8Jqa82teIquFrM_XPqebvaA4Rm1yCANuiMw4g7eoWoPw2T5YnGb883OQiP_U5kJ0kCamOBkxeutVIzXjFPJjPNqKGw7JwUDQpJiH2qv7w3zq2AIxy_M2HD2w1bo_13uuP2mRybgIZMxwM1kuAMuo4D_mwb9dxL1KhrSd3DKLlrWRUrvMjIaAma6T-71qbtjAstlbuhqQKHfj3Q9Ugqx5F-vHT871_1QxJs3eexY15AIjES7yt9BzrzUaifGurDErpvUzrD4pXd-SCjYAicdWyvyrpzdIb_iUj16_mVvQou5z6oFuT72B0YGgxozJZ0zt5B-jYRc4Z7f6nUiXoybq6l_cHC1FvL7dGi6DccUkUCQkG7js99lWp0BiplZGVlWEMiBrZsGWX2jHjHVKeWplzTEX5elOhIEMeQ0bvG-earVt2doUR69VrR3JpFsNRj1kY-fDK-X1mR-dRxw-fGM00ag01GFBkP3vDB1sOmWV8nc_yAOalDZggqIT9aGz3Hw6OUkp-vBo37Qf_QajlBaPNEB6E1dxfBQX6MT30knJPzahye1kmKl30WNFaRmMCk3NA=w1440-h550-ft",
  "https://lh3.googleusercontent.com/LS7BF7859ep88pe8XGlolJPm4iJRQzW0XnDXdJv97BshRkIwiLsToqrJeqMZVp9Mrvx_24F3OXJogZ128f11suIK9EeceYWSxeMd_-VIaEvj-ENdVWeQyZNBHfNkQCfGjmYKOxF2tdAEDAhHx7DWZgRR9txF3UWN1Q8I3CFBPy5yG0XQsL2kd9TMW366nuxHUsNBplHQ-pOm-mSaR_uc0z72IHhaagPH6Bfv17Eq8Nbp7eTkSTizq-6HUD3MJp0lFb99vtKhPgLwVwyz5JkBy8yb74hI3Rzox2aYDbFfLfhKS7edM-bUBv_OMRYwbGMvjw46IxUAzCHehSVP84B4JQyVRjQbjM9_Wj7nOh0w_c8Y07o0OPJq8y8TjSb-a4JwVeEWN6L_y5VrmiAJCuDC8EVjq9goLGLXZ6f6IRAlFMV29rGAtcncsFwHPV7QhQyitVyGzmuUEW4ryxBn5gR7lvmxWTdfJoHTjs8ivJ9qMiDQKWM6dK9_36xRUfdt80imUvz4uvsuqBqDrNXQmMoHZ66RYCyUViqSFWAL0Qz_Pw3ZlEoR7AkXKGOSuZcUN1VpzjOsJ9VywGj7bEDdubzx9hM7F3RTkGYikVf_9Y9h9weWNM7CGopl_jmuBORMi9A2GW8KfQad9kFIztkD19ofkD9W-8tIWxAdPK7VmP3_b4x89Enb9DI=w1440-h766-ft",
  "https://lh3.googleusercontent.com/lok738YqbkTuCRumn4jsTEW0FPT1qF_jRbuCpl-cB73W7kXq4FUVKgoyRKkOpONXtYwNk33i6KiYxFyGLPg_ZZ_YuyBGYES2boLbn_6CnvTfH7IR-qF8KlebzDsfUfnk98muU3pbFNH7-jvREMLLbcO5GTUjN3w0rKTQ_ObibOUhJHMNb4jxnVtVSj6IpN1Mn-rxGhl1tl6Nbl89gk-sxoDw8eHp3ZMdPhKsyaYKzjGwyvgs9b-C8o1bT2A7S-QpS7GjuW7rRtEUDWbZbF1tBaM2sR8gUsEzJEHVMff-xck44A4xlNhB_CmgK0owMYx7mJIts0LR8XWj5R_waI6b0iAskNVi5KlhZrCT4smZ-N7c5qXoKVws_GNb5h7yeb2Vq_hGYkXV7mCyNs-sAh7xR6ZaJWkJM5OYjHkbdlVZ89SANab8ICGNUa3snJ-uK-lVaXNylOxyBBijCrAx26uQYFbG8dZpt21BgwowIiReetawpKfyOqUe9ZGwExcy7ungKRR65ZrjCbGuVtdLRIFiFszE6gnzawF_zIumh6e2_peYMP4aLgTOx4vmUAlAh5m1sm0qWbeHvq4u4vEL4EHUodlVON4mLklQkhz5-3gAFqYILDTqJ1cBjT9ltLhtyduCFqGkznb2UVdyYgMYRPHS4SNlHyfKCcTKYP1Oy6v4w6vt2yUfr58=w1440-h550-ft",
  "https://lh3.googleusercontent.com/LS7BF7859ep88pe8XGlolJPm4iJRQzW0XnDXdJv97BshRkIwiLsToqrJeqMZVp9Mrvx_24F3OXJogZ128f11suIK9EeceYWSxeMd_-VIaEvj-ENdVWeQyZNBHfNkQCfGjmYKOxF2tdAEDAhHx7DWZgRR9txF3UWN1Q8I3CFBPy5yG0XQsL2kd9TMW366nuxHUsNBplHQ-pOm-mSaR_uc0z72IHhaagPH6Bfv17Eq8Nbp7eTkSTizq-6HUD3MJp0lFb99vtKhPgLwVwyz5JkBy8yb74hI3Rzox2aYDbFfLfhKS7edM-bUBv_OMRYwbGMvjw46IxUAzCHehSVP84B4JQyVRjQbjM9_Wj7nOh0w_c8Y07o0OPJq8y8TjSb-a4JwVeEWN6L_y5VrmiAJCuDC8EVjq9goLGLXZ6f6IRAlFMV29rGAtcncsFwHPV7QhQyitVyGzmuUEW4ryxBn5gR7lvmxWTdfJoHTjs8ivJ9qMiDQKWM6dK9_36xRUfdt80imUvz4uvsuqBqDrNXQmMoHZ66RYCyUViqSFWAL0Qz_Pw3ZlEoR7AkXKGOSuZcUN1VpzjOsJ9VywGj7bEDdubzx9hM7F3RTkGYikVf_9Y9h9weWNM7CGopl_jmuBORMi9A2GW8KfQad9kFIztkD19ofkD9W-8tIWxAdPK7VmP3_b4x89Enb9DI=w1440-h766-ft",
  "https://lh3.googleusercontent.com/BrQWftMwUClf2-NyBc8KE2aHUfvxDdZZBGQhKPTCAHRlm04MNPBi4kn7xaAAK-wI3-xiABQDZKkkSGnH82i3rS83B2-U9LsZe5mbGrIarbEa2_Twue8Jqa82teIquFrM_XPqebvaA4Rm1yCANuiMw4g7eoWoPw2T5YnGb883OQiP_U5kJ0kCamOBkxeutVIzXjFPJjPNqKGw7JwUDQpJiH2qv7w3zq2AIxy_M2HD2w1bo_13uuP2mRybgIZMxwM1kuAMuo4D_mwb9dxL1KhrSd3DKLlrWRUrvMjIaAma6T-71qbtjAstlbuhqQKHfj3Q9Ugqx5F-vHT871_1QxJs3eexY15AIjES7yt9BzrzUaifGurDErpvUzrD4pXd-SCjYAicdWyvyrpzdIb_iUj16_mVvQou5z6oFuT72B0YGgxozJZ0zt5B-jYRc4Z7f6nUiXoybq6l_cHC1FvL7dGi6DccUkUCQkG7js99lWp0BiplZGVlWEMiBrZsGWX2jHjHVKeWplzTEX5elOhIEMeQ0bvG-earVt2doUR69VrR3JpFsNRj1kY-fDK-X1mR-dRxw-fGM00ag01GFBkP3vDB1sOmWV8nc_yAOalDZggqIT9aGz3Hw6OUkp-vBo37Qf_QajlBaPNEB6E1dxfBQX6MT30knJPzahye1kmKl30WNFaRmMCk3NA=w1440-h550-ft"
];
export default function qZh86EY9Ez() {
  return (
    <div>
      <Dump id="petrograd">
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