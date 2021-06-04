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
//           |_|  |_|  \__,_|\___|\__|_|\___/                                       //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              . hello world. catch your reward @.
//                                                                                  //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//          @title :: Fractionizer Contract                                         // 
//          @id :: FR-81369                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Fractionizer FR-81369 enables owners of a non fungible              //
//          token ERC721 to split (fractionize) the token into a given              //
//          amount of fractions as fungible ERC20 tokens of a given                 //
//          price measured in a given ERC20 token.                                  //
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


import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./PriceConsumerV3.sol";

contract Fractionizer is ERC20 {
    
//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
//                                                                                  //
//                                                                                  //
//          VARIABLES                                                               //
//                                                                                  //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
    
    uint256 private sharePrice;
    uint256 private ttlSupply;
    uint256 private availableSupply;
    bool private Limit;
    uint256 private End;

    uint256 private nftId;
    address private nftAdr;
    address private ercAdr;
    string private fractionName;
    string private fractionSymbol;

    IERC721 public nft;
    IERC20 public dai;
    ERC20 public frx;

    address public NFTowner;
    
    
//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
//                                                                                  //
//                                                                                  //
//          INITILIZATION                                                           //
//                                                                                  //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////

    constructor(
        address creator,
        string memory _name,
        string memory _symbol,
        address _nftAddress,
        uint256 _nftId,
        uint256 _sharePrice,
        uint256 _shareSupply,
        address _daiAddress
    )      
    ERC20(_name, _symbol) public {
        nftAdr = _nftAddress;
        nftId = _nftId;
        nft = IERC721(_nftAddress);
        sharePrice = _sharePrice;
        ttlSupply = _shareSupply * 10 ** 18;
        availableSupply = _shareSupply * 10 ** 18;
        dai = IERC20(_daiAddress);
        NFTowner = creator;
    }

    //////////////////////////////////////////////////////
    //                                                  //
    //                                                  //
    //                                                  //
    //          EVENT STATEMENTS                        //
    //                                                  //
    //                                                  //
    //////////////////////////////////////////////////////
    
    event sharesMinted(
        address _fractionizerTokenContract, 
        string _name, 
        string _symbol,
        uint256 _amount,
        uint256 _price,
        address _priceIn
        );

    event shareSold(
        address _fractionizerTokenContract, 
        string _name, 
        string _symbol, 
        address _creator, 
        uint256 _total, 
        uint256 _supply, 
        uint256 _price,
        address _nftAdr,
        uint256 _nftId,
        address _priceGivingErc
        );
        
    event clientShares(
        address client, 
        address _frxAdr, 
        uint256 _amount 
        
        );
        
    //////////////////////////////////////////////////////
    //                                                  //
    //                                                  //
    //                                                  //
    //          MODIFIER STATEMENTS                     //
    //                                                  //
    //                                                  //
    //////////////////////////////////////////////////////
    
    modifier onlyCreator(address _creator){
        require(_creator == NFTowner, "not authorized");
        _;
    }
        
    //////////////////////////////////////////////////////
    //                                                  //
    //                                                  //
    //                                                  //
    //          FUNCTION STATEMENTS                     //
    //                                                  //
    //                                                  //
    //////////////////////////////////////////////////////

    function start(bool _limit, uint256 _weeks, address _creator, uint256 _mintAmnt) onlyCreator(_creator) external {
        _mintAmnt = _mintAmnt * 10 ** 18;
        require(_creator == NFTowner, "only owner");
        if(_limit == true) {End = block.timestamp + 7 * _weeks;} // chainlink timestamp in future
        else End = 0;
        Limit = _limit;
        
        _mint(_creator, _mintAmnt);
    }
    function creatorMintTo(uint256 _amnt, address _creator, address _to) onlyCreator(_creator) external {
        _amnt = _amnt * 10 ** 18;
        require(_amnt <= availableSupply, "insuficient tokens"); // amount smaller than available supply  
        if(Limit) require(block.timestamp >= End, "not over"); // chainlink timestamp
        availableSupply = availableSupply - _amnt;
        _mint(_to, _amnt);
    }
    function creatorBurn(uint256 _amnt, address _creator) onlyCreator(_creator) external {
        _amnt = _amnt * 10 ** 18;
       require(_amnt <= availableSupply, "insuficient tokens"); // amount smaller than available supply  
       if(Limit == true) require(block.timestamp >= End, "not over"); // chainlink timestamp 
       ttlSupply = ttlSupply - _amnt;
       availableSupply = availableSupply - _amnt;
    }
    function buyShare(uint256 shareAmount,address _user) external {
         shareAmount = shareAmount * 10 ** 18;
        if(Limit == true) require(End >= 0, "not started");
        if(Limit == true) require(block.timestamp <= End, "too late"); // chainlink timestamp 
        require(shareAmount <= availableSupply, "not enough");
        
        
        uint256 _total = availableSupply;
        uint256 _liquid = 0;
        
        dai.transferFrom(_user, address(this), shareAmount * sharePrice);
        _mint(_user, shareAmount);
        
        address token = address(this);
        emit shareSold(token , fractionName, fractionSymbol, NFTowner, _total, _liquid, sharePrice, nftAdr, nftId, ercAdr);
        emit clientShares(_user, address(this), shareAmount);
    }
    function createPair(address erc1, address erc2, uint256 _amnt1, uint256 _amnt2) external pure {
        require(erc1 != erc2);
         _amnt1 = _amnt1 * 10 ** 18;
         _amnt2 = _amnt2 * 10 ** 18;
        // return (erc1, erc2);   
    }
    function removePair(address erc1, address erc2, uint256 _amnt1, uint256 _amnt2) external pure {
        require(erc1 != erc2);
         _amnt1 = _amnt1 * 10 ** 18;
         _amnt2 = _amnt2 * 10 ** 18;
         // return (erc1, erc2); 
    }
    function sellToPool(uint256 _amnt) external view {
         _amnt = _amnt * 10 ** 18;
        if(Limit == true) require(block.timestamp >= End, "not over"); // chainlink timestamp
        require(availableSupply == 0, "");
        
    }
    function buyFromPool(uint256 _amnt) external {
        
    }
    function withdrawICO(address _creator) onlyCreator(_creator) external {
        require(_creator == NFTowner, "only owner");
        require(block.timestamp > End, "not over");
        uint256 daiBalance = dai.balanceOf(address(this));
        if (daiBalance > 0) {
            // Check user DAI Balance
            uint256 unsoldShareBalance = ttlSupply - availableSupply;
            if (unsoldShareBalance > 0) {
                // Check Contract 
                dai.transfer(NFTowner, daiBalance);
                _mint(NFTowner, unsoldShareBalance);
            }
        }
    }
    function reimburse() external payable {
        
    }
    fallback() external {
        
    }
}