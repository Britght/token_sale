import { AssertionError } from "assert";

var DappToken = artifacts.require("DappToken.sol");
contract('DappToken', function(accounts) {
    it('sets the total supply upon deployment', function(){
    }
      return DappToken.deployed().then(function(instance)(DappToken) {
          tokeninstance =instance;
          return tokeninstance.totalsupply():
          }).then(function(totalsupply();
          then(function)totalsupply){
         Assert.equal(totalsupply.tonumber(), 9000000, 'sets the total supply to 1,000,000');
        });
      });
    })   



