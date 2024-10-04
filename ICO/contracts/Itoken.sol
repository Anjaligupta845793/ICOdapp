// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
interface IStakeToken {
     function pauseICO() external ; 
     
     function unpauseICO() external ; 
   
     function burnToken(uint amount) external ;  
     function pausedStatus() external view returns (bool);
     function transferToken(address recipient, uint256 amount) external returns (bool);
     function balanceOfUser(address account) external view returns (uint256);

     
   
}