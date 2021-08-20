// SPDX-License-Identifier: MIT
pragma solidity ^0.6.6;
/*
//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
//                                                                                  //
//                                                                                  //
//            _____               _   _                                             //
//           |  ___| __ __ _  ___| |_(_) ___                                        //
//           | |_ | '__/ _` |/ __| __| |/ _ \                                       //
//           |  _|| | | (_| | (__| |_| | (_) |                                      //
//           |_|  |_|  \__,_|\___|\__|_|\___/                                       //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              . you done something right . now you know where to look @.
//                                                                                  //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//          @title :: Factory Contract                                              // 
//          @id :: FR-81972                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-66666 PYE Contract                                       //
//                                                                                  //
//                                                                                  //
//          @author :: fractio.xyz                                                  //
//          @b2bContact :: irvin@fractio.xyz                                        //
//          @OpSecContact :: nmisner@fractio.xyz                                    //
//          @DigitalArchitecture :: aron@fractio.xyz                                //
//          @SocialMediaContact :: poblano.daniel@fractio.xyz                       //
//          @CommunityManagement :: louell_sala@fractio.xyz                         //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
*/
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract PYE is ERC721 {
    address private admin;
    string public title;
    string private Pye;
    uint256 public count;
    address private mlqAdr;
    IERC20 public MLQ;
    mapping(uint256 => address) private owner;
    mapping(address => uint256) private amountOf;
    mapping(address => mapping(uint256 => uint256)) public tokenOfOwnerByCount;
    mapping(address => mapping(uint256 => uint256)) public tokenOfOwnerById;
    mapping(uint256 => uint256) public tokenById;

    string[] private PYEs;

    constructor(
        string memory name,
        string memory symbol,
        address _mlqAdr
    ) public ERC721(name, symbol) {
        mlqAdr = _mlqAdr;
        MLQ = IERC20(mlqAdr);
        admin = msg.sender;
        count = 0;
    }

    function bake(
        uint256 tokenId,
        string calldata _PYE,
        uint256 mlqAmnt
    ) external {
        require(MLQ.balanceOf(msg.sender) >= mlqAmnt);
        // VRF
        owner[tokenId] = msg.sender;
        tokenById[tokenId] = count;

        tokenOfOwnerByCount[msg.sender][amountOf[msg.sender]] = tokenId;
        tokenOfOwnerById[msg.sender][tokenId] = amountOf[msg.sender];
        PYEs.push(_PYE);
        _safeMint(msg.sender, tokenId);
        amountOf[msg.sender] = amountOf[msg.sender] + 1;
        count = count + 1;
    }

    function getTokenById(address _user, uint256 _count)
        public
        view
        returns (string memory)
    {
        uint256 tid = tokenOfOwnerByCount[_user][_count];
        uint256 tcount = tokenById[tid];

        return (PYEs[tcount]);
    }
}
