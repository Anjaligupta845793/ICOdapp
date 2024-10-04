// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Itoken.sol";



contract ICO   {
    IStakeToken public tokens;
    uint public startTime;
    uint public endTime;
    uint public totalAmount;
    uint public collectedAmount;
    uint public RATE;
    address public owner;
    mapping(address => uint) public investors;
    

    constructor(uint _afterday , uint _totalamount , uint _rate , address contractaddress ) {
        startTime = block.timestamp;
        endTime = block.timestamp + _afterday *  1 days ;
        totalAmount =  _totalamount * 1e18;
        RATE = _rate ; 
        owner = msg.sender;
        tokens = IStakeToken(contractaddress);
        
       
    }
    modifier onlyOnwer(){
        require(owner == msg.sender,"only owner of this contract can call this function ");
        _;
    }
    modifier  canEnter() {
        require(block.timestamp >= startTime && block.timestamp < endTime);
        _;
    }
    modifier  amountIsEnough() {
        require(collectedAmount < totalAmount ," required amount is collected ");
        _;
    }

    function send() public payable canEnter amountIsEnough  {
        require(tokens.pausedStatus() == false , "you can't perform this action ico is paused now");
        require(msg.value  > 0 ," value is not enough");
        require(totalAmount > collectedAmount  + msg.value, "required amount limit is exceeded");
        uint amount = msg.value * RATE ;
        collectedAmount += msg.value;
        investors[msg.sender] += msg.value;

        bool status =  tokens.transferToken(msg.sender , amount);
        require(status , " transaction reverted");
        
    }
    function withdraw() public  canEnter onlyOnwer{
        require(block.timestamp > endTime ," Ico is still going on ");
        payable(owner).transfer(address(this).balance);
    }

    function remaintoken() public view returns(uint ){
        return tokens.balanceOfUser(address(this));
    }
    function getTokenOfUser() public view returns(uint){
        return tokens.balanceOfUser(msg.sender);
        
    }
    function pauseICO() public onlyOnwer{
       tokens.pauseICO();
    }
    function unpauseICO() public onlyOnwer{
        tokens.unpauseICO();
    }
    function burnTokens(uint amount) public onlyOnwer{
           tokens.burnToken(amount);
        
    }
   


}