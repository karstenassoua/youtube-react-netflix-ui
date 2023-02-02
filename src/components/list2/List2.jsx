import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { Component } from "react";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list2.scss";

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
      <span className="listTitle">Continue Watching for Mr. Tran ›</span>
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
            src="https://previews.dropbox.com/p/thumb/ABzEiYgkpJCi2zKh4r59SZWrVJj8DTK-sXAYMTGtkKlW58OALzTmugFBp3lIBaFMevS7iW4CT-BiXZ1fVOfJjk5puA03spZSJDM0nFedJiZ2QceyWAZ_L7hy59DOJuscDGBNBL9h1w9EpwUqPcE4PxfcrJotAnaee35UH6yoF3w7HvRZ_hR9picNOREIDpDQxLti38jP8Z8hBvtygtDRHkfMNJHWJM66I_K8p3iY4AgTZ2CmZHb5U1BriNR7ZJAUfG4tgp6QbiMC7ZBEX_s-gXOeWOTy7Bz1vPBsKwfDMqxnDbCOb37DCRN2ayjJ88CGeZ740_LSW7fSCtErpjVceQsGpAUsXIC13aYRIjkqk1KSg_vbInE-r6hXIeaYk-7TyiY/p.png"
            duration="S12:E13: Capture of Nanking"
            year="1937"
            desc=""
          />
          <ListItem
            index={1}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://previews.dropbox.com/p/thumb/ABwaAEmnM_yhJV2eS0Mxxoix-Jdi896Jdi-TS6S0UIemge88EqTJ6diNEgAbwRmoTrRgmdN_zx08riuI6GwvUogcVcK75R-t9rz-x8ij5Yyjg0wKt42dwZEQGPcRAZElLnuyUwrUh9uittSYdHvLOo5D_R2uN8m1f-6lHEuNh9mMBpsPnTbWjFV7S7cKr5Q5reWduqSgoaBrgTOmQHvJdAf6Jh2sUc4BCGR-K4tBuJNk89vExnUWBfyflPt22bud0uxhGfj4Ab94QlCoqKdp6lpX7QLbRPHb8kHf-s2XuMguyob0EoFbkPdmWSA_spyRcpeDhoCg0r6vwUReDMzwSprBCu7msiobZgFdy2yrbkICUYpwd_nxb-7DJyJd7N8vA0Q/p.png"
            duration="S5:E11: Battle of Khalkhin-Gol"
            year="1938"
            desc=""
          />
          <ListItem
            index={2}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://flxt.tmsimg.com/assets/p11442568_b_v9_ae.jpg"
            duration="S9:E22: Japanese Occupy Northern French Indochina"
            year="1940"
            desc=""
          />
          <ListItem
            index={3}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://previews.dropbox.com/p/thumb/ABxQGGUPGwKxcKwYkQL_cvfUxx3nltT5pCMy3P_Th6IcXs7y-x9OZg1vkLD3xJFG7DjO0tw5Tfyi209FyWOLYlqaoL2Zuk2K7GxY50LrzNXHgO02bmi_qhbjVaMFsc2319pkjhXfSmrFUyXuPmlbuXGlEn7madUpq56L-WTt-9rj7_7KaUmRFSXIphF8B5i_DahZosBVlGKmTHZAVDJAMgOQT9-zOFsyo__4jPLG1_vRHiJcnyMiDJH_w3M2-DDGJdPlFsXqjRpxosrJFH1jG2CrFDNVWUMF1xDmgQW3ja2mrVrIrQJDIyQmkFRnt3AFCll90ce9rmV9Z4dsHl7wNt5vVnwyrznT6RzvwFrTakpVcgioPOWvEokyvTjuHbjYV0o/p.png"
            duration="S9:E27: It's a Tripartite (Pact)!"
            year="1940"
            desc=""
          />
          <ListItem
            index={4}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://previews.dropbox.com/p/thumb/ABxKG9aInqst8fQNh_qEhbeU8CsF_iwdV64T8RtYiSDRcJMPYouJ26Qt84iTY5Iw2atORkflvqyB9ekcTudkEJynUC95yRCLuL3mbl36mDEAwPegfWVGou63V-g0l8cqh6-6ib8IHVtUGyeFPk3na_wIxgaBc-0B64aa9wyS8nmQ7lD-pXiMGEjgagzkPSn7wk5cPYT8OQiX8opfbk6RYMoGUPlOchjsebzASOumnm7M1FKJF_AUSAitQyj8YMxa4pecTii6CPIjtuMLOQCcQWcePJiYhbVhrMQ1K8VOIkm9gxO9VyjdBOXzWR9svjdWSuhinTivykznkxZlzSBjzatLW1yeGp1PspDO0BCkOT0TLfmqLrM-VD1Q4qo2b8SsTjo/p.jpeg"
            duration="S12:E7: Attack on Pearl Harbor"
            year="1941"
            desc=""
          />
          <ListItem
            index={5}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://occ-0-999-32.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYgtk9H1oHYe67v0s3PWOoTKcFgFZ0MryJOXYDtz0bOMOpPOPiGT7sRQzA1fQ9td8IjHK3_Q6sB8BhJD4xw8D3DtjKO-MU9PI4NX.jpg?r=77c"
            duration="S4:E5: Japanese-Soviet Neutrality Pact"
            year="1945"
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
