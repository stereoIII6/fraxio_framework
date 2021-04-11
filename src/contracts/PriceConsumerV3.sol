// SPDX-License-Identifier: MIT
pragma solidity ^0.6.6;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    AggregatorV3Interface internal linkPriceFeed;
    AggregatorV3Interface internal btcPriceFeed;
    AggregatorV3Interface internal ethPriceFeed;
    AggregatorV3Interface internal priceFeed;

    constructor() public {
        ethPriceFeed = AggregatorV3Interface(
            0x8A753747A1Fa494EC906cE90E9f37563A8AF630e
        );
        btcPriceFeed = AggregatorV3Interface(
            0xECe365B379E1dD183B20fc5f022230C044d51404
        );
        linkPriceFeed = AggregatorV3Interface(
            0xd8bD0a1cB028a31AA859A21A3758685a95dE4623
        );

        // priceFeed = AggregatorV3Interface(_priceFeed);
    }

    function getLatestPrices()
        public
        view
        returns (
            int256,
            int256,
            int256
        )
    {
        (, int256 ethPrice, , , ) = ethPriceFeed.latestRoundData();
        (, int256 btcPrice, , , ) = btcPriceFeed.latestRoundData();
        (, int256 linkPrice, , , ) = linkPriceFeed.latestRoundData();
        return (ethPrice, btcPrice, linkPrice);
    }

}
