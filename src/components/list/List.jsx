import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { Component } from "react";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

export default function List() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Next up: The Japanese Militarism Series</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem
            index={0}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://previews.dropbox.com/p/thumb/ABwpPTO-Vv-QuN-Q77g4Qdq-HHWJS5VMr5phB-Shy6k835yc8q7kNVEuKPiudbXMI0licvF6RMo7EiuypLbHa8yddqWcnUfpwWgIbwG5GFO4j0FOpvzZxZnTIVg0BiwnhV_RU64MaLg-g-2rbSY_U8g5PYSYI0frBiUBgNwoK9vPWZ779GVkPhz6bmdKnBQZoc50Pugf_YcsZOYcHjXEeGyqHT8Sbbhl-Z3yMz3hZ0k_kbadK4GDciaW0nO3wCWxS36vCPhLLnkw1gsXi0ILJoY2Ko3mEyiy0wZG2I982rDcGLKRw78WyhTkaWyJ4Tbr5-xIIQhOif0VMaYO6dfY9lFv3yaBAiVAqnUxwGMqMIeeDcn0pdo4R8MKwzC8LqXrheg/p.png"
            duration="S8:E1: The Civil War"
            year="1927"
            desc=""
          />
          <ListItem
            index={1}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://previews.dropbox.com/p/thumb/ABwCAqbCgHiRZ4GD4gKh5e-ON5m54fFHyiJpzy4g_mnDwjn42o2-WnyDFKzG6tNH0pz2kDoXOv_K2vC_olO2LgXRWjfQT2YVLelwLJp0-p11IeWytq380TI5UED69uvPPezob0v7PTAhbXXYdyJg5w05SsQmAJI3nbd53O3EhIeeKWUmwbWpLXptXjmeG2IrC8A3aCvWdgHisgUDgG0BJdjRUiRiX3rV6RkvKTTgo-3f5ysiMRrK0ai5yxNDJhcf7lbQccAwx37mI9epYzjXqgGLZWGLQUSzWvPhtDA6HcxViPyafTx_-C35FCLxZX45tOT1iNwrrdSfMZqA4Fec51AgVrRtj3Ya4lck7vdk8jZtixpq0EeOScET8_uSYQep1y8/p.png"
            duration="S9:E18: The Mukden Incident"
            year="1931"
            desc=""
          />
          <ListItem
            index={2}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://previews.dropbox.com/p/thumb/ABxurzhgesVWwV0CrJrUCTvRZatTx8yBGI7MV33BdquxDzoesFiKLdqWzT_kJk_8Xmc7sj-Y6-pw1oWVj-YyJJk0z9W7Omg8UbmLxHowg-9RQmDOjONLI6otApKlKR-5mNZSb2OouQL0MSMCzSQ4UM96QkmEREBA8yBvofD4XTXjl8PI4LGYt9jDZgE4KE-FUVdkCChZlO_teQ7XZtjb5y04JDlq9-VpCzCQjYTL7N2Qfg1-a8KjwV95cpdpVDUgvBmT4NI-RniM-fFBBFClAt68pq0pD2n3DWE5s4hh0l5FJyLpRo31QMiiY8oE5p3HJGno_pGtkWsfWEyqnkqv7nbuTZXHM9Ng2rgKlvB85YC22Jl0IXv732cCWPZciEFqdV8/p.png"
            duration="S11:E25: Breaking Commies"
            year="1936"
            desc="Anti-Comintern Agreement Signed"
          />
          <ListItem
            index={3}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://previews.dropbox.com/p/thumb/ABxNcAX5aeHcCNpQYrVvcyp9DHiktbr0Ieq4_EV6INOSmJmPxHYppNO5sTqk0KcVvpPmxwcD7tL9LHg6jYOg-WC8MviVmA9pi-3Y4uIybBAygmc0a5mR_Ea70qiry2NyZRqtDNO8EPUvxlO7jT9jJiL-as8SsBaCnD4Nb6o8gr2v98T7fa9b1TFG5GZw-119_SZCVUl_uoZfYw_HVKW2jhm7-doy7DL_UsYvBwVHxE6ZlQzAR0vEPA42snbonKo6Rerhtwe3dG6uN5FDi_sCIpbn59Zgr6Rha-4SA7wjaBHv7jTgfIrgmDOSI4kR_B6AguwkaIANeP97oPCP_imoezYltXygTtj_NkbZU_l99eHWYwl15X1rDBd1Azs18Xe-beU/p.png"
            duration="S6:E1: Konoe becomes Prime Minister of Japan"
            year="1937"
            desc=""
          />
          <ListItem
            index={4}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://previews.dropbox.com/p/thumb/ABxp49pRj5CkqWONZ_Vdd3zlw4klrH-58zTQTApH83i6VuiEJ2e2qOW98XU0nEUYPt1x4ZHSyPT-5cuHgR-0lcqfGoEiSCwBLmy0qorNQWWphv_mlVf2cEXFQSfD3f6idLVzGTl-dhcQht7XXBnRASanfTqFn7P4llbGHV4ohDLYiv6VpFBFjFJVaFvhzuFssRXbgFjAKtEybCxy2Q1AYp6kQSelGru0RzFL0pZzx2zlX12uCq7SYRhGhX0wFlFZx-rWLOn_FfLRnqO4aaPRlPzbT2LFph-vbHP-TKIqUCqPj-BcXH5hCM0Dv3DnBx9cKSzRYQAGJ0cvtk4GHYN2EzxHFLMjSlluj70GL1lS_-1Cy9eFDj1FlakPyJl7hMKTbKA/p.png"
            duration="S7:E7: Marco Polo Bridge Incident"
            year="1945"
            desc=""
          />
          <ListItem
            index={5}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://previews.dropbox.com/p/thumb/ABzmULQHLV5xQmjomUmTPNSNCi5YuJhWOEsWDia5e5lLYgJ_ncLB5mfzShB4ms2wE2ds1bPchhAVL-h1myU9cka2rpgIqZgvOwe_lCS09JWZw6CinEZphAKNDdinenGCPADCYKidl4_0Z5e3cjv5FDUWf--E1iIriFj4v4CwLT2BgMRjpykRiT20GUVGGCxjwuJGPw8b_cH1Qvlv6Da2QxZqNmBLWy4zQ4IcKQlwUXvjMegvbBK_D9hq_BQrGYW1OJBoS1Sz53WLzRCRhPd3vUbIl2zTLqkjVFt0NATVqNYeQoci_8m7SIlFgGKluqRz6dRmpMbnrAJFa39GLZqTK3L-fGGJEXdRAncoueUEHAdEmhMKsd8X0PevT5MMIiiYTxc/p.png"
            duration="S7:E7: Start of Second Sino-Japanese War"
            year="1937"
            desc=""
          />
          <ListItem
            index={6}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://previews.dropbox.com/p/thumb/ABzEiYgkpJCi2zKh4r59SZWrVJj8DTK-sXAYMTGtkKlW58OALzTmugFBp3lIBaFMevS7iW4CT-BiXZ1fVOfJjk5puA03spZSJDM0nFedJiZ2QceyWAZ_L7hy59DOJuscDGBNBL9h1w9EpwUqPcE4PxfcrJotAnaee35UH6yoF3w7HvRZ_hR9picNOREIDpDQxLti38jP8Z8hBvtygtDRHkfMNJHWJM66I_K8p3iY4AgTZ2CmZHb5U1BriNR7ZJAUfG4tgp6QbiMC7ZBEX_s-gXOeWOTy7Bz1vPBsKwfDMqxnDbCOb37DCRN2ayjJ88CGeZ740_LSW7fSCtErpjVceQsGpAUsXIC13aYRIjkqk1KSg_vbInE-r6hXIeaYk-7TyiY/p.png"
            duration="S12:E13: Capture of Nanking"
            year="1937"
            desc=""
          />
          <ListItem
            index={7}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://previews.dropbox.com/p/thumb/ABwaAEmnM_yhJV2eS0Mxxoix-Jdi896Jdi-TS6S0UIemge88EqTJ6diNEgAbwRmoTrRgmdN_zx08riuI6GwvUogcVcK75R-t9rz-x8ij5Yyjg0wKt42dwZEQGPcRAZElLnuyUwrUh9uittSYdHvLOo5D_R2uN8m1f-6lHEuNh9mMBpsPnTbWjFV7S7cKr5Q5reWduqSgoaBrgTOmQHvJdAf6Jh2sUc4BCGR-K4tBuJNk89vExnUWBfyflPt22bud0uxhGfj4Ab94QlCoqKdp6lpX7QLbRPHb8kHf-s2XuMguyob0EoFbkPdmWSA_spyRcpeDhoCg0r6vwUReDMzwSprBCu7msiobZgFdy2yrbkICUYpwd_nxb-7DJyJd7N8vA0Q/p.png"
            duration="S5:E11: Battle of Khalkhin-Gol"
            year="1938"
            desc=""
          />
          <ListItem
            index={8}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://flxt.tmsimg.com/assets/p11442568_b_v9_ae.jpg"
            duration="S9:E22: Japanese Occupy Northern French Indochina"
            year="1940"
            desc=""
          />
          <ListItem
            index={9}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://previews.dropbox.com/p/thumb/ABxQGGUPGwKxcKwYkQL_cvfUxx3nltT5pCMy3P_Th6IcXs7y-x9OZg1vkLD3xJFG7DjO0tw5Tfyi209FyWOLYlqaoL2Zuk2K7GxY50LrzNXHgO02bmi_qhbjVaMFsc2319pkjhXfSmrFUyXuPmlbuXGlEn7madUpq56L-WTt-9rj7_7KaUmRFSXIphF8B5i_DahZosBVlGKmTHZAVDJAMgOQT9-zOFsyo__4jPLG1_vRHiJcnyMiDJH_w3M2-DDGJdPlFsXqjRpxosrJFH1jG2CrFDNVWUMF1xDmgQW3ja2mrVrIrQJDIyQmkFRnt3AFCll90ce9rmV9Z4dsHl7wNt5vVnwyrznT6RzvwFrTakpVcgioPOWvEokyvTjuHbjYV0o/p.png"
            duration="S9:E27: It's a Tripartite (Pact)!"
            year="1940"
            desc=""
          />
          <ListItem
            index={10}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://occ-0-999-32.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYgtk9H1oHYe67v0s3PWOoTKcFgFZ0MryJOXYDtz0bOMOpPOPiGT7sRQzA1fQ9td8IjHK3_Q6sB8BhJD4xw8D3DtjKO-MU9PI4NX.jpg?r=77c"
            duration="S4:E5: Japanese-Soviet Neutrality Pact"
            year="1945"
            desc=""
          />
          <ListItem
            index={11}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://previews.dropbox.com/p/thumb/ABxKG9aInqst8fQNh_qEhbeU8CsF_iwdV64T8RtYiSDRcJMPYouJ26Qt84iTY5Iw2atORkflvqyB9ekcTudkEJynUC95yRCLuL3mbl36mDEAwPegfWVGou63V-g0l8cqh6-6ib8IHVtUGyeFPk3na_wIxgaBc-0B64aa9wyS8nmQ7lD-pXiMGEjgagzkPSn7wk5cPYT8OQiX8opfbk6RYMoGUPlOchjsebzASOumnm7M1FKJF_AUSAitQyj8YMxa4pecTii6CPIjtuMLOQCcQWcePJiYhbVhrMQ1K8VOIkm9gxO9VyjdBOXzWR9svjdWSuhinTivykznkxZlzSBjzatLW1yeGp1PspDO0BCkOT0TLfmqLrM-VD1Q4qo2b8SsTjo/p.jpeg"
            duration="S12:E7: Attack on Pearl Harbor"
            year="1941"
            desc=""
          />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
