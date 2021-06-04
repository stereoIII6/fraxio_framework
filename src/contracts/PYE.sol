// SPDX-License-Identifier: MIT
pragma solidity ^0.6.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract PYE is ERC721 {
    address private admin;
    string public creator;
    string public title;
    string private PYE;
    address private mlqAdr;
    IERC20 public MLQ;
    mapping(uint256 => address) private owner;
    mapping(address => uint256) private amountOf;
    mapping(address => mapping(uint256 => uint256)) private tokenById; // tokenByIdOfOwner[msg.sender][x<<amountOfowner[msg.sender]] = tokId;
    string[] private PYEs; 

    constructor(string memory name,string memory symbol, address _mlqAdr) 
    ERC721(name,symbol) public {
    mlqAdr = _mlqAdr;
    MLQ = IERC20(mlqAdr);    
    }
    function bake(uint tokenId, string calldata _PYE, uint256 mlqAmnt) external {
        require(MLQ.balanceOf(msg.sender) >= mlqAmnt);
        // VRF 
        owner[tokenId] = msg.sender;
        amountOf[msg.sender] = amountOf[msg.sender] + 1;
        tokenById[msg.sender][amountOf[msg.sender]] = tokenId;
        PYEs.push(_PYE);
        _safeMint(msg.sender,tokenId);
        
    }
}