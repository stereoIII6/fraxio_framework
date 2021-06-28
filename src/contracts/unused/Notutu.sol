pragma solidity 0.6.6;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

contract N0tUtu {
    AggregatorV3Interface internal linkPriceFeed;
    AggregatorV3Interface internal btcPriceFeed;
    AggregatorV3Interface internal ethPriceFeed;
    AggregatorV3Interface internal uniPriceFeed;
    AggregatorV3Interface internal oneinchPriceFeed;
    AggregatorV3Interface internal aavePriceFeed;
    AggregatorV3Interface internal balPriceFeed;
    AggregatorV3Interface internal compPriceFeed;
    AggregatorV3Interface internal crvPriceFeed;
    AggregatorV3Interface internal daiPriceFeed;
    AggregatorV3Interface internal dotPriceFeed;
    AggregatorV3Interface internal mkrPriceFeed;
    AggregatorV3Interface internal perpPriceFeed;
    AggregatorV3Interface internal renPriceFeed;
    AggregatorV3Interface internal snxPriceFeed;
    AggregatorV3Interface internal sushiPriceFeed;
    AggregatorV3Interface internal usdcPriceFeed;
    AggregatorV3Interface internal yfiPriceFeed;
    AggregatorV3Interface internal customPriceFeed;

    constructor() public {
        
        // XDAI SETUP COMPLETE 
    
        btcPriceFeed = AggregatorV3Interface(
            0x6C1d7e76EF7304a40e8456ce883BC56d3dEA3F7d // XDAI
        );
        linkPriceFeed = AggregatorV3Interface(
            0xed322A5ac55BAE091190dFf9066760b86751947B // XDAI

        );
        uniPriceFeed = AggregatorV3Interface(
            0xd98735d78266c62277Bb4dBf3e3bCdd3694782F4 // XDAI

        );
        oneinchPriceFeed = AggregatorV3Interface(
            0xFDF9EB5fafc11Efa65f6FD144898da39a7920Ae8 // XDAI

        );
        aavePriceFeed = AggregatorV3Interface(
            0x2b481Dc923Aa050E009113Dca8dcb0daB4B68cDF // XDAI

        );
        balPriceFeed = AggregatorV3Interface(
            0x1b723C855F7D2c2785F99486973271355e782d77 // XDAI

        );
        compPriceFeed = AggregatorV3Interface(
            0xBa95Bc8418Ebcdf8a690924E1d4aD5292139F2EA // XDAI

        );
        crvPriceFeed = AggregatorV3Interface(
            0xC77B83ac3Dd2a761073bD0f281f7b880B2DDDe18 // XDAI

        );
        daiPriceFeed = AggregatorV3Interface(
            0x678df3415fc31947dA4324eC63212874be5a82f8 // XDAI

        );
        dotPriceFeed = AggregatorV3Interface(
            0x3c30c5c415B2410326297F0f65f5Cbb32f3aefCc // XDAI

        );
        mkrPriceFeed = AggregatorV3Interface(
            0x51e4024255d0cBd1F4C79AEe6BDB6565Df2C5d1b // XDAI

        );
        perpPriceFeed = AggregatorV3Interface(
            0x76e76F7E73F3BD42E3c2b4282B50b36E78130B4A // XDAI

        );
        renPriceFeed = AggregatorV3Interface(
            0x27d4D36968a2BD1Cc3406D99cB1DF50561dBf2a4 // XDAI

        );
        snxPriceFeed = AggregatorV3Interface(
            0x3b84d6e6976D5826500572600eB44f9f1753827b // XDAI
 
        );
        sushiPriceFeed = AggregatorV3Interface(
            0xC0a6Bf8d5D408B091D022C3C0653d4056D4B9c01 // XDAI

        );
        usdcPriceFeed = AggregatorV3Interface(
            0x26C31ac71010aF62E6B486D1132E266D6298857D // XDAI

        );
        yfiPriceFeed = AggregatorV3Interface(
            0x14030d5a0C9e63D9606C6f2c8771Fc95b34b07e0 // XDAI
 
        );
}
    
    function daiFeed() public view returns (int256){
        (, int256 daiPrice, , , ) = daiPriceFeed.latestRoundData();
        return(daiPrice);
        }
    function usdcFeed() public view returns (int256){
        (, int256 usdcPrice, , , ) = usdcPriceFeed.latestRoundData();
        return(usdcPrice);
        }
    function ethFeed() public view returns (int256){
        (, int256 ethPrice, , , ) = ethPriceFeed.latestRoundData();
        return(ethPrice);
        }
    function btcFeed() public view returns (int256){
        (, int256 btcPrice, , , ) = btcPriceFeed.latestRoundData();
        return(btcPrice);
        } 
    function dotFeed() public view returns (int256){
        (, int256 dotPrice, , , ) = dotPriceFeed.latestRoundData();
        return(dotPrice);
        }
    function aaveFeed() public view returns (int256){
        (, int256 aavePrice, , , ) = aavePriceFeed.latestRoundData();
        return(aavePrice);
        }
    function balFeed() public view returns (int256){
        (, int256 balPrice, , , ) = balPriceFeed.latestRoundData();
        return(balPrice);
        }
    function compFeed() public view returns (int256){
        (, int256 compPrice, , , ) = compPriceFeed.latestRoundData();
        return(compPrice);
        }
    function crvFeed() public view returns (int256){
        (, int256 crvPrice, , , ) = crvPriceFeed.latestRoundData();
        return(crvPrice);
        }    
    function linkFeed() public view returns (int256){
        (, int256 linkPrice, , , ) = linkPriceFeed.latestRoundData();
        return(linkPrice);
        }
    function mkrFeed() public view returns (int256){
        (, int256 mkrPrice, , , ) = mkrPriceFeed.latestRoundData();
        return(mkrPrice);
        }    
    function perpFeed() public view returns (int256){
        (, int256 perpPrice, , , ) = perpPriceFeed.latestRoundData();
        return(perpPrice);
        }
    function renFeed() public view returns (int256){
        (, int256 renPrice, , , ) = renPriceFeed.latestRoundData();
        return(renPrice);
        }
    function snxFeed() public view returns (int256){
        (, int256 snxPrice, , , ) = snxPriceFeed.latestRoundData();
        return(snxPrice);
        }
    function sushiFeed() public view returns (int256){
        (, int256 sushiPrice, , , ) = sushiPriceFeed.latestRoundData();
        return(sushiPrice);
        }
    function yfiFeed() public view returns (int256){
        (, int256 yfiPrice, , , ) = yfiPriceFeed.latestRoundData();
        return(yfiPrice);
        }
    function customFeed(address _feedAdr) public returns (int256){
        customPriceFeed = AggregatorV3Interface(_feedAdr);
        (, int256 customPrice, , , ) = customPriceFeed.latestRoundData();
        return(customPrice);
        }
        
    function ethBtc() public view returns (int256){
       int256 eth = ethFeed();
       int256 btc = btcFeed();
       return (btc / eth); 
    }
    function ethYfi() public view returns (int256){
       int256 eth = ethFeed();
       int256 yfi = yfiFeed();
       return (yfi / eth); 
    }
    function customRatio(address _one, address _two) public returns(int256){
       int256 one = customFeed(_one);
       int256 two = customFeed(_two);
       return (one / two);  
    }
}