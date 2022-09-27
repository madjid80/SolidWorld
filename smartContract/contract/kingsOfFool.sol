//SPDX-License-Identifier: Unlicense
pragma solidity >=0.5.8;

contract kingsOfFool {
    address private owner;
    address payable private kingsOfFoolAddress;
    uint256 private lastDeposit;

    constructor() {
        owner = msg.sender;
        lastDeposit = 0;
    }

    event Received(address, uint256);
    event NewkingsOfFool(address);

    receive() external payable {
        // require(
        //     lastDeposit != 0 && (msg.value == lastDeposit + lastDeposit / 2),
        //     "Should send 1.5x of balance."
        // );
        emit Received(msg.sender, msg.value);
        if (lastDeposit != 0) {
            bool sent = kingsOfFoolAddress.send(msg.value);
            require(sent, "Failed to send Ether");
            emit NewkingsOfFool(msg.sender);
        }
        lastDeposit = msg.value;
        kingsOfFoolAddress = payable(msg.sender);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getLastDeposit() public view returns (uint256) {
        return lastDeposit;
    }
}
