// SPDX-License-Identifier: MIT
pragma solidity ^0.6.6;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

contract PriceFeed {
    AggregatorV3Interface internal AUDprice;
    AggregatorV3Interface internal BATprice;
    AggregatorV3Interface internal BNBprice;
    AggregatorV3Interface internal BTCprice;
    AggregatorV3Interface internal CHFprice;
    AggregatorV3Interface internal DAIprice;
    AggregatorV3Interface internal EQZprice;
    AggregatorV3Interface internal ETHprice;
    AggregatorV3Interface internal EURprice;
    AggregatorV3Interface internal FNXprice;
    AggregatorV3Interface internal GBPprice;
    AggregatorV3Interface internal JPYprice;
    AggregatorV3Interface internal LINKprice;
    AggregatorV3Interface internal LTCprice;
    AggregatorV3Interface internal OILprice;
    AggregatorV3Interface internal REPprice;
    AggregatorV3Interface internal SNXprice;
    AggregatorV3Interface internal TRXprice;
    AggregatorV3Interface internal USDCprice;
    AggregatorV3Interface internal XAGprice;
    AggregatorV3Interface internal XAUprice;
    AggregatorV3Interface internal XFTprice;
    AggregatorV3Interface internal XRPprice;
    AggregatorV3Interface internal XTZprice;
    AggregatorV3Interface internal ZRXprice;
    AggregatorV3Interface internal sCEXprice;
    AggregatorV3Interface internal sDEFIprice;

    constructor() public {
        // Rinkeby SETUP COMPLETE

        AUDprice = AggregatorV3Interface(
            0x21c095d2aDa464A294956eA058077F14F66535af
        );
        BATprice = AggregatorV3Interface(
            0x031dB56e01f82f20803059331DC6bEe9b17F7fC9
        );
        BNBprice = AggregatorV3Interface(
            0xcf0f51ca2cDAecb464eeE4227f5295F2384F84ED
        );
        BTCprice = AggregatorV3Interface(
            0xECe365B379E1dD183B20fc5f022230C044d51404
        );
        CHFprice = AggregatorV3Interface(
            0x5e601CF5EF284Bcd12decBDa189479413284E1d2
        );
        DAIprice = AggregatorV3Interface(
            0x2bA49Aaa16E6afD2a993473cfB70Fa8559B523cF
        );
        EQZprice = AggregatorV3Interface(
            0x6C2441920404835155f33d88faf0545B895871b1
        );
        ETHprice = AggregatorV3Interface(
            0x8A753747A1Fa494EC906cE90E9f37563A8AF630e
        );
        EURprice = AggregatorV3Interface(
            0x78F9e60608bF48a1155b4B2A5e31F32318a1d85F
        );
        FNXprice = AggregatorV3Interface(
            0xcf74110A02b1D391B27cE37364ABc3b279B1d9D1
        );
        GBPprice = AggregatorV3Interface(
            0x7B17A813eEC55515Fb8F49F2ef51502bC54DD40F
        );
        JPYprice = AggregatorV3Interface(
            0x3Ae2F46a2D84e3D5590ee6Ee5116B80caF77DeCA
        );
        LINKprice = AggregatorV3Interface(
            0xd8bD0a1cB028a31AA859A21A3758685a95dE4623
        );
        LTCprice = AggregatorV3Interface(
            0x4d38a35C2D87976F334c2d2379b535F1D461D9B4
        );
        OILprice = AggregatorV3Interface(
            0x6292aA9a6650aE14fbf974E5029f36F95a1848Fd
        );
        REPprice = AggregatorV3Interface(
            0x9331b55D9830EF609A2aBCfAc0FBCE050A52fdEa
        );
        SNXprice = AggregatorV3Interface(
            0xE96C4407597CD507002dF88ff6E0008AB41266Ee
        );
        TRXprice = AggregatorV3Interface(
            0xb29f616a0d54FF292e997922fFf46012a63E2FAe
        );
        USDCprice = AggregatorV3Interface(
            0xa24de01df22b63d23Ebc1882a5E3d4ec0d907bFB
        );
        XAGprice = AggregatorV3Interface(
            0x9c1946428f4f159dB4889aA6B218833f467e1BfD
        );
        XAUprice = AggregatorV3Interface(
            0x81570059A0cb83888f1459Ec66Aad1Ac16730243
        );
        XFTprice = AggregatorV3Interface(
            0xab4a352ac35dFE83221220D967Db41ee61A0DeFa
        );
        XRPprice = AggregatorV3Interface(
            0xc3E76f41CAbA4aB38F00c7255d4df663DA02A024
        );
        XTZprice = AggregatorV3Interface(
            0xf57FCa8B932c43dFe560d3274262b2597BCD2e5A
        );
        ZRXprice = AggregatorV3Interface(
            0xF7Bbe4D7d13d600127B6Aa132f1dCea301e9c8Fc
        );
        sCEXprice = AggregatorV3Interface(
            0x1a602D4928faF0A153A520f58B332f9CAFF320f7
        );
        sDEFIprice = AggregatorV3Interface(
            0x0630521aC362bc7A19a4eE44b57cE72Ea34AD01c
        );
        /* */
    }

    function cryptoFeeds()
        public
        view
        returns (
            int256,
            int256,
            int256,
            int256,
            int256,
            int256,
            int256,
            int256
        )
    {
        (, int256 batPrice, , , ) = BATprice.latestRoundData();
        (, int256 bnbPrice, , , ) = BNBprice.latestRoundData();
        (, int256 btcPrice, , , ) = BTCprice.latestRoundData();
        (, int256 ethPrice, , , ) = ETHprice.latestRoundData();
        (, int256 linkPrice, , , ) = LINKprice.latestRoundData();
        (, int256 repPrice, , , ) = REPprice.latestRoundData();
        (, int256 snxPrice, , , ) = SNXprice.latestRoundData();
        (, int256 zrxPrice, , , ) = ZRXprice.latestRoundData();
        return (
            batPrice,
            bnbPrice,
            btcPrice,
            ethPrice,
            linkPrice,
            repPrice,
            snxPrice,
            zrxPrice
        );
    }

    function currencyFeeds()
        public
        view
        returns (
            int256,
            int256,
            int256,
            int256,
            int256,
            int256,
            int256
        )
    {
        (, int256 audPrice, , , ) = AUDprice.latestRoundData();
        (, int256 chfPrice, , , ) = CHFprice.latestRoundData();
        (, int256 eurPrice, , , ) = EURprice.latestRoundData();
        (, int256 gbpPrice, , , ) = GBPprice.latestRoundData();
        (, int256 jpyPrice, , , ) = JPYprice.latestRoundData();
        (, int256 usdcPrice, , , ) = USDCprice.latestRoundData();
        (, int256 daiPrice, , , ) = DAIprice.latestRoundData();
        return (
            audPrice,
            chfPrice,
            eurPrice,
            gbpPrice,
            jpyPrice,
            usdcPrice,
            daiPrice
        );
    }

    function commodFeeds()
        public
        view
        returns (
            int256,
            int256,
            int256
        )
    {
        (, int256 oilPrice, , , ) = OILprice.latestRoundData();
        (, int256 xagPrice, , , ) = XAGprice.latestRoundData();
        (, int256 xauPrice, , , ) = XAUprice.latestRoundData();

        return (oilPrice, xagPrice, xauPrice);
    }

    function daiFeed() public view returns (int256) {
        (, int256 daiPrice, , , ) = DAIprice.latestRoundData();
        return (daiPrice);
    }

    function ethFeed() public view returns (int256) {
        (, int256 ethPrice, , , ) = ETHprice.latestRoundData();
        return (ethPrice);
    }

    function btcFeed() public view returns (int256) {
        (, int256 btcPrice, , , ) = BTCprice.latestRoundData();
        return (btcPrice);
    }
    /*
    function customFeed(address _feedAdr) public returns (int256) {
        customPriceFeed = AggregatorV3Interface(_feedAdr);
        (, int256 customPrice, , , ) = customPriceFeed.latestRoundData();
        return (customPrice);
    }

    function ethBtc() public view returns (int256) {
        int256 eth = ethFeed();
        int256 btc = btcFeed();
        return (btc / eth);
    }

    function ethYfi() public view returns (int256) {
        int256 eth = ethFeed();
        int256 yfi = yfiFeed();
        return (yfi / eth);
    }

    function customRatio(address _one, address _two) public returns (int256) {
        int256 one = customFeed(_one);
        int256 two = customFeed(_two);
        return (one / two);
    } /* */
}
