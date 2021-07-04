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
//          The Factory FR-81972 creates Fractionizer Contracts.                    //
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

// TRUFFLE /*
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// */
// REMIX
/*
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/release-v3.0.0/contracts/token/ERC20/ERC20.sol";

// */

contract MLQ is ERC20 {
    constructor() public ERC20("MLQ Token", "MLQ") {
        _mint(0x1Cd6F4D329D38043a6bDB3665c3a7b06F79B5242, 100000008 * 10**18);
        _mint(0x6E505A3312fdc84215C93701F4a03AF74f98147a, 100000008 * 10**18);
        _mint(0xD88FFd4e072708C6Bb14fF2aC6C8E4eBFFC55238, 100000008 * 10**18);
        _mint(0x703a8596b8c2Cf56c23258FA2468470CB40E839f, 100000008 * 10**18);
        _mint(0xA46A7B2A856c15E6A6F6C89C77Bd6B4017b2Fe89, 100000008 * 10**18);
    }

    function gimmeSomeMLQ(uint256 ml) public {
        _mint(msg.sender, ml * 10**18);
    }
}
