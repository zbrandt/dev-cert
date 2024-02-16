pragma solidity ^0.8.0;

contract Vending {

	uint256 public candies = 100;

	function takeOne() external {
		candies = candies - 1;
	}

	function getCandies() view external returns (uint256) {
		return candies;
	}
}
