// contracts/SimpleStorage.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage{
    string public say;
    uint256 public favNum = 5;

    struct Men {
      uint age;
      string name;
    }
    mapping(string => uint) public mp;
    Men[] public m1;

    function setsay(string memory greet) public {
        say = greet;
    }

    function getnum() public view returns (uint256) {
        return favNum;
    }

    function setnum(uint256 num) public {
        favNum = num;
    }

    function addMen(uint ag, string memory nm)public {
        m1.push(Men(ag, nm));
        mp[nm] = ag;
    }
}