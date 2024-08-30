import { assert, expect } from "chai";
import { ethers } from "hardhat";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types"

describe("SimpleStorage", function () {
    let simpleFactory : SimpleStorage__factory;
    let simpleStorage : SimpleStorage;

    beforeEach(async function () {
       simpleFactory = (await ethers.getContractFactory("SimpleStorage")) as unknown as SimpleStorage__factory;
       simpleStorage = await simpleFactory.deploy();
    })

    it("Should start with favnum 5", async function () {
        const currval = await simpleStorage.getnum();
        const expval = "5";

        assert.equal(currval.toString(), expval)
        expect(currval.toString()).to.equal(expval)
    })
    it("Should update when we call setnum", async function () {
        const expval = "59";
        const setval = await simpleStorage.setnum(expval);
        
        const currval = await simpleStorage.getnum();
        assert.equal(currval.toString(), expval)
    })
})