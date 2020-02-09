import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/KP6i7W10yrcKQgGpObpAEiwiVlDOxbXqbL7KlM9JQvplDkz5g38TV1dBqv3fZgboGhb3QSDNv0tzfcWsGbzs7yaIKUVBODsdArhAvv5ux2-UcuwCYEH7gP1xIG1OMfKADu62Cg4QIurv0vxD8UFycIwKJ7Ocu1RmyEVJ5HZ_SfaGDt561m0crvQpxt2w4mcLCTftkrrFJMaCs7BDmUq0RfxII5IbefMdS-PDvXiNoB9npLXo6LqXi6pzu5AixBRaYnizzE540me9CAaAqe-gakubiUEzqayVvqoQ6MPx6CPQbp1QanGSbYfsEiJ9hBrarjWOt0Lh9K7Q0OQwXXwupBZqcprkurAHmmssFrOPckFivn7jyPTc4PtBtzTpGJ2TEzw-4jpg9iSXoM2l2enolJ1FHU0IVX3YzRke1nkIX7H1Z7DXQ4TzjwKNnZVwZlBbu1VzzAMnurhQ71SDMYCNt4xO4QoptuhGKR941oYDDczcixDNH_sZ-cBAcpEXyhVrs6VS32eRwuIxtgj-dY0wEtprc0kz9gejTdfhPhUgwC_h95sCP87kPXQR1OdMLx2b-Faz1V28ssGCQnhnDKnt5Aq0uXWpdRYvdpYuDy1T1ZN2qo0OcB--fhu7czr7R-O_ztHP4FHsoYph_z_cLHEwVTM2JF5NKCbAurRMG0aVn_0HC4ADcQ4=w1440-h550-ft",
  "/soulseek.gif"
];
export default function QFzF0QDoyo() {
  return (
    <div>
      <Dump id="pretzel">
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
