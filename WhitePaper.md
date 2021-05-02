# WhitePaper v.1.0 [04/2021]

Fractio Framework - Digital Asset Factory


# INDEX

1] Tokenomics
+ Milk Token [MLK] Governance & Currency Token
+ Pye Token [PYE] Interactive Asset Class
+ Fractio Token [FRX] Fractional Asset Class
+ Milk Pools [MLQP] MLQiudity Pool Asset Class

2] Technologies
+ Ethereum Blockchain
+ IPFS
+ Filecoin
+ The Graph
+ Chainlink

3] Use Cases 
+ Advertisement
+ Sport Bets
+ Trading Signals
+ Dynamic Art
+ NFT Games
+ Collectibles
+ Music Albums
+ Weather Maps
+ Activity Maps
+ Event Tokens
+ Geo Based Tokens
...

5] Strategy
+ Tech First
+ Explore Conquer
+ Double Up Security

6] Philosophy
+ Onboard the Public
+ Use Case Launchpad
+ The tool to create custom Digital Media on the Blockchain
+ The Future was Yesterday
+ Fractio Ethos

7] Organizational Structure
+ Core Team
+ DAO Governance
+ Core Concept
+ Rentability 
+ Liquidity
+ Projects

8] Roadmap 2021


# Tokenomics

## MILK Token [MLK] ERC20 / ERC677

The Milk Token is Fractio's governance and payment token 
for the entire Fractio framework. The plan is to peg it 
to a DAO-goverened formula to stabilize the MLK Price in
order to provide reliable price structures. MLK is basked
on the ERC20 Token Standard and utilizes Chainlink
Oracles and Governance Proposals as input parameters
for the embedded stabizing function FR-72981

There are several use cases for MLK on our platform.
MLK is used to create PYE Tokens, to split PYE
Tokens to FRX Tokens, to create a Milk Pool
"Milquidity", to create polls and proposals, 
and can be used for Voting.

The token supply is fixed to a maximum amount of 
27 billion MLK tokens - the tokens are to be spread
through multiple Ethereum sidechains and the mainnet
with bridge contracts. The initial price of 1 MLK 
token will be 0.0000036 ETH and the minimum order
for the Mainnet Mint Event will be 5000

The contract safe will keep 5 Billion MLK tokens locked 
until all other tokens have been minted and distributed.
It will be used as a liquidity pool against the Mint Event
Income to enable MLK trading on our framework in both 
directions.

Every Mint Event will release the MLK tokens to 
all ME participants - they will be distributed evenly
after the total target sale amount of 50 Million USD has
been reached. 
```
Mint Events:
The first Mint event is on the Ethereum Mainnet
and planned for Q3 2021

The second Mint Event is on the xDai Ethereum Sidechain
and planned for Q4 2021

The third Mint Event is on AVAX Ethereum Sidechain
and planned for Q2 2022
```

```
The Distribution Scheme of the MLK Tokens:
7 Billion: operational recources
5 Billion: 1st Public Mint Event
5 Billion: 2nd Public Milk Event
5 Billion: 3rd Public Milk Event
5 Billion: 4th and final Mint Event
```

## PYE Token [PYE] ERC721 / ERC1155

The PYE token is a multilayer interactive token.
It utilizes layer technology, verifiable randomness,
real-time oracle data feeds and real-time data feeds
to generate interactive audio/visual tokens that can 
animate single layers to data feed triggers or even 
trigger external smart contract functions on the 
blockchain.

The use cases for the PYE Token are close to unlimited. 
A simple example is NFT artwork that changes the image displayed
based upon the market price of a crypto asset such as bitcoin.

The token supply is unlimited, and users of the 
Fractio framework can mint PYE tokens at any time.

Minting the PYE token requires MLK tokens and network fees. 

```
Costs:
10 MLK per layer
50 MLK per external function trigger
10 MLK per draft save
50 MLK per mint
+ Network Fees
```

```
Example:
A PYE Token with 3 Layers and 1 external function 
trigger costs 130 MLK + network fees if not draft saved.

A PYE Token with 1 Layer costs 70 MLK + network fees 
if not draft saved.

A PYE Token with 1 Layer costs 80 MLK + network fees 
if once draft saved.
```

## Fractio Token [FRX] ERC20 / ERC677

Fractio tokens [FRX] are fractionized PYE tokens.
The PYE token ERC721 standard is unique and has to be 
locked into the Fractionizer contract FR-81369.
The FRX token conforms to the ERC20 standard and has a fixed 
amount that the user customizes after he locks his PYE into 
contract, creating the new FRX asset class.

Every FRX asset class has its own contract address,
token name (MyPyeTokenName) and Symbol [FRX_MPTN],
and gets minted onto the creator's address.

The FRX tokens each represent a fraction of the
parent PYE token. FRX tokens are fungible tokens
that are tied to the non-fungible Value of a parent 
PYE token. If the creator decides to mint 100 FRX
total supply from his parent PYE every FRX will be 
worth 1/100 Parent PYE. The supply of specific
FRX tokens is fixed.

```
Example:

PYE_alpha gets locked at a ratio 1:1000 
and returns 1000 FRX_alpha each worth 
1/1000 PYE_alpha
```

When the value of the parent PYE token changes, the 
value of the FRX token changes proportionally

The locking of PYE and minting of FRX requires 
MLK tokens and network fees.

```
Costs:

100 MLK for Locking PYE 
and Fractionizing
+ Network Fees
```

## Milquidity Pools [MLQP] ERC20 / ERC721 / ERC677 / ERC1155

In order to swap FRX tokens in a decentral fashion, the
Fractio framework allows its users to provide Milquidity
by supplying MLK Tokens and FRX Tokens to a MLQPool.
MLQP's can be run as a regular swapping pool or as a
bid auction pool. The real time ratio of a specific FRX : MLK in
the MLQP determines the value of the specific FRX.

MLQP auctions are entirely customizable - you have the
choice to offer tokens inidividually in custom 
intervals or all at once.

```
Example:
10 FRX are pooled with 10000 MLK Tokens and the 
tokens get auctioned one after the other at a 
custom start price of 1000 MLK per FRX with an 
interval of 1 week. Each user can only bid once 
per interval and the user with the highest MLK 
bid recieves the FRX token out of the pool.
```


# Technologies 

## Ethereum Blockchain

Fractio is utilizing Ethereum blockchain technology 
and can theoretically be deployed on any Ethereum 
sidechain that has a running Chainlink Oracle and 
VRF node. The smart contract language that Fractio
uses is Solidity. Because Fractio is a DAO, the main 
focus on the selection of our chains is decentralization.
Private smart contract chains (Binance Smart Chain for example)
are incompatible with our decentral ethos.

## IPFS

The Interplanetary File System (IPFS) helps Fractio
store PYE Token data in a decentral manner. It
also provides a faster and more efficient network
infrastructure for our project. 

Every user will have his own IPFS directory on 
a Fractio IPFS Node and subdirectories for every 
PYE Token. 

We are planning to build a entirely new approach
of a pinning mechanism that lets users pin data 
by liking, buying, or commenting on PYE Tokens.

## Filecoin

Fractio is soon launching a Filecoin node to 
support the IPFS infrastructure we are building
by storing the files on our node and creating
a DAO-goverened filestorage network

## The Graph

The PYE token, FRX token, MLK token, and
MLQ Pool each get their own suGraph hosted
on the graph. It enables Fractio to utilize 
the GraphQL database structure in a decentral 
manner that saves large amounts of time and 
energy and enables much faster and more efficient 
searchquerys.

## Chainlink

Chainlink provides Fractio with real-world oracle
data and verifiable randomness, where needed. Chainlink is the
actual reason Fractio even exists. The team met
at the Chainlink Spring Hackathon 2021 and came
up with an idea that turned out to become a  
use case launchpad for the entire Ethereum ecosystem.

# Use Cases 

## Dynamic Art

The PYE Editor is a way to allow artists, designers, and all types of 
creatives to design new forms of digital art that have yet to be discovered.
The tokens can interact with oracle information reflecting live real world 
data. Futhermore, we can add verifiable random data to each layer making each 
PYE token completly unique.

## Advertisement
The PYE Token can be utilized for unique advertisement experiences
such as dynamic bonuses 
```
Example:
The first buyer gets a bonus of 50%, the next buyer 
gets 49% and they decrement for every following 
buyer at a fixed rate per buyer
```
This could incentivize customers to buy products quicker if they are 
holder of the Dynamic Bonus PYE Token 

## Sport Bets

The PYE Token can be used for betting by creating 2 PYE tokens and anchoring 
them into a PYE bet contract. Depending on the game's outcome, the winning PYE 
token holder will then recieve the prize pool. Event results can be displayed 
on the token and event scores can be used to trigger animations.

```
Example:
There is a UFC Fight and 2 PYE tokens (1 for 
each fighter) were fractionized to 1 million 
tokens each. The token sale can determine the 
betting odds, or oracle odds can be included. 
The holders of the winning token share the 
prize pool.
```

## Trading Signals

The PYE token can be utilized as a trading signal token that aquires real-time
oracle data and transforms chosen price feeds into visual output of
buying and selling oppurtunities on a chosen currency pair. It can even
trigger external functions and perform a transaction if approved.

## NFT Games

The NFT Gaming Space can utilize all types of digital interactive assets.
Players rank, health, levels, items, etc. can all be stored and visualized 
as a PYE Asset, and even display real-time game data or real-word oracle data.

## Collectibles

Sports trading cards are a good example how real-world data can be utilized
in collectibles. An athlete's image and stats can simply be pegged to 
real-world sports results feeds. It could also display his/her latest 
post on social media.

## Memes

The Blockchain space has a deeply rooted meme culture attached to it. Some 
memes are so ubiquitous that they are simply priceless. Memes are going to 
come alive with the PYE token and can be fed with external data feeds 
to keep the meme burning hot.

``` 
Example:
There is a meme of a politician and his 
last tweet gets displayed in a speech bubble.
```

## Music Albums

The Pye Token can be utilized as music medium. It secures your media and only
makes it accessible to owners of the child FRX Token. It can display videos
and store .wav and .aiff quality sound formats. The data you upload is immutable
and its acces restricted exactly like the token. You can add programmable 
functionalities to the album that react to real time data.

```
Example:
A musician can release his album with an hidden 
track that only gets released after a certain 
amount of sales.
```

## Weather Maps

PYE weather maps are able to display weather information for 
specific locations utilizing realtime weather data. The token could 
send out warnings in case of approaching dangerous climate changes.

```
Example:
A picture of a landscape that displays 
the actual weather of the location the PYE 
token is pegged to.
```

## Activity Maps

PYE activity maps can visualize any type of data stream (for 
example, metadata of a group of tokenholders), and render a map
of their specified activity.

```
Example:
A Hackathon takes place and every user gets a token - this 
token reads out the github repo activity data of all users
and creates a heatmap of wich team was most productive 
in deployments, codechanges, or lines of code.
```

## Event Tokens

PYE event tokens can be usd as Proof of Participation, 
as Proof of Authorization or as Proof of Authentification
Token. Whenever a real-life event occurs, the PYE Event 
Token can be utilized as ticket area Pass and Participation
Protocol.

## Geo Based Tokens

The PYE framework is able to render maps of geopositions - if 
authorized, it can render the geopositions of tokenholders 
onto a map or display the users geodata.

## ...

# Strategy

## Tech First

Fratio wants to provide leading tech solutions
to gamify the blockchain space and onboard non-crypto 
users into the world of the web3. Our approach is to 
create a framework of use case models that clients can
utilize to create literally any type of digital asset.
Our tools eliminate the need for coding skills to create
Interactive dynamic assets. Graphic designers, digital
artists, and all types of creatives will be able to adapt 
a worklow in no time. Fractio's goal is to explore the 
limits of existing standards and to create the need for
new standards.

## Explore Conquer

## Double Up Security

# Philosophy

## Onboard the Public

## Use Case Launchpad

## The tool to create custom Digital Media on the Blockchain

## The Future was Yesterday

## Ethos

# Organisation Structure

## Core Team

+ Chief Digital Architect - Aron Ayuk  
+ Social Media Engineer - Daniel Poblano
+ Business & Marketing Strategist - Irvin Chen
+ Technical Community Manager - Louell Sala
+ Operational Security Manager - Nathan Misner

## DAO Governance

The Fractio Framework is a Decentral Autonomous
Organization. The Organization is layered into 
3 authorization levels:

The Core Team: Level 3
The Meta Team: Level 2
The Fractio Community: Level 1

The Core Auth Team is the core team of project 
developers, marketers and business strategists 
that keep the project evolving and make sure it
operates frictionlessly. In order to become a 
Core Team Member, you have to be a Meta Team 
Member, be nominated and voted in by at least 10% 
of Fractio Community Level 3, and at least 20% 
of Meta Team Level 2 Votes to be eligible.

The Meta Team is a team of Fractio
Governance Board members that are
authorized to create proposals,
events, polls, and fundraisers
on the Governance Board, voting on 
proposals on the Governace Board
and can be nominated as admins, managers,
moderators or Core Team applicants.
It requires a minimum amount of 
250000 MLK Tokens to be eligible for 
the Meta Team it costs 1000 MLK / Month
to be a Member of the Meta Team.

The Fractio Community is the Base Layer
of our DAO - every user that signed to our 
plattform and verified their digital ID 
is automatically drafted to our Fractio 
Community. Every member has the right to 
leave one vote on every proposal or poll 
and outside of the governance board use 
the plattform at the exact same conditions 
as every other member.

## Core Concept

The Fractio Framework is a software-as-a-service
Framework that enables users without 
knowledge of code languages to create 
interactive digital assets of any shape 
and size for any imaginable use case we will
come up with

The Core Team pitches ideas and concepts
inspired by the Fractio community.

The Meta Team creates polls, fundraisers 
and proposals to engage the community.

The community decides and inspires the 
Core Team for new governance pitches

The Concept is based on the philosophy
that 1 user gets 1 vote on 1 event, and needs
strict surveillance in terms of digital 
ID - that's why we are developing a mechanism
that detects and eliminates any form of 
double ID or ID fraud. The ID shall not 
rely on any single point of failure like 
national ID cards or credit card details.

## Rentability 

Aside all the use cases that Fractio
adds to the Blockchain ecosystem there
are other lucrative aspects that allow
Fractio to 

## Liquidity

## Projects

# Roadmap 2021


