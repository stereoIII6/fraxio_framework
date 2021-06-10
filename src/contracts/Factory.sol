// SPDX-License-Identifier: MIT
pragma solidity ^0.6.6;

/*
//////////////////////////////////////////////////////////////////////////////////////gence
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

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
//                                                                                  //
//                                                                                  //
//          IMPORT STATEMENTS                                                       //
//                                                                                  //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////

import "./Fractionizer.sol";

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import "https://raw.githubusercontent.com/smartcontractkit/chainlink/master/evm-contracts/src/v0.6/VRFConsumerBase.sol";
import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

contract Factory {

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
//                                                                                  //
//                                                                                  //
//          VARIABLES                                                               //
//                                                                                  //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
    
    mapping(address => uint256) private clientTokenCount;
    mapping(address => mapping(uint256 => address)) private clientTokenByIndex;
    mapping(address => address) private ownerByAdr;
    mapping(address => uint256) private indexByAdr;
    mapping(address => mapping(uint256 => mapping(address => uint256))) public safeMap;
    uint256 public frozenNfts;
    uint256 private pin; 
    Fractionizer[] private fractions;
    mapping(string => string) private frxSymbols;
    uint256 private frxCount;
    address payable private admin;
    address private _mock;
    address private _nfts;
    address public thisFraction;
    AggregatorV3Interface internal ethPriceFeed;
    
//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
//                                                                                  //
//                                                                                  //
//          INITILIZATION                                                           //
//                                                                                  //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////

    constructor(uint256 _pin) public {


        // Admin Account Setup
        admin = payable(msg.sender); // Admin Address
        pin = _pin; // Admin Password

        
        // frxCount = frxCount + 1;

        // Price Feed Oracle Call
        ethPriceFeed = AggregatorV3Interface(
            0x8A753747A1Fa494EC906cE90E9f37563A8AF630e
        );
    }
    
    //////////////////////////////////////////////////////
    //                                                  //
    //                                                  //
    //                                                  //
    //          MODIFIER STATEMENTS                     //
    //                                                  //
    //                                                  //
    //////////////////////////////////////////////////////
    
    modifier onlyAdmin(uint256 _pin) {
        require(admin == msg.sender, "not authorized"); // Only Contract Admin Authorized
        _;
    }
    
    //////////////////////////////////////////////////////
    //                                                  //
    //                                                  //
    //                                                  //
    //          EVENT STATEMENTS                        //
    //                                                  //
    //                                                  //
    //////////////////////////////////////////////////////
    
    event Fractionized (
        address _fractionizer,
        Fractionizer _fraction
        );
        
    //////////////////////////////////////////////////////
    //                                                  //
    //                                                  //
    //                                                  //
    //          FUNCTION STATEMENTS                     //
    //                                                  //
    //                                                  //
    //////////////////////////////////////////////////////  

    
    function nftSafe(
        address _nftAdr, // NFT Address
        uint256 _nftId,  // NFT Id
        address _frxAdr, // FRX Contract Address
        uint256 _amnt
        ) 
    private returns(bool, address, address, uint256, uint256){
      IERC721 nft = IERC721(_nftAdr);
      nft.transferFrom(msg.sender,address(this), _nftId);
      safeMap[_nftAdr][_nftId][_frxAdr] = _amnt; 
      frozenNfts = frozenNfts + 1;
    }
    
    function compareStrings(string memory a, string memory b) public pure returns (bool) {
    return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
}
    
    function doFractionize(
        // address _creator,
        string memory _name, // frx token name
        string memory _symbol, // frx token symbol
        uint256 _nftId, // specific NFT ID
        address _nftAdr, // nft token address
        address _ercAdr, // price giving currency 
        uint256 _ercInputAmount, // initial funding of frx with price giving erc
        uint256 _icoPrice, // price per frax token in _ercAdr 
        uint256 _icoSupply // amount of tokens initially created
        ) public payable {
            
            // REQUIRES
            require(msg.value >= 5 * 10 ** 15, "insufficient funds");
            IERC721 nftoken = IERC721(_nftAdr);
            address userIsOwner = nftoken.ownerOf(_nftId); 
            require(userIsOwner == msg.sender,"its not your token"); // user is nft owner requires nft adress id and user address 
            (, int256 ethPrice, ,uint256 stamp , ) = ethPriceFeed.latestRoundData();
            require(stamp != 0);
            require(ethPrice >= 1 * 10 ** 4 , "currency price out of Range" ); // erc price greater 0.0001 Dai 
            bool res = compareStrings(frxSymbols[_symbol], _symbol);
            require(res != true, "symbol already in use"); // frx token symbol name free for uniquetoken 
            require(_icoSupply > 1,"insufficient amount");
            require(_icoSupply < 1 * 10 ** 15,"out of range");
            require(_ercAdr != _nftAdr, "no price giving token");
            require(_ercInputAmount >= 0, "no negative balances for fractional contracts allowed");
            
            // Send out NFT
            nftoken.transferFrom(msg.sender,address(this),_nftId);
            
            frxSymbols[_name] = _name; 
        Fractionizer doFraction = new Fractionizer(msg.sender,_name, _symbol, _nfts, _nftId, _icoPrice, _icoSupply, _mock);
        address frxAdr = address(doFraction); // FRX Token Address
        fractions.push(doFraction);
        thisFraction = frxAdr;
        clientTokenByIndex[msg.sender][clientTokenCount[msg.sender]] = frxAdr;
        clientTokenCount[msg.sender] = clientTokenCount[msg.sender] + 1;
        frxCount = frxCount + 1;
        doFraction.reimburse();
        emit Fractionized(frxAdr,doFraction);
        
    }
    
    function showFrx(uint256 _i, uint256 _pin) public onlyAdmin(_pin)  view returns(Fractionizer) {
        Fractionizer showFraction = fractions[_i];
        return showFraction;
    }
    
    function myFrxCount() public view returns(uint256){
        return clientTokenCount[msg.sender];
    }
    
   function myFrxIndexByAddress(address _frx) public view returns(uint256){
       require(ownerByAdr[_frx] == msg.sender, "not your token");
       return indexByAdr[_frx];
   }  
    
    function withdrawFunds(uint256 _pin) public onlyAdmin(_pin) payable {
        uint256 balance = address(this).balance;
        doTransfer(admin,balance,_pin);
    }
    
   function startCoinSale(address _frxAdr, bool _limit, uint256 _tstamp, uint256 _mintAmnt) public {
       Fractionizer myFraction = Fractionizer(_frxAdr);
       myFraction.start(_limit,_tstamp,msg.sender, _mintAmnt);
   } 
   
   function withDrawFromCoinSale(address _frxAdr) public {
       Fractionizer myFraction = Fractionizer(_frxAdr);
       myFraction.withdrawICO(msg.sender);
   }
   
   function buyShareFromCoinSale(address _frxAdr,  uint256 _amnt) public {
       Fractionizer myFraction = Fractionizer(_frxAdr);
       myFraction.buyShare(_amnt,msg.sender);
   }
    
    function doTransfer(address payable _to, uint256 _amount, uint256 _pin) private onlyAdmin(_pin) {
        _to.transfer(_amount);
    }
    
    
}