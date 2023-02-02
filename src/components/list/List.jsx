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
            trailer="https://i.kym-cdn.com/photos/images/original/000/619/225/cb5.gif"
            src="https://camo.githubusercontent.com/7e05922aa7dadb5b9772e92a43e47ad287db90aedfaf400a517c17a21bc2ac36/68747470733a2f2f692e696d6775722e636f6d2f626872684a48542e706e67"
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
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
      <span> </span>
      <span> </span>
      <span> </span>
    </div>
  );
}
