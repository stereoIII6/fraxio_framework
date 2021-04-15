// SPDX_License-Identifier: MIT
pragma solidity ^0.6.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract OracleNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    constructor() public ERC721("PlayYourEverything", "PYE") {

    }

    mapping(uint256 => string) public pyeObjectbyID; 
    mapping(uint256 => address) public artistbyID;  
    mapping(uint256 => uint256) public lockedByID; 
    mapping(address => mapping(uint256 => uint256)) PYEsOfArtistList;
    mapping(address => uint256) HowMany;
    function bakePYE(address artist, string memory pyeObject)
        public payable
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();

        _mint(artist, newItemId);
        pyeObjectbyID[newItemId] = pyeObject;
        artistbyID[newItemId] = artist;
        lockedByID[newItemId] = msg.value; 
        PYEsOfArtistList[artist][HowMany[artist]] = newItemId;
        HowMany[artist] = HowMany[artist] + 1;       

        return newItemId;
    }
}