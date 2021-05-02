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

6] Phylosophy
+ Onboard the Public
+ Use Case Launchpad
+ The tool to create custom Digital Media on the Blockchain
+ The Future was Yesterday
+ Fractio Ethos

7] Organisation Structure
+ Core Team
+ DAO Governance
+ Core Concept
+ Rentability 
+ Liquidity
+ Projects

8] Roadmap 2021


# Tokenomics

## MILK Token [MLK] ERC20 / ERC677

The Milk Token is Fractio's Governance and Cash Token 
for the entire Fractio Framework. The Plan is to peg it 
to a DAO goverened Formula to stabilize the MLK Price in
order to provide reliable Price structures. The MLK
Token is based on the ERC20 Token Standard and utilizes 
Chainlink Oracles and Governance Proposals as Input
Parameters for the embedded stabizing function FR-72981

There are several use Cases for MLK on our Platform.
MLK is used to create PYE Tokens, it is used to split
your PYE Tokens to FRX Tokens, it is used for creating
a Milk Pool "Milquidity" and can be used to create 
Polls and Proposals and also for Voting.

The Token Supply is fixed to a maximum amount of 
27 Billion MLK Tokens the Tokens are to be spread
through Multiple Ethereum Sidechains and the Mainnet
with bridge Contracts. The Initial Price of 1 MLK 
Token will be 0.0000036 ETH and the minimum Order
for the Mainnet Mint Event 5000

The Contract Safe will keep 5 Billion MLK Tokens locked 
until all other Tokens have been minted and distributed.
It will be used as a Liquidity Pool against the Mint Event
Income to enable MLK trading on our Framework in both 
directions.

Every Mint Event will release the MLK Tokens to 
all ME Participants they will be distributed evenly
after the Target Sale Price of 50 Million USD has
been reached. 
```
Mint Events:
The first Mint event is on the Ethereum Mainnet
and planned for the Q3 2021

The second Mint Event is on the xDai Ethereum Sidechain
and planned for Q4 2021

The third Mint Event is on AVAX Ethereum Sidechain
and planned for Q2 2022
```

```
The Distribution Scheme of the MLK Tokens:
7 Billion operational recources
5 Billion first Public Mint Event
5 Billion second Public Milk Event
5 Billion third Public Milk Event
5 Billion final Mint Event
```

## PYE Token [PYE] ERC721 / ERC1155

The PYE token is a multilayer interactive token
it utilizes layer technology, verifiable andomness,
Real Time Oracle Data Feeds and Real Time Data Feeds
to generate interactive Audio Visual Tokens that can 
animate single layers to Data Feed Triggers or even 
trigger external SmartContract functions on the 
Blockchain.

The use cases for the PYE Token are close to unlimited.

The token Supply is also unlimited and users of the 
Fractio Framework can Mint PYE Tokens at any Time.

Minting the Token requires MLK Tokens and Network Fees. 

```
Costs:
10 MLK per Layer
50 MLK per external function trigger
10 MLK per draft save
50 MLK per mint
+ Network Fees
```

```
Example:
A PYE Token with 3 Layers and 1 external function 
trigger costs 130 MLK + networf feesif not draft saved.

A PYE Token with 1 Layer costs 70 MLK + network fees 
if not draft saved.

A PYE Token with 1 Layer costs 80 MLK + network fees 
if once draft saved.
```

## Fractio Token [FRX] ERC20 / ERC677

Fractio Tokens [FRX] are fractionized PYE Tokens.
The PYE Token ERC721 Standard is unique and has to be 
locked into the Fractionizer Contract FR-81369.
The FRX Token ERC20 Standard has a fixed amount the 
user customizes after he locks his PYE into the 
FRX Asset Class.

Every FRX Asset Class has its own Contract Address,
Token Name (MyPyeTokenName) and Symbol [FRX_MPTN]
and gets minted onto the creators address.

The FRX Tokens each represent a Fraction of the
Parent PYE Token. FRX tokens are Fungible Tokens
that are tied to the Non Fungible Value of a parent 
PYE Token. If the creator decides to mint 100 FRX
total supply from his Parent PYE every FRX will be 
worth 1/100 Parent PYE. The supply of specific
FRX tokens is fixed.

```
Example:

PYE_alpha gets locked at a ratio 1:1000 
and returns 1000 FRX_alpha each worth 
1/1000 PYE_alpha
```

When the value of the Parent PYE Token changes the 
value of the FRX Token changes Proportianlly

The locking of PYE and minting of FRX requires 
MLK Tokens and Network Fees.

```
Costs:

100 MLK for Locking PYE 
and Fractionizing
+ Network Fees
```

## Milquidity Pools [MLQP] ERC20 / ERC721 / ERC677 / ERC1155

In order to swap FRX tokens in a decentral Fashion 
Fractio Framework offers its users to provide Milquidity
by supplying MLK Tokens and FRX Tokens to a MLQPool.
MLQP's can be run as a regular swapping Pool or as an
bid auction pool. The real time ratio of a specific FRX : MLK in
the MLQP determines the value of the specific FRX.

MLQP Auctions are entirely customizable you have the
choice to offer Tokens single by single in custom 
intervals or all at once in a single interval.

```
Example:
10 FRX are Pooled with 10000 MLK Tokens and the 
tokens get auctioned one after the other at a 
custom start price of 1000 MLK per FRX with an 
interval of 1 week. Each user can only Bid once 
per Interval and the user with the highest MLK 
bid recieves the FRX token out of the Pool.
```


# Technologies 

## Ethereum Blockchain

Fractio is Utilizing Ethereum Blockchain Technology 
and can theoretically be deployed on any Ethereum 
Sidechain that has a running Chainlink Oracle and 
VRF Node. The Smart Contract language that Fractio
uses is Solidity. Since Fractio is a DAO the main 
focus on the selection of our Chains is actually 
decentralization. Private Smart Contract Chains 
like for example BSC are incompatible with our 
decentral ethos.

## IPFS

The Interplanetary File System IPFS helps Fractio
to store PYE Token data in a decentral manner. It
also provides a faster and more efficient network
infrastructure for our project. 

Every user will have his own IPFS directory on 
a Fractio IPFS Node and subdirectories for every 
PYE Token. 

We are planning to build a entirely new approach
of a pinning mechanism that lets users pin data 
by liking buying or commenting on PYE Tokens.

## Filecoin

Fractio is soon launching a Filecoin Node to 
support the IPFS Infrastructure we are building
by storing the Files on our Node and creating
a DAO Goverened Filestorage Network

## The Graph

The PYE Token , FRX Token , MLK Token
MLQ Pool each get an own suGraph hosted
on the graph. It enables Fractio to utilize 
the GraphQL database Structure in a decentral 
manner that saves large amounts of time and 
energy and enables way faster and more efficient 
searchquerys.

## Chainlink

Chainlink provides Fractio with Real World Oracle
Data and Verifiable Randomness. Chainlink is the
actual reason Fractio even exists. The team met
at the Chainlink Spring Hackathon 2021 and came
up with a pretty sweet Idea that turned out to 
become a use case Launchpad for the entire Ethereum 
Space.

# Use Cases 

## Advertisement
The PYE Token can be utilized for unique advertisement experiences
such as dynamic Bonus 
```
Example:
The first Buyer get a Bonus of 50% the next Buyer 
gets 49% and they decrement for every following 
Buyer at a fixed rate per Buyer
```
This could incentivise customers to buy products quicker if they are 
holder of the Dynamic Bonus PYE Token 

## Sport Bets

The PYE Token can be used for Betting by creating 2 PYE Tokens and anchoring 
them into a PYE Bet Contract. depending on the games outcome the winning pye 
token holder will then recieve  the price pool. Event Results can be displayed 
on the Token and Event Scores can be used to trigger animations.

```
Example:
There is a UFC Fight and 2 PYE Tokens (1 for 
each Fighter) were Fractionized to 1 Million 
Tokens each. The Token Sale can determin the 
Betting Odds or Oracle Odds can be included. 
The holders of the Winning token share the 
Prize Pool.
```

## Trading Signals

The PYE Token can be utilized as trading Signal Token that aqquires Real
Time Oracle Data and transforms chosen Price Feeds into visual Output of
buying and selling oppurtunities on a chosen currency pair. It can even
trigger external functions and perform a transaction if approved.

## Dynamic Art

The PYE Editor is a way to allow artist, designers and all types of 
creatives to design new Forms of digital Art that have yet to be discovered.
The tokens can interact with oracle information reflecting live real world 
data. Futhermore we can add verifiable random data to each layer making each 
PYE token completly unique.

## NFT Games

The NFT Gaming Space can utilize all types of digital interactive assets.
Players Rank Health ...,  can all be stored and visualized by a PYE Token
Levels, Items, Rankings all can be stored as PYE Asset and even display 
Real Time Game Data or Real Word Oracle Data.

## Collectibles

Sports Tradingcards are a good example how Real world data can be utilized
in Collectibles. The Player Image and stats can simply be pegged to 
Real World Oracle Sports Results Feeds of this very Player. It could 
as well display his latest post on social media.

## Memes

The Blockchain space has a deeply rooted Meme Culture attached to it. Some 
Memes are so Spot On that they are simply priceless. Memes are going to 
come alive with the PYE token and can be fed with external data feeds 
to keep the Meme burning hot.

``` 
Example:
There is a Meme of a Politician and his 
last Tweet gets displayed in a Speech Bubble.
```

## Music Albums

The Pye Token can be utilized as Music Medium. It secures your Media and only
makes ist accessible to users of the child FRX Token. It can display Videos
and store wav. and .aiff quality sound formats. The data you upload is immutable
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
send out warnings in case of approaching dangarous climate changes.

```
Example:
A picture of a Landscape that displays 
the Actual weather of theLocation the PYE 
Token is pegged to
```

## Activity Maps

PYE Activity Maps can visualize any Type of Data Stream for 
Example Metadata of a Group of Tokenholders and render a map
of their specified activity.

```
Example:
A Hackathon takes place and every user gets a Token this 
Token reads out the github repo activity data of all users
and creates a heatmap of wich team was most productive 
in deployments, codechanges, or lines of code.
```

## Event Tokens

PYE Event Tokens can be usd as Proof of Participation, 
as Proof of uthorization or as Proof of Authentification
Token...

## Geo Based Tokens

## ...

# Strategy

## Tech First

Fratio Framework wants to provide leading tech solutions
to gamify the blockchain space and onboard non crypto 
users into the world of the web3. Our approach is to 
create a Framework of Use Case models that clients can
utilize to create literally any type of digital asset.
Our tools eliminate the need for coding skills to create
Interactive Dynamic Assets. Graphic Designers and Digital
Artists and all types of creatives will be able to adapt 
a worklow in no time. Fractio's goal is to explore the 
limits of existing Standards and to create the need for
new standards.

## Explore Conquer

## Double Up Security

# Phylosophy

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
Organisation 

## Core Concept

## Rentability 

## Liquidity

## Projects

# Roadmap 2021


