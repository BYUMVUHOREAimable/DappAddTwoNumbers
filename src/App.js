// src/App.js
import React, { useState } from 'react';
import web3 from './web3';
import contract from './contract';

function App() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleAdd = async () => {
        try {
            const accounts = await web3.eth.getAccounts();
            console.log('Accounts:', accounts);

            await contract.methods.add(Number(num1), Number(num2)).send({ from: accounts[0] });

            const result = await contract.methods.getResult().call();
            console.log('Result from contract:', result);

            // Convert BigInt to string for display
            setResult(result.toString());
        } catch (error) {
            console.error('Error during contract interaction:', error);
        }
    };

    return (
        <div>
            <h1>Add Two Numbers</h1>
            <input
                type="number"
                value={num1}
                onChange={e => setNum1(e.target.value)}
                placeholder="First number"
            />
            <input
                type="number"
                value={num2}
                onChange={e => setNum2(e.target.value)}
                placeholder="Second number"
            />
            <button onClick={handleAdd}>Add</button>
            <div>
                <h2>Result: {result !== '' ? result : 'No result yet'}</h2>
            </div>
        </div>
    );
}

export default App;
