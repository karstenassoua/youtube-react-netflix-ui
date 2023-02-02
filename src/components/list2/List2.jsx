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
            src="https://occ-0-2794-37.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVp3zMdItadLqYLhVbHoeiaikLnzZABqq-Luz3iYe9qGdJ5IT3EYz9YQYIbpWC869Jjy2gJwsALDUwHlnCZrquPLfk3HEeYTlZJVZo9wZNCMn7skHQZZDj-fPWNabY4rDYRH5Q.jpg?r=736"
            duration="S12:E13: Capture of Nanking"
            year="1937"
            desc="An anthology exploring how the conquest through human technology can lead to the expression of humanity’s darkest instincts. In this dystopian episode, we enter the computer of a teenager named Konoe playing a sandbox simulator. In this game, the world they create actually happens in real life. We see the teenager roleplay as Japan, and conquer China. The scene switches from the teenager playing the game, and the violence outside in the real world. The boy then decides to commit atrocities on the people of China, and we see gut wrenching scenes of the atrocities being committed, just as the boy commands the videogame to do. The boy gets a pop-up notification in game from the Nine Powers, requesting him to stop committing atrocities and war in China. Konoe goes into settings and turns off pop-up notifications because they aren’t real and in game, Konoe isn’t apart of the Nine Powers. Somehow, the USA overrides Konoe’s settings and pleads with the boy to stop. Konoe doesn’t care. We see the scene in the real world develop more and more. The episode ends with Konoe’s mom calling him for dinner, telling him that they’re going to be having French-Indochina soup next. 
"
          />
          <ListItem
            index={1}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://camo.githubusercontent.com/bc77bb284a56a694178dfea3a029072e42cce54eff623b3d3eecc4111d8fc5eb/68747470733a2f2f692e696d6775722e636f6d2f7336417a6554362e706e67"
            duration="S5:E11: Battle of Khalkhin-Gol"
            year="1938"
            desc="After the Russian Military Military Conquest squad’s shocking performance at the 1905 Russo-Japanese Olympics, where they were runner up to the Japanese Military squad. Russia will try to redeem themselves at the 1939 Khalkhin-Gol Olympics, by sending in The Redeem Team. Led by Lebron Stalin, this team sought to bring home the gold of Mongolia in the Military Conquest event for Russia. After a dominant performance by Lebron Stalin and Grigory Durant in the finals, the Japanese military squad, nicknamed the Kwangtang’s, decided to quit Military Conquest in International competition up north from Japan, and focus their efforts on Military Conquest continentally down South in the rest of Asia. This was supported internationally by the Russia Military Squad. The Russian’s agreed to not compete with Japan in the Olympics for the Military Conquest event and weirdly enough, the two nations signed the Japanese-Soviet Neutrality Pact. Reporters from the famous Lifestyle of Nations (LoN) magazine did not want to anger either side during this agreement, so in fear of losing money by printing stories no one would read, they did not print an issue for the week. 
"
          />
          <ListItem
            index={2}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://camo.githubusercontent.com/0fbd8b9b58c7172bd4fd68c930164c5e7361bd1f22903069bd7a8d705b746042/68747470733a2f2f692e696d6775722e636f6d2f704637447341682e706e67"
            duration="S9:E22: Japanese Occupy Northern French Indochina"
            year="1940"
            desc="In this dystopian scenario, the Japanese have taken over French-Indochina.  In the long term, Japan dreamed of creating a coalition of Asian nations politically and economically tied to Japan. Like Germany invaded France earlier that year, Japan took over Lạng Sơn and other strategic points, aiming to prevent China from importing fuel, arms, and resources through the Kunming-Haiphong railway through Hanoi. Despite the oppression, a new hope emerges when a mysterious woman appears, known only by her initials: 'U.S.'
After a Japanese small force entered the North, attempting to secure transportation routes and fuel against the Chinese, 'U.S.' appeared  again, imposing economic sanctions and forewarning more dire consequences if Japan takes more aggressive action. With significant pressure on the Japanese government and military, which saw expansion into the Southern territories as a means of securing the necessary resources for their growing industrial needs, tensions mount. Japan, its neighbors, the mysterious 'U.S' and her allies would struggle for years. Eventually, the Japanese Soviet Neutrality Pact paved the way for a more aggressive approach in the South, and Japan's violent militarism continued unchecked—culminating in the bombing of Pearl Harbor. 
"
          />
          <ListItem
            index={3}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://camo.githubusercontent.com/80c71e40ebe5785b7780e201fad8fba786ce643a939b2339ab9743f97cc59002/68747470733a2f2f692e696d6775722e636f6d2f4152745a5345552e706e67"
            duration="S9:E27: It's a Tripartite (Pact)!"
            year="1940"
            desc="
In Season 1 of  New Girl, Japan enters the apartment in Berlin to sign a pact with Germany and Italy (who are in search of a new roommate) that agrees with the terms of the apartment. The roommate pact would produce a defense alliance between the three roommates. Japan’s goal was to create a new alliance where they were respected by their fellow roommates, and they were willing to agree to respect their potential roommates as well. The pact would also agree that all three roommates would co-operate in their efforts of aforesaid lines and defer the US from getting involved in any future events. Germany and Italy already had an agreement about the apartment and their living conditions together clarified in the Pact of Steel signed in 1939, but now they are looking for a new addition. Although they were all hoping to come together in this apartment, Japan, Germany, and Italy did not work closely together. Japan hoped by signing an agreement to be the newest roommate in apartment 4d, Britain’s known problems in Europe would give Japan a free hand in Asia allowing Japan to also take action their. On September 27th 1990, the roommate pact is signed. Nosey neighbor, US, took note of  this agreement, but choose not to voice their opinion because they were avoiding any conflict with Japan, and by reacting they would only heighten tensions, possibly having to get further involved.


"
          />
          <ListItem
            index={4}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://camo.githubusercontent.com/5b42884f004dca0e01c6d1dd949303b587bbb75d078f3d8f265027576c4b7465/68747470733a2f2f692e696d6775722e636f6d2f504635314d4b302e706e67"
            duration="S4:E13: Japanese-Soviet Neutrality Pact"
            year="1941"
            desc="The dispute between the North and South Strike factions are increasing tensions. The Soviet Union and Japan both want to use their resources in different ways, so in 1941 the Japanese-Soviet Neutrality Pact was created. This agreement was a non-aggression pact between the two powers that expired April 13, 1946. Initially, all was going well. The North and South strike disputes had ended, the Japanese were free to expand into the Pacific and South Asia, and the Soviets were able to withdraw troops from East Asia in preparation for the German Invasion. As a result of the  International Pact being  signed,  the Japanese decided to invade South causing the Soviets withdrew troops in preparation for German Invasion. Then, Japanese invaded Pearl Harbor, resulting in the US declaring War on Japan, and because of the Tripartite pact  Italy and Germany also became  involved. 

"
          />
          <ListItem
            index={5}
            trailer="https://player.vimeo.com/video/195276636?h=3d3dc211e0&title=0&byline=0&portrait=0"
            src="https://camo.githubusercontent.com/a1b4f4c2810fada3737b0d1f04d021c926f77ed493a72e5f01f859b48262e85b/68747470733a2f2f692e696d6775722e636f6d2f7438506d3145572e706e67"
            duration="S12:E7: Attack on Pearl Harbor"
            year="1941"
            desc="Japan considers a wrestling match with US. Japan’s most important advisor, Konoe, believed in expansionist views, he said were needed to expand the empire and become a “have” nation. With the investment of the Zaibastu, it was easier to push an expansionist policy on Japan. At the same time, US had a growing influence in  the Pacific due to Roosevelt’s declaration of Big Stick Democracy, which further pushed Japan into accepting the wrestling match between the US. Finally on December 7th 1941, Japan agrees to a charity match with wrestling champion US. Japan began the match with a bomb and this did not go as expected. While Japan treats the match as a lighthearted exhibition, US seems to be taking it seriously with a ferocious attack. US saw this as a sign of war. They immediatly get involved in the war they have been avoiding, body-slamming Japan, using several US tactics known to be successful in the past. 
"
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
