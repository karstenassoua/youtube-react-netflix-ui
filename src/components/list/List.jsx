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
            src="https://camo.githubusercontent.com/a3c2752f69e387b29cd9579f6dbfbb685f2c16250c670d3e2a4eb42816935d68/68747470733a2f2f692e696d6775722e636f6d2f716247515a48472e706e67"
            duration="S8:E1: The Civil War"
            year="1927"
            desc="Narcos: Nanjing follows the rise of Jeshi Escobar and the creation of his monopoly over the Chinese political ideology market. Jeshi Escobar’s product nicknamed GMD Powder, Anti-Commiecaine, or Paprika, was exported throughout China, and Jiang sought to stamp out competitors like CCP Blow. We follow Escobar’s many violent journeys to create a monopoly on political ideology in China and unite it. However, it’s subtly expressed to the viewers that Escobar’s downfall will be not protecting his resources in Manchuria.. Escobar’s downfall starts when the JIEA (Japanese Ideology Enforcement Agency) begins to investigate Escobar’s product in the North, and establishes their superiority over the region. The JIEA claims to be “re-establishing order” in Manchuria and the international community happens to agree, as many want both CCP Blow and Anti-Commiecaine to not be a problem anymore. Additionally, both the BIEA (British IEA) and French (IEA) turned a blind eye to the JIEA’s wiping out of neighborhoods in Manchuria. In reality, the JIEA wants the resources and labor in Manchuria. Thus, the JIEA can freely infiltrate the resource rich Manchuria, to produce their own ideology and spread it on the free market, because of the ongoing street wars."
          />
          <ListItem
            index={1}
            trailer="https://i.kym-cdn.com/photos/images/original/000/619/225/cb5.gif"
            src="https://camo.githubusercontent.com/7e05922aa7dadb5b9772e92a43e47ad287db90aedfaf400a517c17a21bc2ac36/68747470733a2f2f692e696d6775722e636f6d2f626872684a48542e706e67"
            duration="S9:E18: The Mukden Incident"
            year="1931"
            desc="In Legend of Manchuria Season 2, the Northern Japanese Water Tribe (NJWT) sought to consolidate their power as a growing empire and seize control of the Manchuria spirit portal, located within the Southern Chinese Water Tribe (SCWT). The Manchuria spirit portal served as a hub of raw, spiritual energy that the NJWT sought to harness in their journey towards self-sufficiency. The NJWT’s spirit military in particular had interest in occupying the Manchuria spirit portal, attacking the South Manchurian Spirit Bridge and blaming SCWT radicals for disrupting the region’s spiritual connection. The NJWT’s spirit military then used these claims as the basis through which they invaded the Manchuria spirit portal, leading to subsequent territorial clashes between the NJWT and SCWT. The NJWT spirit council remained unconvinced of their spirit military’s justification for invasion, but they were unable to quell the military’s growing frenzy. The preeminent spirit containment organization of the water tribes, the League of Non-Believers (LON), decreed that the NJWT and SCWT should resolve their differences peacefully, identifying the NJWT as the aggressor in their disputes. Despite this, the spiritually unstable SCWT was forced to make concessions to the NJWT out of fear that the stronger tribe would exercise spiritual retribution. The majority of LON council members responded to the situation passively, scared to lose their vested spiritual interests in either water tribe, particularly the SCWT."
          />
          <ListItem
            index={2}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://camo.githubusercontent.com/e9efed5f8649713c0cce08b45f6cfeb7bac31545457d9a28242118873c80f4b1/68747470733a2f2f692e696d6775722e636f6d2f6f3879307a386e2e706e67"
            duration="S11:E25: Breaking Commies"
            year="1936"
            desc="After being diagnosed with “have not” syndrome, a terminal illness, Konoe White searches for a way to get the resources necessary to cure his illness and “have”. His former position as royalty did not give him the funds necessary to do so, so he had to team up with Zaibatsu Pinkman to expand his military empire. Their product was military expansion and their customers were the Japanese people. Their product was 99.1% pure and superior to the Chinese product. Their special ingredient? Japanese Nationalism. This show follows the duo's journey throughout the world of expansionist policies. Their imperial empire is bolstered by an agreement between Mussolini Fring and Adolf Goodman called the “Anti-Comintern Pact '' . Fring and Goodman had previously expanded in Europe, but wanted to start a partnership to spread their beliefs into Asia. However, Konoe White had lots of heat around him. Jiang Schrader, a member of the LON (League of Non-Expansion) was always requesting backup as this case of military expansion was affecting his neighborhood. Despite the pleas,  the LON never provided back up due to prominent members' lack of funds and lack of real authority over Konoe White due to Japan leaving the LoN in 1933. Thus, Konoe White and Zaibatsu Pinkman’s Empire would spread throughout China nearly unopposed.  
"
          />
          <ListItem
            index={3}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://camo.githubusercontent.com/c1c947689ff87322272f4c317ab38e7dda21c33730bd277db57817110a6d47ba/68747470733a2f2f692e696d6775722e636f6d2f6767656d3244552e706e67"
            duration="S6:E1: Konoe becomes Prime Minister of Japan"
            year="1937"
            desc="Sensei Fumimaro Konoe-Silver takes over the Konoe Kai dojo following the arrest of his predecessor, Hirota Kreese. Kreese preached the “Fundamental Principles of National Policy,” hoping to consolidate his dojo’s position among its competitors and thus establish itself as a mainstay in the All South Sea tournament. Kreese viewed Emperor Fang dojo as little threat to Konoe Kai’s power, concentrating more of his energy on the threat posed by Commie-Do Karate. However, news came to light about Kreese’s war crimes and abruptly halted his rule, at which point Sensei Konoe-Silver took control. Konoe-Silver originally appeared moderate and measured in comparison to Kreese, but he quickly showed his true colors. Silver intended to expand the Konoe Kai empire. He attempted to open new Konoe Kai locations and form an international bloc, thereby furthering Konoe Kai’s ambitions and turning the once “have-not” dojo into a “have” dojo. Konoe-Silver had little interest in inter-dojo cooperation, favoring militaristic expansionism to perpetuate the Konoe Kai philosophy. This attitude directly contributed to Konoe Kai’s subsequent feud with Emperor Fang dojo, beginning just one month after Konoe-Silver’s appointment as sensei. The prevailing international dojo federation, the League of Nunchucks (LON), was ineffective in quelling Konoe Kai’s newfound expansionist ambitions. Leading council members from the British Bow Staff and Strike First French dojos had investments in the Asian martial arts community and feared angering Sensei Konoe-Silver and Konoe Kai would negatively impact those interests. 
"
          />
          <ListItem
            index={4}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://camo.githubusercontent.com/f011cfd0ac5f9e819571ba28d84eed1885382042abd7211658e3dfdf18c22c46/68747470733a2f2f692e696d6775722e636f6d2f596f4639366f482e706e67"
            duration="S7:E7: Marco Polo Bridge Incident"
            year="1945"
            desc="This documentary follows the Tokyo Bulls on their quest for one last championship. After decisions made by the General Manager of the Japanese Military, against the wishes of the LoN (Legion of Nearly Sports Activities) , superstar shooting guard Konoe Jordan and the Tokyo Bulls decided to embark on one Last Incident to end their dynasty after years of winning championships because of Chinese concessions. After making it out of the North Conference Finals against the Soviets, due to Soviet’s letting up some territory in Manchuria, the Tokyo Bulls were up against the Beijing Jazz in the 1937 Sino-Japan Finals. On the Tokyo Bulls way to the finals there were many reffing scandals because the Bulls had aggressively fouled and seemed to intentionally injure Beijing Jazz players during the regular season. These scandals were weakly opposed by the leagues government body of the LON because British and French investors in the Beijing Jazz did not want games to be postponed and money to stop flowing, in order to hold a proper investigation. The Tokyo Bulls  went up 3-1, after the attack on Mukden and seizing Manchuria. The Beijing Jazz did not go down without a fight and won game 5 after a stiff resistance in Marco Polo. Japan and China met in the decisive game 6, where Konoe Jordan hit “The Last Shot” which saw the end of peaceful concessions to the Japanese, and won the Tokyo Bulls their 6th championship in 8 years. However, there was much dispute over the ownership of the trophy because the LON called for a foul to be called on Jordan when he took  the Last Shot, and China supported it. This dispute over the trophy came to be known as the Second Sino-Japanese War. 
"
          />
          <ListItem
            index={5}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://camo.githubusercontent.com/276d5625ac91ba618747b81107d3fc046f62009d1e87dc2d4ac2bcc131316a8c/68747470733a2f2f692e696d6775722e636f6d2f366e6c72464c662e706e67"
            duration="S7:E7: Start of Second Sino-Japanese War"
            year="1937"
            desc="In Season 4 of Attack on China, our main cast, Nanjing Yeager, Beijing Ackerman, and Shanghai Artlet,  finds out that the Kaiju from a previously unknown island that had wrecked Coastal China were from an island called Japan. The source of these attacks was unraveled after the shape-shifting North Kaiju was discovered to be Wang Jaeger, a spy from the Japanese, the half brother of Nanjing Yeager. The Chinese discovered this while King Jeshi Fritz was too focused on rooting out internal struggle within the walls of China from the communists. Our main characters in China discover that the motives for these acts are  the belief that the Japanese are superior to the Chinese.are need to cleanse them in order to get back what they believe was there. As a result, Nanjing Yeager,. Beijing Ackkerman, and Shanghai Artlet try to fight back the ensuing invasion. However, after the Nine-Power Treaty Conference,  Captain Levi America waits to send America Corp reinforcements because he does not want to become involved with war once again. Additionally, Jeshi is too busy to support retaliation, as he is stomping out retaliation within the walls. Thus, Nanjing, Shanghai, and Beijing are left to fend on their own."
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
