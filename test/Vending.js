const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Initialized correctly", function () {
	it("Should check if decrement works correctly", async function () {

	const vending = await ethers.deployContract("Vending");

	await vending.getOne();

	expect(vending.candies).to.equal(99);
	});
});
