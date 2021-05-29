import React, { Component } from 'react';
class PairSelect extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Input type="select">
                <option name="AUD / USD"    value="0x21c095d2aDa464A294956eA058077F14F66535af">     "AUD / USD"      </option>
                <option name="BAT / USD"    value="0x031dB56e01f82f20803059331DC6bEe9b17F7fC9">     "BAT / USD"      </option>
                <option name="BNB / USD"    value="0xcf0f51ca2cDAecb464eeE4227f5295F2384F84ED">     "BNB / USD"      </option>
                <option name="BTC / ETH"	value="0x2431452A0010a43878bF198e170F6319Af6d27F4">     "BTC / ETH"	     </option>
                <option name="BTC / USD"    value="0xECe365B379E1dD183B20fc5f022230C044d51404">     "BTC / USD"      </option>
                <option name="BTC IV 1d"    value="0x696b6Fb2b093df94C428Efa68d6e7849702D9419">     "BTC IV 1d"      </option>
                <option name="BTC IV 1w"    value="0x1e15C98a7A4cE165777b3cc615BffEeBA947054c">     "BTC IV 1w"      </option>
                <option name="BTC IV 2d"    value="0x4378815024B852c5D291F7bb8B0862a46ab8d637">     "BTC IV 2d"      </option>
                <option name="BTC IV 2w"    value="0x2E5fE124e84333F3e04F30EfE057603dcB665945">     "BTC IV 2w"      </option>
                <option name="BTC IV 3w"    value="0xB58F22d1cacC00507b4346F0C3469B637A0f42B7">     "BTC IV 3w"      </option>
                <option name="BTC IV 4w"    value="0xeA68a3c16251fD28035e752aBBa4D7eE3015870e">     "BTC IV 4w"      </option>
                <option name="CHF / USD"    value="0x5e601CF5EF284Bcd12decBDa189479413284E1d2">     "CHF / USD"      </option>
                <option name="DAI / ETH"	value="0x74825DbC8BF76CC4e9494d0ecB210f676Efa001D">     "DAI / ETH"	     </option>
                <option name="DAI / USD"    value="0x2bA49Aaa16E6afD2a993473cfB70Fa8559B523cF">     "DAI / USD"      </option>
                <option name="ETH / USD"    value="0x8A753747A1Fa494EC906cE90E9f37563A8AF630e">     "ETH / USD"      </option>
                <option name="ETH IV 1d"    value="0x99d837840c374A08C0bF0EE3bc16b84F1a29A640">     "ETH IV 1d"      </option>
                <option name="ETH IV 1w"    value="0xFbAc690D8e5c2f3a2D2929B1dD78E42AD53f464a">     "ETH IV 1w"      </option>
                <option name="ETH IV 2d"    value="0xB03755573e8068ef172ba0BD826dc62Fa7Ed32f7">     "ETH IV 2d"      </option>
                <option name="ETH IV 2w"    value="0x9125759a01d14AeFe7c2426EFD20130B8FEabeBa">     "ETH IV 2w"      </option>
                <option name="ETH IV 3w"    value="0x0772C3bbF1469313C39ad59214582ecFA1fAB583">     "ETH IV 3w"      </option>
                <option name="ETH IV 4w"    value="0x727B59d0989d6D1961138122BC9F94f534E82B32">     "ETH IV 4w"      </option>
                <option name="EUR / USD"    value="0x78F9e60608bF48a1155b4B2A5e31F32318a1d85F">     "EUR / USD"      </option>
                <option name="FNX / USD"    value="0xcf74110A02b1D391B27cE37364ABc3b279B1d9D1">     "FNX / USD"      </option>
                <option name="GBP / USD"    value="0x7B17A813eEC55515Fb8F49F2ef51502bC54DD40F">     "GBP / USD"      </option>
                <option name="JPY / USD"    value="0x3Ae2F46a2D84e3D5590ee6Ee5116B80caF77DeCA">     "JPY / USD"      </option>
                <option name="LINK / USD"   value="0xd8bD0a1cB028a31AA859A21A3758685a95dE4623">     "LINK / USD"     </option>
                <option name="LTC / USD"    value="0x4d38a35C2D87976F334c2d2379b535F1D461D9B4">     "LTC / USD"      </option>
                <option name="MktCap / USD" value="0x9Dcf949BCA2F4A8a62350E0065d18902eE87Dca3">     "MktCap / USD"   </option>
                <option name="Oil / USD"    value="0x6292aA9a6650aE14fbf974E5029f36F95a1848Fd">     "Oil / USD"      </option>
                <option name="REP / USD"    value="0x9331b55D9830EF609A2aBCfAc0FBCE050A52fdEa">     "REP / USD"      </option>
                <option name="SNX / USD"    value="0xE96C4407597CD507002dF88ff6E0008AB41266Ee">     "SNX / USD"      </option>
                <option name="TRX / USD"    value="0xb29f616a0d54FF292e997922fFf46012a63E2FAe">     "TRX / USD"      </option>
                <option name="USDC / ETH"	value="0xdCA36F27cbC4E38aE16C4E9f99D39b42337F6dcf">     "USDC / ETH"	    </option>
                <option name="USDC / USD"   value="0xa24de01df22b63d23Ebc1882a5E3d4ec0d907bFB">     "USDC / USD"     </option>
                <option name="XAG / USD"    value="0x9c1946428f4f159dB4889aA6B218833f467e1BfD">     "XAG / USD"      </option>
                <option name="XAU / USD"    value="0x81570059A0cb83888f1459Ec66Aad1Ac16730243">     "XAU / USD"      </option>
                <option name="XFT / USD"    value="0xab4a352ac35dFE83221220D967Db41ee61A0DeFa">     "XFT / USD"      </option>
                <option name="XRP / USD"    value="0xc3E76f41CAbA4aB38F00c7255d4df663DA02A024">     "XRP / USD"      </option>
                <option name="XTZ / USD"    value="0xf57FCa8B932c43dFe560d3274262b2597BCD2e5A">     "XTZ / USD"      </option>
                <option name="ZRX / USD"    value="0xF7Bbe4D7d13d600127B6Aa132f1dCea301e9c8Fc">     "ZRX / USD"      </option>
                <option name="sCEX / USD"   value="0x1a602D4928faF0A153A520f58B332f9CAFF320f7">     "sCEX / USD"     </option>
                <option name="sDEFI / USD"  value="0x0630521aC362bc7A19a4eE44b57cE72Ea34AD01c">     "sDEFI / USD"    </option>
            </Input>
        </div> );
    }
}
 
export default PairSelect;