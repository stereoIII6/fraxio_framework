# WhitePaper v.1.0 [04/2021]

## Fractio Framework - Digital Asset Factory

The Fractio Framework is a software-as-a-service
Framework that enables users to create interactive 
digital assets that react to real time oracle data.
It is DAO-governed and utilizes auth-levels and 
id-verification to guarantee a fair and secure 
governance infrastructure. Our technology aims 
to realize the full potential of existing 
standards and eliminate the need for code.


# INDEX

0] Philosophy
+ Public Onboarding
+ Use Case Launchpad
+ Fractio Ethos

1] Tokenomics
+ Milk Token [MLK] Governance & Currency Token
+ Pye Token [PYE] Interactive Asset Class
+ Fractio Token [FRX] Fractional Asset Class
+ Milk Pools [MLQP] MLQiudity Pool Asset Class

2] Organizational Structure
+ Core Team
+ DAO Governance
+ Core Concept
+ Projects

3] Technologies
+ Ethereum Blockchain
+ IPFS
+ Filecoin
+ The Graph
+ Chainlink

4] Use Cases 
+ Dynamic Art 
+ Advertisement 
+ Sport Bets 
+ Trading Signals 
+ NFT Games 
+ Collectibles 
+ Music Albums 
+ Weather Insurance 
+ Activity Maps 
+ Event Tokens 
+ Geo Based Tokens
...

5] Strategy
+ Technology First
+ Explore Conquer
+ Double Up Security

6] Roadmap 2021

_________________________________________________________________________________________
_________________________________________________________________________________________

# Philosophy

## Public Onboarding

Fractio's target audience are commercial users, private users, 
celebrities and organisations that produce digital media. 
Our Framework enables them to utilize web3 technology and 
create digital asset classes on the blockchain without 
coding knowledge.  

## Use Case Launchpad

Our Framework empowers users to create digital asset classes
that will revolutionize existing standards and develop one 
that doesn't yet exist. 

## Ethos

decentralized, fair & autonomous

# Tokenomics

## Milk Token [MLK] ERC20

The Milk Token is Fractio's governance and payment token 
for the entire Fractio framework. The plan is to peg it 
to a DAO-governed formula to stabilize the MLK Price in
order to provide reliable price structures. MLK is based
on the ERC20 Token Standard and utilizes Chainlink
Oracles and Governance Proposals as input parameters
for the embedded stabizing function FR-72981.

There are several use cases for MLK on our platform.
MLK is used to create PYE Tokens, to split PYE
Tokens to FRX Tokens, to create a Milk Pool
"Milquidity", to create polls, proposals, 
and voting.

The token supply is fixed to a maximum amount of 
27 billion MLK tokens - the tokens are to be spread
through multiple Ethereum sidechains and the mainnet
with bridge contracts. The initial price of 1 MLK 
token will be 0.0000036 ETH and the minimum order
for the Mainnet Mint Event will be 5000.

The contract safe will keep 5 Billion MLK tokens locked 
until all other tokens have been minted and distributed.
It will be used as a liquidity pool against the Mint Event
Income to enable MLK trading on our framework in both 
directions.

Every Mint Event will release the MLK tokens to 
all Mint Event participants - they will be distributed 
evenly after the total target sale amount of 
17000 ETH has been reached. 
```
Mint Events:
The first Mint event is on the Ethereum Mainnet
and planned for Q3 2021

The second Mint Event is on the xDai Ethereum Sidechain
and planned for Q4 2021

The third Mint Event is on AVAX, Polygon or other Ethereum Sidechains
and planned for Q2 2022
```

```
The Distribution Scheme of the MLK Tokens:
7 Billion: operational resources
5 Billion: 1st Public Mint Event
5 Billion: 2nd Public Mint Event
5 Billion: 3rd Public Mint Event
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

## Fractio Token [FRX] ERC20 

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

## Milquidity Pools [MLQP] ERC20

In order to swap FRX tokens in a decentralized fashion, the
Fractio framework allows its users to provide Milquidity
by supplying MLK Tokens and FRX Tokens to a MLQPool.
MLQP's can be run as a regular swapping pool or as a
bid auction pool. The real time ratio of a specific FRX : MLK in
the MLQP determines the value of the specific FRX.

MLQP auctions are entirely customizable - you have the
choice to offer tokens individually in custom 
intervals or all at once.

```
Example:
10 FRX are pooled with 10000 MLK Tokens and the 
tokens get auctioned one after the other at a 
custom start price of 1000 MLK per FRX with an 
interval of 1 week. Each user can only bid once 
per interval and the user with the highest MLK 
bid receives the FRX token out of the pool.
```

# Organizational Structure

## Core Team

+ Chief Digital Architect - Aron Ayuk  
+ Social Media Engineer - Daniel Poblano
+ Business & Marketing Strategist - Irvin Chen
+ Technical Community Manager - Louell Sala
+ Operational Security Manager - Nathan Misner

## DAO Governance

The Fractio Framework is a Decentralized Autonomous
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
proposals on the Governance Board
and can be nominated as admins, managers,
moderators or Core Team applicants.
It requires a minimum amount of 
250000 MLK Tokens to be eligible for 
the Meta Team and it costs 1000 MLK/Month
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
Framework that enables users without coding 
experience to create interactive digital assets 
of any shape and size for any imaginable use case.

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

## Projects

Artist workshops for Mainnet Mint Event Token Auction.
These workshops are part of our launch campaign. The 
goal is to teach chosen artists how to use and create
digital asset classes on the Fractio Framework. The 
artworks these artist have created will then be auctioned
on the Mainnet Minting Event.

Video Workshops are another tool to onboard artist 
to the Mainnet Mint Event Token Auction and are the 
digital approach to our Workshops.

# Technologies 

## Ethereum Blockchain

Fractio is utilizing Ethereum blockchain technology 
and can theoretically be deployed on any Ethereum 
sidechain that has a running Chainlink Oracle and 
VRF node. The smart contract language that Fractio
uses is Solidity and because Fractio is a DAO, the main 
focus on the selection of our chains is decentralization.
Private smart contract chains (Binance Smart Chain for example)
are incompatible with our decentralized ethos.

## IPFS

The Interplanetary File System (IPFS) helps Fractio
store PYE Token data in a decentralized manner. It
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
a DAO-governed file storage network

## The Graph

The PYE token, FRX token, MLK token, and
MLQ Pool each get their own subGraph hosted
on theGraph. It enables Fractio to utilize 
the GraphQL database structure in a decentralized 
manner that saves large amounts of time and 
energy and enables much faster and more efficient 
search queries.

## Chainlink

Chainlink provides Fractio with real-world oracle
data and verifiable randomness, when needed. Chainlink is the
actual reason Fractio even exists. The team met
at the Chainlink Spring Hackathon 2021 and came
up with an idea that grew into this project.

# Use Cases 

## Dynamic Art

The PYE Editor is a way to allow artists, designers, 
and all types of creatives to design new forms of 
digital art.

The tokens can interact with oracle information reflecting 
live real world data. Futhermore, we can add verifiable random 
data to each layer making each PYE token completely unique.

## Advertisement

The PYE Token can be utilized for unique advertisement experiences
such as dynamic bonuses that can react to real time sales data and 
update the display automatically.
```
Example:
The PYE Token displays a bonus of 50% for the first buyer, the 
next buyer gets 49% displayed and they decrement for every following 
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
buying and selling opportunities on a chosen currency pair. It can even
trigger external functions and perform a transaction if approved.

## NFT Games

The NFT Gaming Space can utilize all types of digital interactive assets.
Players rank, health, levels, items and other assets can all be stored 
and visualized as a PYE Asset, and even display real-time game data or 
real-word oracle data.

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

## Weather Insurance 

PYE Weather Insurance Tokens are able to display read 
information for specific locations utilizing real time 
weather data. The token could send out warnings in case of 
approaching dangerous climate changes and for example help 
insurances set their rates and store.

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

## Technology First

Fratio wants to provide leading tech solutions
to gamify the blockchain space and onboard non-crypto 
users into the world of the web3. Our approach is to 
create a framework of use case models that clients can
utilize to create literally any type of digital asset.
Our tools eliminate the need for coding skills to create
Interactive dynamic assets. Graphic designers, digital
artists, and all types of creatives will be able to adapt 
a worklow in no time. 

## Explore Conquer

Our focus is to explore the boundaries of existing 
standards and develop the most efficient tools
to utilize blockchain technology.  

## Double Up Security

Our decentralized ethos requires us to build a trustless 
ecosystem. We are very strict about our Id Protocol and
determined to provide the safest possible but at the 
same time frictionless service for our users. 

# Roadmap 2021

## Q2 2021

+ PYE Editor
+ IPFS Integration
+ The Graph Integration
+ UIX Design
+ Filecoin Integration
+ 3rd Party Viewer
+ Testnet Launch (Rinkeby)

## Q3 2021

+ MLK Token
+ Creator Workshops
+ The Fractionizer
+ Pool Contract
+ Governance
+ Marketplace
+ Operational Security Tests
+ Mainnet Launch

## Q4 2021

+ Initial PYE Voting
+ Crosschain Verification
+ xDai Bridge
+ Operational Security Tests
+ xDai Launch

# Conclusions

We have introduced Fractio Framework 
and as we continue to work on Fractio,
we will prioritize our core ethos. 

Decentralized, fair & autonomous.

We look forward to extending the usage 
of our framework to other projects in 
the ecosystem.
