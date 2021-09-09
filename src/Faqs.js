import React, { Component } from "react";
import { ListGroupItem } from "reactstrap";
import { ListGroupItemHeading } from "reactstrap";
import { InputGroup } from "reactstrap";
class Faqs extends React.Component {
  render() {
    return (
      <div>
        <Listgroup>
          <ListGroupItemHeading>
            Question : What are Dynamic NFTs?{" "}
          </ListGroupItemHeading>
          <ListGroupItem>
            Answer : Dynamic NFTs have access to oracle information which gives
            us the ability to add utility to the tokens. This can be in the form
            of outside trigers, varifiable randomness, time based movement, and
            so much more explore our to find out the true potential of Dynamic
            NFTs.{" "}
          </ListGroupItem>
        </Listgroup>
        <Listgroup>
          <ListGroupItemHeading>
            Question : What is Frctio vision for Dynamic NFTs?
          </ListGroupItemHeading>
          <ListGroupItem>
            Answer : We aim to empowering creatives to build Dynamic NFTs that
            unlock the full potential of blockchain technology in all its
            available avenues.
          </ListGroupItem>
        </Listgroup>
        <Listgroup>
          <ListGroupItemHeading>
            Question : Help I dont know how to use the site and I am confused on
            how it works?
          </ListGroupItemHeading>
          <ListGroupItem>
            Answer : Our Discord has a support channel were the dev team and
            others can answer all your technical needs. Join here :
            https://discord.gg/zPeXpseVBQ{" "}
          </ListGroupItem>
        </Listgroup>
        <Listgroup>
          <ListGroupItemHeading>
            Question : None of the available oracles intrige me can you guys add
            new ones?
          </ListGroupItemHeading>
          <ListGroupItem>
            Answer : Yes! At the end of each mint you are given an opertunity to
            tell us what you guys would like to see next on the site. If you
            need a custom token you can order one from us. Also join our discord
            to discuss your ideas directly with the dev team. Join here :
            https://discord.gg/zPeXpseVBQ
          </ListGroupItem>
        </Listgroup>
      </div>
    );
  }
}

export default Faqs;
