import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/YgcoDI-6NBv1pGHhYupflQmMWk98SF1OU724moflt-zfSEuYYYMu7Gkk4L2Und-yU8meJB_fI7tG_fFRs3eOswiYOOKPBlmxQOjdbQ8Z4_AKGuB27pPSAeHscySTvmuzt_fvbgn3hnc_7VPf5M3qF_0X8IP0mIpAfvnHkXFkxE10PyFCZMO9hAKfFxqCOm6fjvuSV71AwfDmUHLh2C4flNCdmIUhgh1MGBdvDmWZK1C_UY-aX2Pd8ylp2s55Oo691OKzzRmgcCWeV-V7dmp8hd9WcK_jwIf4FVCPfRcwvg6V1cKuX5sWXlRM7MCdKkdOu3pTU2lfsDfuqk5DeRsO_t2ifweeAvsf2lGV40-arh6lcUJHe8Nag47nkeumJPcIUMmh9JDnYvH3ZmOAxnHCVRu0JoZWrlqbT6j4aizLq9JcYAT_oV4fu_AlD_3E31gVpkn8k9ptzZN6vnmvCe1FClVGbSPm69Rld0QZn1rDWljIZzikfH0bBpzostwI-KkTBclBu7JeY_LHw-lhSWH20s7iUCXvL-dYzqODG5dWQ8ihLew45Y3Gavmw9JhmtJJRafz1r0ZM4DmkNaCW_POTs6EKA-zEG44kmbIFIOtFO2NnY-yhkmOXFHIKi_zYaQccgTEb2UHkC3jzrXpYtIaVsos-w9ep23OhWsYTGj7dL8hrKKzwecg=w1440-h647-ft"
];
export default function UFAakFLJSC() {
  return (
    <div>
      <Dump id="FAUXreal">
        {sourceURLS.map(url => (
          <img className="workComponent" src={url} />
        ))}
      </Dump>
      <style jsx>{`
        .workComponent {
          max-height: 400px;
          max-width: 425px;
        }
      `}</style>
    </div>
  );
}
