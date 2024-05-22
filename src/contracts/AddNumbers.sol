// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AddNumbers {
    uint256 public result;

    function add(uint256 a, uint256 b) public {
        result = a + b;
    }

    function getResult() public view returns (uint256) {
        return result;
    }
}
