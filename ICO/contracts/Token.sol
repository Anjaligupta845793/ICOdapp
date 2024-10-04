// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Itoken.sol";


contract StakeToken is ERC20, ERC20Burnable , ERC20Pausable, Ownable,IStakeToken{
    address public ownerContract;
    constructor() ERC20("StakeToken", "STK") {
        
    }
    modifier  OnlyOwnerContract() {
        require(msg.sender == ownerContract ,"only owner can call these functions");
        _;
    }

    function mint(uint256 initialSupply) public {
        _mint(msg.sender, initialSupply*10**18);
    }
    function setICOcontract(address _icocontract) public onlyOwner {
        ownerContract   =_icocontract;
    }
    function pausedStatus() public override view returns (bool){
           bool status =  paused();
           return status;
    }
     function transferToken(address recipient, uint256 amount) public override returns (bool){
            bool status =  transfer(recipient, amount);
            return status;
     }
     function balanceOfUser(address account) public override  view returns (uint256){
             uint balance =       balanceOf( account);
             return balance;
     }

    
     function pauseICO() external override OnlyOwnerContract  {
        
        _pause();
    }
    function unpauseICO() external override OnlyOwnerContract  {
        _unpause();
    }
   function burnToken(uint amount) external override OnlyOwnerContract {
       burn(amount);
   }
    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual override(ERC20, ERC20Pausable) {
        super._beforeTokenTransfer(from, to, amount); // Call the base implementation
    }
 
}