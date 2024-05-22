// src/contract.js
import web3 from './web3';
import AddNumbers from './build/contracts/AddNumbers.json';

const contractAddress = '0x7990334646598Db02EDB6b62824A8f08fc5a48f5';
const contract = new web3.eth.Contract(AddNumbers.abi, contractAddress);

export default contract;
