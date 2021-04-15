// SPDX_License-Identifier: MIT
pragma solidity ^0.6.6;
/*
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/release-v3.0.0/contracts/token/ERC721/ERC721.sol";
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/release-v3.0.0/contracts/access/Ownable.sol";
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/release-v3.0.0/contracts/utils/Strings.sol";
import "https://raw.githubusercontent.com/smartcontractkit/chainlink/master/evm-contracts/src/v0.6/VRFConsumerBase.sol";
*/

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";

contract _OracleNFT is ERC721, VRFConsumerBase, Ownable {
    
    using SafeMath for uint256;
    using Strings for string;
    
    uint256 private _tokenIds;
    bytes32 internal keyHash;
    
    uint256 internal linkFee;
    uint256 public randomResult;
    
    address private vRFCoordinator;
    address private linkToken;
    
      /**
     * Constructor inherits VRFConsumerBase
     *
     * Network: xDAI
     * Chainlink VRF Coordinator address: 0xbA1EbEf4BD6610aC1C5ddaE7a4Ab19D7fcf22b3F
     * LINK token address:                0xE2e73A1c69ecF83F464EFCE6A5be353a37cA09b2
     * Key Hash: 0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4
     */
    
     /**
     * Constructor inherits VRFConsumerBase
     *
     *  Network: Polygon Mumbai Testnet
        LINK Token	0x326C977E6efc84E512bB9C30f76E30c160eD06FB
        VRF Coordinator	0x8C7382F9D8f56b33781fE506E897a4F1e2d17255
        Key Hash	0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4
        Fee	0.0001 LINK
     */

      /**
     * Constructor inherits VRFConsumerBase
     *
     * Network: Avax Fuji Testnet
     * Chainlink VRF Coordinator address: 0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B
     * LINK token address:                0x01BE23585060835E02B77ef475b0Cc51aA1e0709
     * Key Hash: 0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311
     */

      /***
     * Constructor inherits VRFConsumerBase
     *
     * Network: Rinkeby
     * Chainlink VRF Coordinator address: 0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B
     * LINK token address:                0x01BE23585060835E02B77ef475b0Cc51aA1e0709
     * Key Hash: 0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311
     */


    constructor()
    public
    VRFConsumerBase(0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B, 0x01BE23585060835E02B77ef475b0Cc51aA1e0709) 
    ERC721("PlayYourEverything", "PYE") 
    {
        vRFCoordinator = 0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B;
        linkToken = 0x01BE23585060835E02B77ef475b0Cc51aA1e0709;
        keyHash = 0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311;
        linkFee = 0.1 * 10**18; // 0.1 LINK
    }
    struct PYEToken {
        uint256 id;
        address artist;
        string name;
        string priv;
        string pub;
        string pYEObject;
    }
    
    PYEToken[] private pyeTokens;
    
    mapping(bytes32 => string) public pyeObjectbyIDT; 
    mapping(bytes32 => uint256) public IDTbyID; 
    mapping(bytes32 => address) public artistByIDT;  
    mapping(bytes32 => string) public nameByIDT; 
    mapping(bytes32 => string) private privByIDT; 
    mapping(bytes32 => string) public pubByIDT; 
    mapping(address => mapping(uint256 => bytes32)) public ArtistPyeList;
    mapping(address => uint256) public howMany;
    
    function bakePYE(
        uint256 userProvidedSeed,
        string memory _name,
        string memory _object,
        string memory _priv,
        string memory _pub
    ) public returns (bytes32) {
        
        require(
            LINK.balanceOf(address(this)) >= linkFee,
            "Not enough LINK - fill contract with faucet"
        );
        
        bytes32 newItemId = requestRandomness(keyHash, linkFee, userProvidedSeed);
        ArtistPyeList[msg.sender][howMany[msg.sender]] = newItemId;
        howMany[msg.sender] = howMany[msg.sender] + 1; 
        pyeObjectbyIDT[newItemId] = _object;
        artistByIDT[newItemId] = msg.sender;
        nameByIDT[newItemId] = _name;
        privByIDT[newItemId] = _priv;
        pubByIDT[newItemId] = _pub;
        
         
        
        return newItemId;
    }

    function getTokenURI(uint256 tokenId) public view returns (string memory) {
        return tokenURI(tokenId);
    }

    function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );
        _setTokenURI(tokenId, _tokenURI);
    }
    
    function fulfillRandomness(bytes32 requestId, uint256 randomNumber)
        internal
        override
        
    {
        
        uint256 newItemId = randomNumber; 
        _safeMint(artistByIDT[requestId], newItemId);
        IDTbyID[requestId] = newItemId;
        pyeTokens.push(
            PYEToken(newItemId,
            msg.sender,
            nameByIDT[requestId],
            privByIDT[requestId],
            pubByIDT[requestId],
            pyeObjectbyIDT[requestId])
        );
        
        
    }
    function linkBalance() public view returns(uint256){
    
        return LINK.balanceOf(address(this)) / 10 ** 18;
    }
    
    function showMyTokenByIndex(uint256 index) public view returns(uint256,string memory,string memory,string memory){
        bytes32 hTok = ArtistPyeList[msg.sender][index];
        return (IDTbyID[hTok],nameByIDT[hTok],pubByIDT[hTok],pyeObjectbyIDT[hTok]);
    }
}

         