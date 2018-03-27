export const SimpleInterestTermsContract = 
{
  "contractName": "SimpleInterestTermsContract",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "getValueRepaidToDate",
      "outputs": [
        {
          "name": "_valueRepaid",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "DAY_LENGTH_IN_SECONDS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "debtKernel",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "MONTH_LENGTH_IN_SECONDS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "debtRegistry",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "WEEK_LENGTH_IN_SECONDS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "payer",
          "type": "address"
        },
        {
          "name": "beneficiary",
          "type": "address"
        },
        {
          "name": "unitsOfRepayment",
          "type": "uint256"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "registerRepayment",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "HOUR_LENGTH_IN_SECONDS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "repaymentRouter",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "NUM_AMORTIZATION_UNIT_TYPES",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "debtor",
          "type": "address"
        }
      ],
      "name": "registerTermStart",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "getExpectedRepaymentValue",
      "outputs": [
        {
          "name": "_expectedRepaymentValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenRegistry",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "parameters",
          "type": "bytes32"
        }
      ],
      "name": "unpackParametersFromBytes",
      "outputs": [
        {
          "name": "_principalTokenIndex",
          "type": "uint256"
        },
        {
          "name": "_principalAmount",
          "type": "uint256"
        },
        {
          "name": "_interestRate",
          "type": "uint256"
        },
        {
          "name": "_amortizationUnitType",
          "type": "uint256"
        },
        {
          "name": "_termLengthInAmortizationUnits",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "YEAR_LENGTH_IN_SECONDS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "valueRepaid",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_debtKernel",
          "type": "address"
        },
        {
          "name": "_debtRegistry",
          "type": "address"
        },
        {
          "name": "_tokenRegistry",
          "type": "address"
        },
        {
          "name": "_repaymentRouter",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "principalToken",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "principalAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "interestRate",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "amortizationUnitType",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "termLengthInAmortizationUnits",
          "type": "uint256"
        }
      ],
      "name": "LogSimpleInterestTermStart",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b60405160808061146d8339810160405280805190602001909190805190602001909190805190602001909190805190602001909190505082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506113108061015d6000396000f3006060604052600436106100e6576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100eb5780630776298214610126578063079dd4b71461014f57806320863894146101a45780632f866f73146101cd57806340018a0d146102225780635f0280ba1461024b5780636f69c96f146102f05780636fa9d056146103195780638b47e58a1461036e578063977a5e641461039757806399114d84146103f55780639d23c4c714610439578063ed8907d71461048e578063fd127a41146104e5578063fd40d52e1461050e575b600080fd5b34156100f657600080fd5b610110600480803560001916906020019091905050610549565b6040518082815260200191505060405180910390f35b341561013157600080fd5b61013961056d565b6040518082815260200191505060405180910390f35b341561015a57600080fd5b610162610576565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101af57600080fd5b6101b761059c565b6040518082815260200191505060405180910390f35b34156101d857600080fd5b6101e06105a8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561022d57600080fd5b6102356105ce565b6040518082815260200191505060405180910390f35b341561025657600080fd5b6102d660048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105da565b604051808215151515815260200191505060405180910390f35b34156102fb57600080fd5b6103036106e6565b6040518082815260200191505060405180910390f35b341561032457600080fd5b61032c6106ec565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561037957600080fd5b610381610712565b6040518082815260200191505060405180910390f35b34156103a257600080fd5b6103db60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610717565b604051808215151515815260200191505060405180910390f35b341561040057600080fd5b610423600480803560001916906020019091908035906020019091905050610a16565b6040518082815260200191505060405180910390f35b341561044457600080fd5b61044c610b9c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561049957600080fd5b6104b3600480803560001916906020019091905050610bc2565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b34156104f057600080fd5b6104f8610cba565b6040518082815260200191505060405180910390f35b341561051957600080fd5b610533600480803560001916906020019091905050610cc7565b6040518082815260200191505060405180910390f35b60008060008360001916600019168152602001908152602001600020549050919050565b6018610e100281565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b601e6018610e10020281565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60076018610e10020281565b60006105e4611285565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561064057600080fd5b61064987610cdf565b9050806000015173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106d7576106b0846000808a600019166000191681526020019081526020016000205461104990919063ffffffff16565b600080896000191660001916815260200190815260200160002081905550600191506106dc565b600091505b5095945050505050565b610e1081565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600581565b6000806000806000806000806000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561078157600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636be39bda8c6000604051604001526040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082600019166000191681526020019150506040805180830381600087803b151561082157600080fd5b6102c65a03f1151561083257600080fd5b50505060405180519060200180519050809850819950505061085387610bc2565b809650819750829850839950849a505050505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635715c5b7876000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b151561090057600080fd5b6102c65a03f1151561091157600080fd5b505050604051805190509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561095a5750600583105b801561099157503073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16145b15610a0357828173ffffffffffffffffffffffffffffffffffffffff168c600019167f2c500aaec6833a053693d8c2a18a3ed5649a4609699abaf7778c3d389cc40c0588888760405180848152602001838152602001828152602001935050505060405180910390a460019850610a08565b600098505b505050505050505092915050565b6000610a20611285565b60008085600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9826000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610ac557600080fd5b6102c65a03f11515610ad657600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16141515610b1957600080fd5b610b2287610cdf565b9350610b2d84611067565b9250836060015186111515610b455760009450610b92565b836080015186101515610b5a57829450610b92565b610b6486856110c2565b9150610b8f8460c00151610b81848661110c90919063ffffffff16565b61114790919063ffffffff16565b94505b5050505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000806000806000806000807fff000000000000000000000000000000000000000000000000000000000000006001028b1694507effffffffffffffffffffffff000000000000000000000000000000000000006001028b16935072ffffff000000000000000000000000000000006001028b1692506ff00000000000000000000000000000006001028b1691506f0ffff0000000000000000000000000006001028b169050610c768560f8611162565b610c81856098611162565b610c8c856080611162565b610c9785607c611162565b610ca285606c611162565b99509950995099509950505050505091939590929450565b61016d6018610e10020281565b60006020528060005260406000206000915090505481565b610ce7611285565b600080600080600080600080600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663314a522e8f6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610d9a57600080fd5b6102c65a03f11515610dab57600080fd5b505050604051805190509b50610dc08c610bc2565b809b50819c50829d50839e50849f505050505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635715c5b78c6000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b1515610e6d57600080fd5b6102c65a03f11515610e7e57600080fd5b505050604051805190509550600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614151515610ec657600080fd5b600480811115610ed257fe5b8811151515610ee057600080fd5b876004811115610eec57fe5b9450610ef78561117f565b9350600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d69dbf638f6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610f9a57600080fd5b6102c65a03f11515610fab57600080fd5b505050604051805190509250610fca848861110c90919063ffffffff16565b9150610fdf838361104990919063ffffffff16565b905060e0604051908101604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018b81526020018a815260200184815260200182815260200186600481111561102d57fe5b8152602001888152509c50505050505050505050505050919050565b600080828401905083811015151561105d57fe5b8091505092915050565b60008060006110878460400151856020015161110c90919063ffffffff16565b91506110a08460c001518361110c90919063ffffffff16565b90506110b981856020015161104990919063ffffffff16565b92505050919050565b60008060006110de84606001518661126c90919063ffffffff16565b91506110ed8460a0015161117f565b9050611102818361114790919063ffffffff16565b9250505092915050565b60008060008414156111215760009150611140565b828402905082848281151561113257fe5b0414151561113c57fe5b8091505b5092915050565b600080828481151561115557fe5b0490508091505092915050565b60008160020a836001900481151561117657fe5b04905092915050565b600080600481111561118d57fe5b82600481111561119957fe5b14156111a957610e109050611267565b600160048111156111b657fe5b8260048111156111c257fe5b14156111d5576018610e10029050611267565b600260048111156111e257fe5b8260048111156111ee57fe5b14156112045760076018610e1002029050611267565b6003600481111561121157fe5b82600481111561121d57fe5b141561123357601e6018610e1002029050611267565b60048081111561123f57fe5b82600481111561124b57fe5b14156112625761016d6018610e1002029050611267565b600080fd5b919050565b600082821115151561127a57fe5b818303905092915050565b60e060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160008152602001600060048111156112d757fe5b81526020016000815250905600a165627a7a7230582044b92f248b7a03bf75684da40fc05e7c363ff53fee56f34fcae7a798acbb97a50029",
  "deployedBytecode": "0x6060604052600436106100e6576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100eb5780630776298214610126578063079dd4b71461014f57806320863894146101a45780632f866f73146101cd57806340018a0d146102225780635f0280ba1461024b5780636f69c96f146102f05780636fa9d056146103195780638b47e58a1461036e578063977a5e641461039757806399114d84146103f55780639d23c4c714610439578063ed8907d71461048e578063fd127a41146104e5578063fd40d52e1461050e575b600080fd5b34156100f657600080fd5b610110600480803560001916906020019091905050610549565b6040518082815260200191505060405180910390f35b341561013157600080fd5b61013961056d565b6040518082815260200191505060405180910390f35b341561015a57600080fd5b610162610576565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101af57600080fd5b6101b761059c565b6040518082815260200191505060405180910390f35b34156101d857600080fd5b6101e06105a8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561022d57600080fd5b6102356105ce565b6040518082815260200191505060405180910390f35b341561025657600080fd5b6102d660048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105da565b604051808215151515815260200191505060405180910390f35b34156102fb57600080fd5b6103036106e6565b6040518082815260200191505060405180910390f35b341561032457600080fd5b61032c6106ec565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561037957600080fd5b610381610712565b6040518082815260200191505060405180910390f35b34156103a257600080fd5b6103db60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610717565b604051808215151515815260200191505060405180910390f35b341561040057600080fd5b610423600480803560001916906020019091908035906020019091905050610a16565b6040518082815260200191505060405180910390f35b341561044457600080fd5b61044c610b9c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561049957600080fd5b6104b3600480803560001916906020019091905050610bc2565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b34156104f057600080fd5b6104f8610cba565b6040518082815260200191505060405180910390f35b341561051957600080fd5b610533600480803560001916906020019091905050610cc7565b6040518082815260200191505060405180910390f35b60008060008360001916600019168152602001908152602001600020549050919050565b6018610e100281565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b601e6018610e10020281565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60076018610e10020281565b60006105e4611285565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561064057600080fd5b61064987610cdf565b9050806000015173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106d7576106b0846000808a600019166000191681526020019081526020016000205461104990919063ffffffff16565b600080896000191660001916815260200190815260200160002081905550600191506106dc565b600091505b5095945050505050565b610e1081565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600581565b6000806000806000806000806000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561078157600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636be39bda8c6000604051604001526040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082600019166000191681526020019150506040805180830381600087803b151561082157600080fd5b6102c65a03f1151561083257600080fd5b50505060405180519060200180519050809850819950505061085387610bc2565b809650819750829850839950849a505050505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635715c5b7876000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b151561090057600080fd5b6102c65a03f1151561091157600080fd5b505050604051805190509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561095a5750600583105b801561099157503073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16145b15610a0357828173ffffffffffffffffffffffffffffffffffffffff168c600019167f2c500aaec6833a053693d8c2a18a3ed5649a4609699abaf7778c3d389cc40c0588888760405180848152602001838152602001828152602001935050505060405180910390a460019850610a08565b600098505b505050505050505092915050565b6000610a20611285565b60008085600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9826000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610ac557600080fd5b6102c65a03f11515610ad657600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16141515610b1957600080fd5b610b2287610cdf565b9350610b2d84611067565b9250836060015186111515610b455760009450610b92565b836080015186101515610b5a57829450610b92565b610b6486856110c2565b9150610b8f8460c00151610b81848661110c90919063ffffffff16565b61114790919063ffffffff16565b94505b5050505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000806000806000806000807fff000000000000000000000000000000000000000000000000000000000000006001028b1694507effffffffffffffffffffffff000000000000000000000000000000000000006001028b16935072ffffff000000000000000000000000000000006001028b1692506ff00000000000000000000000000000006001028b1691506f0ffff0000000000000000000000000006001028b169050610c768560f8611162565b610c81856098611162565b610c8c856080611162565b610c9785607c611162565b610ca285606c611162565b99509950995099509950505050505091939590929450565b61016d6018610e10020281565b60006020528060005260406000206000915090505481565b610ce7611285565b600080600080600080600080600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663314a522e8f6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610d9a57600080fd5b6102c65a03f11515610dab57600080fd5b505050604051805190509b50610dc08c610bc2565b809b50819c50829d50839e50849f505050505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635715c5b78c6000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b1515610e6d57600080fd5b6102c65a03f11515610e7e57600080fd5b505050604051805190509550600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614151515610ec657600080fd5b600480811115610ed257fe5b8811151515610ee057600080fd5b876004811115610eec57fe5b9450610ef78561117f565b9350600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d69dbf638f6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610f9a57600080fd5b6102c65a03f11515610fab57600080fd5b505050604051805190509250610fca848861110c90919063ffffffff16565b9150610fdf838361104990919063ffffffff16565b905060e0604051908101604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018b81526020018a815260200184815260200182815260200186600481111561102d57fe5b8152602001888152509c50505050505050505050505050919050565b600080828401905083811015151561105d57fe5b8091505092915050565b60008060006110878460400151856020015161110c90919063ffffffff16565b91506110a08460c001518361110c90919063ffffffff16565b90506110b981856020015161104990919063ffffffff16565b92505050919050565b60008060006110de84606001518661126c90919063ffffffff16565b91506110ed8460a0015161117f565b9050611102818361114790919063ffffffff16565b9250505092915050565b60008060008414156111215760009150611140565b828402905082848281151561113257fe5b0414151561113c57fe5b8091505b5092915050565b600080828481151561115557fe5b0490508091505092915050565b60008160020a836001900481151561117657fe5b04905092915050565b600080600481111561118d57fe5b82600481111561119957fe5b14156111a957610e109050611267565b600160048111156111b657fe5b8260048111156111c257fe5b14156111d5576018610e10029050611267565b600260048111156111e257fe5b8260048111156111ee57fe5b14156112045760076018610e1002029050611267565b6003600481111561121157fe5b82600481111561121d57fe5b141561123357601e6018610e1002029050611267565b60048081111561123f57fe5b82600481111561124b57fe5b14156112625761016d6018610e1002029050611267565b600080fd5b919050565b600082821115151561127a57fe5b818303905092915050565b60e060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160008152602001600060048111156112d757fe5b81526020016000815250905600a165627a7a7230582044b92f248b7a03bf75684da40fc05e7c363ff53fee56f34fcae7a798acbb97a50029",
  "sourceMap": "759:15096:9:-;;;2461:381;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2687:13;2659:12;;:42;;;;;;;;;;;;;;;;;;2741:14;2711:13;;:45;;;;;;;;;;;;;;;;;;2780:11;2767:10;;:24;;;;;;;;;;;;;;;;;;2819:16;2801:15;;:34;;;;;;;;;;;;;;;;;;2461:381;;;;759:15096;;;;;;",
  "deployedSourceMap": "759:15096:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8367:167;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1339:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1783:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1494:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1704:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1417:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5864:547;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1280:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1814:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;917:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3495:1658;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7020:1066;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1742:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8540:2790;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1573:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1653:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8367:167;8463:17;8503:11;:24;8515:11;8503:24;;;;;;;;;;;;;;;;;;8496:31;;8367:167;;;:::o;1339:72::-;1409:2;1326:7;1384:27;1339:72;:::o;1783:25::-;;;;;;;;;;;;;:::o;1494:73::-;1565:2;1409;1326:7;1384:27;1541:26;1494:73;:::o;1704:32::-;;;;;;;;;;;;;:::o;1417:71::-;1487:1;1409:2;1326:7;1384:27;1463:25;1417:71;:::o;5864:547::-;6093:13;6122:34;;:::i;:::-;2171:15;;;;;;;;;;;2157:29;;:10;:29;;;2149:38;;;;;;;;6159:39;6186:11;6159:26;:39::i;:::-;6122:76;;6229:6;:28;;;6213:44;;:12;:44;;;6209:173;;;6300:46;6329:16;6300:11;:24;6312:11;6300:24;;;;;;;;;;;;;;;;;;:28;;:46;;;;:::i;:::-;6273:11;:24;6285:11;6273:24;;;;;;;;;;;;;;;;;:73;;;;6367:4;6360:11;;;;6209:173;6399:5;6392:12;;2197:1;5864:547;;;;;;;;:::o;1280:53::-;1326:7;1280:53;:::o;1814:30::-;;;;;;;;;;;;;:::o;917:52::-;968:1;917:52;:::o;3495:1658::-;3636:13;3665:21;3696:31;3826:24;3860:20;3890:17;3917:25;3952:34;4178:29;2426:10;;;;;;;;;;;2412:24;;:10;:24;;;2404:33;;;;;;;;3781:12;;;;;;;;;;;:21;;;3803:11;3781:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3738:77;;;;;;;;4117:50;4143:23;4117:25;:50::i;:::-;3997:170;;;;;;;;;;;;;;;;;;;;4222:13;;;;;;;;;;;:36;;;4259:19;4222:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4178:101;;4701:1;4668:35;;:21;:35;;;;:101;;;;;968:1;4719:20;:50;4668:101;:147;;;;;4810:4;4785:30;;:13;:30;;;4668:147;4664:460;;;5006:20;4904:21;4831:256;;4875:11;4831:256;;;;4943:15;4976:12;5044:29;4831:256;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5109:4;5102:11;;;;4664:460;5141:5;5134:12;;2447:1;3495:1658;;;;;;;;;;;;:::o;7020:1066::-;7208:28;7252:34;;:::i;:::-;7338:26;7904:13;7178:11;2301:12;;;;;;;;;;;:29;;;2331:11;2301:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2284:59;;2292:4;2284:59;;;2276:68;;;;;;;;7289:39;7316:11;7289:26;:39::i;:::-;7252:76;;7367:43;7403:6;7367:35;:43::i;:::-;7338:72;;7438:6;:29;;;7425:9;:42;;7421:659;;;7620:1;7613:8;;;;7421:659;7655:6;:27;;;7642:9;:40;;7638:442;;;7852:21;7845:28;;;;7638:442;7920:51;7953:9;7964:6;7920:32;:51::i;:::-;7904:67;;7992:77;8032:6;:36;;;7992:35;8018:8;7992:21;:25;;:35;;;;:::i;:::-;:39;;:77;;;;:::i;:::-;7985:84;;2354:1;7020:1066;;;;;;;;:::o;1742:34::-;;;;;;;;;;;;;:::o;8540:2790::-;8653:25;8692:21;8727:18;8759:26;8799:35;8973:34;9193:30;9405:27;9621:35;9878:44;9035:66;9022:79;;:10;:79;8973:128;;9251:66;9238:79;;:10;:79;9193:124;;9460:66;9447:79;;:10;:79;9405:121;;9684:66;9671:79;;:10;:79;9621:129;;9950:66;9937:79;;:10;:79;9878:138;;11027:46;11041:26;11069:3;11027:13;:46::i;:::-;11087:42;11101:22;11125:3;11087:13;:42::i;:::-;11143:39;11157:19;11178:3;11143:13;:39::i;:::-;11196:47;11210:27;11239:3;11196:13;:47::i;:::-;11257:56;11271:36;11309:3;11257:13;:56::i;:::-;11006:317;;;;;;;;;;8540:2790;;;;;;;;;;;;:::o;1573:73::-;1643:3;1409:2;1326:7;1384:27;1619;1573:73;:::o;1653:44::-;;;;;;;;;;;;;;;;;:::o;12678:2363::-;12783:27;;:::i;:::-;12826:18;12990:24;13097:20;13187:17;13305:28;13440:34;13656:29;14072:41;14172:36;14289:27;14392:24;14507:25;12847:12;;;;;;;;;;;:39;;;12887:11;12847:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12826:73;;13608:37;13634:10;13608:25;:37::i;:::-;13485:160;;;;;;;;;;;;;;;;;;;;13700:13;;;;;;;;;;;:36;;;13737:19;13700:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13656:101;;13877:1;13844:35;;:21;:35;;;;13836:44;;;;;;;;14033:26;14028:32;;;;;;;;14001:23;:59;;13993:68;;;;;;;;14137:23;14116:45;;;;;;;;14072:89;;14223:56;14258:20;14223:34;:56::i;:::-;14172:107;;14331:12;;;;;;;;;;;:38;;;14370:11;14331:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14289:93;;14431:66;14465:31;14431:29;:33;;:66;;;;:::i;:::-;14392:105;;14547:47;14571:22;14547:19;:23;;:47;;;;:::i;:::-;14507:87;;14612:422;;;;;;;;;14670:21;14612:422;;;;;;14722:15;14612:422;;;;14765:12;14612:422;;;;14815:22;14612:422;;;;14873:20;14612:422;;;;14929:20;14612:422;;;;;;;;;;;;14994:29;14612:422;;;14605:429;;12678:2363;;;;;;;;;;;;;;;:::o;1008:129:21:-;1066:7;1081:9;1097:1;1093;:5;1081:17;;1116:1;1111;:6;;1104:14;;;;;;1131:1;1124:8;;1008:129;;;;;:::o;12284:388:9:-;12406:27;12449:20;12529:18;12472:47;12499:6;:19;;;12472:6;:22;;;:26;;:47;;;;:::i;:::-;12449:70;;12550:57;12570:6;:36;;;12550:15;:19;;:57;;;;:::i;:::-;12529:78;;12624:41;12651:13;12624:6;:22;;;:26;;:41;;;;:::i;:::-;12617:48;;12284:388;;;;;:::o;11499:404::-;11642:10;11668;11735:36;11681:44;11695:6;:29;;;11681:9;:13;;:44;;;;:::i;:::-;11668:57;;11774:63;11809:6;:27;;;11774:34;:63::i;:::-;11735:102;;11854:42;11864:31;11854:5;:9;;:42;;;;:::i;:::-;11847:49;;11499:404;;;;;;:::o;203:173:21:-;261:7;316:9;285:1;280;:6;276:35;;;303:1;296:8;;;;276:35;332:1;328;:5;316:17;;355:1;350;346;:5;;;;;;;;:10;339:18;;;;;;370:1;363:8;;203:173;;;;;;:::o;458:265::-;516:7;605:9;621:1;617;:5;;;;;;;;605:17;;717:1;710:8;;458:265;;;;;:::o;11336:157:9:-;11434:4;11480:6;11475:1;:11;11466:5;11461:11;;;:25;;;;;;;;11454:32;;11336:157;;;;:::o;15047:806::-;15181:37;15262:26;15238:50;;;;;;;;:20;:50;;;;;;;;;15234:613;;;1326:7;15304:29;;;;15234:613;15378:25;15354:49;;;;;;;;:20;:49;;;;;;;;;15350:497;;;1409:2;1326:7;1384:27;15419:28;;;;15350:497;15492:26;15468:50;;;;;;;;:20;:50;;;;;;;;;15464:383;;;1487:1;1409:2;1326:7;1384:27;1463:25;15534:29;;;;15464:383;15608:27;15584:51;;;;;;;;:20;:51;;;;;;;;;15580:267;;;1565:2;1409;1326:7;1384:27;1541:26;15651:30;;;;15580:267;15726:26;15702:50;;;;;;;;:20;:50;;;;;;;;;15698:149;;;1643:3;1409:2;1326:7;1384:27;1619;15768:29;;;;15698:149;15828:8;;;15047:806;;;;:::o;836:110:21:-;894:7;921:1;916;:6;;909:14;;;;;;940:1;936;:5;929:12;;836:110;;;;:::o;759:15096:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"../DebtRegistry.sol\";\nimport \"../TermsContract.sol\";\nimport \"../TokenRegistry.sol\";\n\n\ncontract SimpleInterestTermsContract is TermsContract {\n    using SafeMath for uint;\n\n    enum AmortizationUnitType { HOURS, DAYS, WEEKS, MONTHS, YEARS }\n    uint public constant NUM_AMORTIZATION_UNIT_TYPES = 5;\n\n    struct SimpleInterestParams {\n        address principalTokenAddress;\n        uint principalAmount;\n        uint interestRate;\n        uint termStartUnixTimestamp;\n        uint termEndUnixTimestamp;\n        AmortizationUnitType amortizationUnitType;\n        uint termLengthInAmortizationUnits;\n    }\n\n    uint public constant HOUR_LENGTH_IN_SECONDS = 60 * 60;\n    uint public constant DAY_LENGTH_IN_SECONDS = HOUR_LENGTH_IN_SECONDS * 24;\n    uint public constant WEEK_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 7;\n    uint public constant MONTH_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 30;\n    uint public constant YEAR_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 365;\n\n    mapping (bytes32 => uint) public valueRepaid;\n\n    DebtRegistry public debtRegistry;\n    TokenRegistry public tokenRegistry;\n\n    address public debtKernel;\n    address public repaymentRouter;\n\n    event LogSimpleInterestTermStart(\n        bytes32 indexed agreementId,\n        address indexed principalToken,\n        uint principalAmount,\n        uint interestRate,\n        uint indexed amortizationUnitType,\n        uint termLengthInAmortizationUnits\n    );\n\n    modifier onlyRouter() {\n        require(msg.sender == repaymentRouter);\n        _;\n    }\n\n    modifier onlyMappedToThisContract(bytes32 agreementId) {\n        require(address(this) == debtRegistry.getTermsContract(agreementId));\n        _;\n    }\n\n    modifier onlyDebtKernel() {\n        require(msg.sender == debtKernel);\n        _;\n    }\n\n    function SimpleInterestTermsContract(\n        address _debtKernel,\n        address _debtRegistry,\n        address _tokenRegistry,\n        address _repaymentRouter\n    )\n        public\n    {\n        debtRegistry = DebtRegistry(_debtRegistry);\n        tokenRegistry = TokenRegistry(_tokenRegistry);\n\n        debtKernel = _debtKernel;\n        repaymentRouter = _repaymentRouter;\n    }\n\n    /// When called, the registerTermStart function registers the fact that\n    ///    the debt agreement has begun.  Given that the SimpleInterestTermsContract\n    ///    doesn't rely on taking any sorts of actions when the loan term begins,\n    ///    we simply validate DebtKernel is the transaction sender, and return\n    ///    `true` if the debt agreement is associated with this terms contract.\n    /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n    /// @param  debtor address. The debtor in this particular issuance.\n    /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId,\n        address debtor\n    )\n        public\n        onlyDebtKernel\n        returns (bool _success)\n    {\n        address termsContract;\n        bytes32 termsContractParameters;\n\n        (termsContract, termsContractParameters) = debtRegistry.getTerms(agreementId);\n\n        uint principalTokenIndex;\n        uint principalAmount;\n        uint interestRate;\n        uint amortizationUnitType;\n        uint termLengthInAmortizationUnits;\n\n        (principalTokenIndex, principalAmount, interestRate, amortizationUnitType, termLengthInAmortizationUnits) =\n            unpackParametersFromBytes(termsContractParameters);\n\n        address principalTokenAddress =\n            tokenRegistry.getTokenAddressByIndex(principalTokenIndex);\n\n        // Returns true (i.e. valid) if the specified principal token is valid,\n        // the specified amortization unit type is valid, and the terms contract\n        // associated with the agreement is this one.  We need not check\n        // if any of the other simple interest parameters are valid, because\n        // it is impossible to encode invalid values for them.\n        if (principalTokenAddress != address(0) &&\n            amortizationUnitType < NUM_AMORTIZATION_UNIT_TYPES &&\n            termsContract == address(this)) {\n            LogSimpleInterestTermStart(\n                agreementId,\n                principalTokenAddress,\n                principalAmount,\n                interestRate,\n                amortizationUnitType,\n                termLengthInAmortizationUnits\n            );\n\n            return true;\n        }\n\n        return false;\n    }\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    )\n        public\n        onlyRouter\n        returns (bool _success)\n    {\n        SimpleInterestParams memory params = unpackParamsForAgreementID(agreementId);\n\n        if (tokenAddress == params.principalTokenAddress) {\n            valueRepaid[agreementId] = valueRepaid[agreementId].add(unitsOfRepayment);\n            return true;\n        }\n\n        return false;\n    }\n\n     /// Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    )\n        public\n        view\n        onlyMappedToThisContract(agreementId)\n        returns (uint _expectedRepaymentValue)\n    {\n        SimpleInterestParams memory params = unpackParamsForAgreementID(agreementId);\n        uint principalPlusInterest = calculateTotalPrincipalPlusInterest(params);\n\n        if (timestamp <= params.termStartUnixTimestamp) {\n            /* The query occurs before the contract was even initialized so the\n            expected value of repayments is 0. */\n            return 0;\n        } else if (timestamp >= params.termEndUnixTimestamp) {\n            /* the query occurs beyond the contract's term, so the expected\n            value of repayment is the full principal plus interest. */\n            return principalPlusInterest;\n        } else {\n            uint numUnits = numAmortizationUnitsForTimestamp(timestamp, params);\n            return principalPlusInterest.mul(numUnits).div(params.termLengthInAmortizationUnits);\n        }\n    }\n\n     /// Returns the cumulative units-of-value repaid to date.\n     /// @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid by the specified block timestamp.\n    function getValueRepaidToDate(bytes32 agreementId)\n        public\n        view\n        returns (uint _valueRepaid)\n    {\n        return valueRepaid[agreementId];\n    }\n\n    function unpackParametersFromBytes(bytes32 parameters)\n        public\n        pure\n        returns (\n            uint _principalTokenIndex,\n            uint _principalAmount,\n            uint _interestRate,\n            uint _amortizationUnitType,\n            uint _termLengthInAmortizationUnits\n        )\n    {\n        // The first byte of the parameters encodes the principal token's index in the\n        // token registry.\n        bytes32 principalTokenIndexShifted =\n            parameters & 0xff00000000000000000000000000000000000000000000000000000000000000;\n        // The subsequent 12 bytes of the parameters encode the principal amount.\n        bytes32 principalAmountShifted =\n            parameters & 0x00ffffffffffffffffffffffff00000000000000000000000000000000000000;\n        // The subsequent 3 bytes of the parameters encode the interest rate.\n        bytes32 interestRateShifted =\n            parameters & 0x00000000000000000000000000ffffff00000000000000000000000000000000;\n        // The subsequent 4 bits (half byte) encode the amortization unit type code.\n        bytes32 amortizationUnitTypeShifted =\n            parameters & 0x00000000000000000000000000000000f0000000000000000000000000000000;\n        // The subsequent 2 bytes encode the term length, as denominated in\n        // the encoded amortization unit.\n        bytes32 termLengthInAmortizationUnitsShifted =\n            parameters & 0x000000000000000000000000000000000ffff000000000000000000000000000;\n\n        // Note that the remaining 108 bits are reserved for any parameters relevant to a\n        // collateralized terms contracts.\n\n        /*\n        We then bit shift left each of these values so that the 32-byte uint\n        counterpart correctly represents the value that was originally packed\n        into the 32 byte string.\n\n        The below chart summarizes where in the 32 byte string each value\n        terminates -- which indicates the extent to which each value must be bit\n        shifted left.\n\n                                        Location (bytes)\tLocation (bits)\n                                        32                  256\n        principalTokenIndex\t            31\t                248\n        principalAmount\t                19                  152\n        interestRate                    16                  128\n        amortizationUnitType            15.5                124\n        termLengthInAmortizationUnits   13.5                108\n        */\n        return (\n            bitShiftRight(principalTokenIndexShifted, 248),\n            bitShiftRight(principalAmountShifted, 152),\n            bitShiftRight(interestRateShifted, 128),\n            bitShiftRight(amortizationUnitTypeShifted, 124),\n            bitShiftRight(termLengthInAmortizationUnitsShifted, 108)\n        );\n    }\n\n    function bitShiftRight(bytes32 value, uint amount)\n        internal\n        pure\n        returns (uint)\n    {\n        return uint(value) / 2 ** amount;\n    }\n\n    function numAmortizationUnitsForTimestamp(\n        uint timestamp,\n        SimpleInterestParams params\n    )\n        internal\n        returns (uint units)\n    {\n        uint delta = timestamp.sub(params.termStartUnixTimestamp);\n        uint amortizationUnitLengthInSeconds = getAmortizationUnitLengthInSeconds(params.amortizationUnitType);\n        return delta.div(amortizationUnitLengthInSeconds);\n    }\n\n    /**\n     * Calculates the total repayment value expected at the end of the loan's term.\n     *\n     * This computation assumes that interest is paid per amortization period.\n     *\n     * @param params SimpleInterestParams. The parameters that define the simple interest loan.\n     * @return uint The total repayment value expected at the end of the loan's term.\n     */\n    function calculateTotalPrincipalPlusInterest(\n        SimpleInterestParams params\n    )\n        internal\n        returns (uint _principalPlusInterest)\n    {\n        uint interestPayment = params.principalAmount.mul(params.interestRate);\n        uint totalInterest = interestPayment.mul(params.termLengthInAmortizationUnits);\n        return params.principalAmount.add(totalInterest);\n    }\n\n    function unpackParamsForAgreementID(\n        bytes32 agreementId\n    )\n        internal\n        returns (SimpleInterestParams params)\n    {\n        bytes32 parameters = debtRegistry.getTermsContractParameters(agreementId);\n\n        // Index of the token used for principal payments in the Token Registry\n        uint principalTokenIndex;\n        // The principal amount denominated in the aforementioned token.\n        uint principalAmount;\n        // The interest rate accrued per amortization unit.\n        uint interestRate;\n        // The amortization unit in which the repayments installments schedule is defined.\n        uint rawAmortizationUnitType;\n        // The debt's entire term's length, denominated in the aforementioned amortization units\n        uint termLengthInAmortizationUnits;\n\n        (principalTokenIndex, principalAmount, interestRate, rawAmortizationUnitType, termLengthInAmortizationUnits) =\n            unpackParametersFromBytes(parameters);\n\n        address principalTokenAddress =\n            tokenRegistry.getTokenAddressByIndex(principalTokenIndex);\n\n        // Ensure that the encoded principal token address is valid\n        require(principalTokenAddress != address(0));\n\n        // Before we cast to `AmortizationUnitType`, ensure that the raw value being stored is valid.\n        require(rawAmortizationUnitType <= uint(AmortizationUnitType.YEARS));\n\n        AmortizationUnitType amortizationUnitType = AmortizationUnitType(rawAmortizationUnitType);\n\n        uint amortizationUnitLengthInSeconds =\n            getAmortizationUnitLengthInSeconds(amortizationUnitType);\n        uint issuanceBlockTimestamp =\n            debtRegistry.getIssuanceBlockTimestamp(agreementId);\n        uint termLengthInSeconds =\n            termLengthInAmortizationUnits.mul(amortizationUnitLengthInSeconds);\n        uint termEndUnixTimestamp =\n            termLengthInSeconds.add(issuanceBlockTimestamp);\n\n        return SimpleInterestParams({\n            principalTokenAddress: principalTokenAddress,\n            principalAmount: principalAmount,\n            interestRate: interestRate,\n            termStartUnixTimestamp: issuanceBlockTimestamp,\n            termEndUnixTimestamp: termEndUnixTimestamp,\n            amortizationUnitType: amortizationUnitType,\n            termLengthInAmortizationUnits: termLengthInAmortizationUnits\n        });\n    }\n\n    function getAmortizationUnitLengthInSeconds(AmortizationUnitType amortizationUnitType)\n        internal\n        pure\n        returns (uint _amortizationUnitLengthInSeconds)\n    {\n        if (amortizationUnitType == AmortizationUnitType.HOURS) {\n            return HOUR_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.DAYS) {\n            return DAY_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.WEEKS) {\n            return WEEK_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.MONTHS) {\n            return MONTH_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.YEARS) {\n            return YEAR_LENGTH_IN_SECONDS;\n        } else {\n            revert();\n        }\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/SimpleInterestTermsContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/SimpleInterestTermsContract.sol",
      "exportedSymbols": {
        "SimpleInterestTermsContract": [
          3570
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 2902,
        "name": "PragmaDirective",
        "src": "584:23:9"
      },
      {
        "attributes": {
          "SourceUnit": 5436,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 3571,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2903,
        "name": "ImportDirective",
        "src": "609:55:9"
      },
      {
        "attributes": {
          "SourceUnit": 1665,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
          "file": "../DebtRegistry.sol",
          "scope": 3571,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2904,
        "name": "ImportDirective",
        "src": "665:29:9"
      },
      {
        "attributes": {
          "SourceUnit": 2107,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
          "file": "../TermsContract.sol",
          "scope": 3571,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2905,
        "name": "ImportDirective",
        "src": "695:30:9"
      },
      {
        "attributes": {
          "SourceUnit": 2239,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
          "file": "../TokenRegistry.sol",
          "scope": 3571,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2906,
        "name": "ImportDirective",
        "src": "726:30:9"
      },
      {
        "attributes": {
          "contractDependencies": [
            2106
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            3570,
            2106
          ],
          "name": "SimpleInterestTermsContract",
          "scope": 3571
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "TermsContract",
                  "referencedDeclaration": 2106,
                  "type": "contract TermsContract"
                },
                "id": 2907,
                "name": "UserDefinedTypeName",
                "src": "799:13:9"
              }
            ],
            "id": 2908,
            "name": "InheritanceSpecifier",
            "src": "799:13:9"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 5435,
                  "type": "library SafeMath"
                },
                "id": 2909,
                "name": "UserDefinedTypeName",
                "src": "825:8:9"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2910,
                "name": "ElementaryTypeName",
                "src": "838:4:9"
              }
            ],
            "id": 2911,
            "name": "UsingForDirective",
            "src": "819:24:9"
          },
          {
            "attributes": {
              "canonicalName": "SimpleInterestTermsContract.AmortizationUnitType",
              "name": "AmortizationUnitType"
            },
            "children": [
              {
                "attributes": {
                  "name": "HOURS"
                },
                "id": 2912,
                "name": "EnumValue",
                "src": "877:5:9"
              },
              {
                "attributes": {
                  "name": "DAYS"
                },
                "id": 2913,
                "name": "EnumValue",
                "src": "884:4:9"
              },
              {
                "attributes": {
                  "name": "WEEKS"
                },
                "id": 2914,
                "name": "EnumValue",
                "src": "890:5:9"
              },
              {
                "attributes": {
                  "name": "MONTHS"
                },
                "id": 2915,
                "name": "EnumValue",
                "src": "897:6:9"
              },
              {
                "attributes": {
                  "name": "YEARS"
                },
                "id": 2916,
                "name": "EnumValue",
                "src": "905:5:9"
              }
            ],
            "id": 2917,
            "name": "EnumDefinition",
            "src": "849:63:9"
          },
          {
            "attributes": {
              "constant": true,
              "name": "NUM_AMORTIZATION_UNIT_TYPES",
              "scope": 3570,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2918,
                "name": "ElementaryTypeName",
                "src": "917:4:9"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "35",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 5",
                  "value": "5"
                },
                "id": 2919,
                "name": "Literal",
                "src": "968:1:9"
              }
            ],
            "id": 2920,
            "name": "VariableDeclaration",
            "src": "917:52:9"
          },
          {
            "attributes": {
              "canonicalName": "SimpleInterestTermsContract.SimpleInterestParams",
              "name": "SimpleInterestParams",
              "scope": 3570,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "principalTokenAddress",
                  "scope": 2935,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 2921,
                    "name": "ElementaryTypeName",
                    "src": "1014:7:9"
                  }
                ],
                "id": 2922,
                "name": "VariableDeclaration",
                "src": "1014:29:9"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "principalAmount",
                  "scope": 2935,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 2923,
                    "name": "ElementaryTypeName",
                    "src": "1053:4:9"
                  }
                ],
                "id": 2924,
                "name": "VariableDeclaration",
                "src": "1053:20:9"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "interestRate",
                  "scope": 2935,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 2925,
                    "name": "ElementaryTypeName",
                    "src": "1083:4:9"
                  }
                ],
                "id": 2926,
                "name": "VariableDeclaration",
                "src": "1083:17:9"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termStartUnixTimestamp",
                  "scope": 2935,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 2927,
                    "name": "ElementaryTypeName",
                    "src": "1110:4:9"
                  }
                ],
                "id": 2928,
                "name": "VariableDeclaration",
                "src": "1110:27:9"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termEndUnixTimestamp",
                  "scope": 2935,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 2929,
                    "name": "ElementaryTypeName",
                    "src": "1147:4:9"
                  }
                ],
                "id": 2930,
                "name": "VariableDeclaration",
                "src": "1147:25:9"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "amortizationUnitType",
                  "scope": 2935,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "AmortizationUnitType",
                      "referencedDeclaration": 2917,
                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                    },
                    "id": 2931,
                    "name": "UserDefinedTypeName",
                    "src": "1182:20:9"
                  }
                ],
                "id": 2932,
                "name": "VariableDeclaration",
                "src": "1182:41:9"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termLengthInAmortizationUnits",
                  "scope": 2935,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 2933,
                    "name": "ElementaryTypeName",
                    "src": "1233:4:9"
                  }
                ],
                "id": 2934,
                "name": "VariableDeclaration",
                "src": "1233:34:9"
              }
            ],
            "id": 2935,
            "name": "StructDefinition",
            "src": "976:298:9"
          },
          {
            "attributes": {
              "constant": true,
              "name": "HOUR_LENGTH_IN_SECONDS",
              "scope": 3570,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2936,
                "name": "ElementaryTypeName",
                "src": "1280:4:9"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_rational_3600_by_1",
                    "typeString": "int_const 3600"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "int_const 3600"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "3630",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 60",
                      "value": "60"
                    },
                    "id": 2937,
                    "name": "Literal",
                    "src": "1326:2:9"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "3630",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 60",
                      "value": "60"
                    },
                    "id": 2938,
                    "name": "Literal",
                    "src": "1331:2:9"
                  }
                ],
                "id": 2939,
                "name": "BinaryOperation",
                "src": "1326:7:9"
              }
            ],
            "id": 2940,
            "name": "VariableDeclaration",
            "src": "1280:53:9"
          },
          {
            "attributes": {
              "constant": true,
              "name": "DAY_LENGTH_IN_SECONDS",
              "scope": 3570,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2941,
                "name": "ElementaryTypeName",
                "src": "1339:4:9"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "uint256"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2940,
                      "type": "uint256",
                      "value": "HOUR_LENGTH_IN_SECONDS"
                    },
                    "id": 2942,
                    "name": "Identifier",
                    "src": "1384:22:9"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "3234",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 24",
                      "value": "24"
                    },
                    "id": 2943,
                    "name": "Literal",
                    "src": "1409:2:9"
                  }
                ],
                "id": 2944,
                "name": "BinaryOperation",
                "src": "1384:27:9"
              }
            ],
            "id": 2945,
            "name": "VariableDeclaration",
            "src": "1339:72:9"
          },
          {
            "attributes": {
              "constant": true,
              "name": "WEEK_LENGTH_IN_SECONDS",
              "scope": 3570,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2946,
                "name": "ElementaryTypeName",
                "src": "1417:4:9"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "uint256"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2945,
                      "type": "uint256",
                      "value": "DAY_LENGTH_IN_SECONDS"
                    },
                    "id": 2947,
                    "name": "Identifier",
                    "src": "1463:21:9"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "37",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 7",
                      "value": "7"
                    },
                    "id": 2948,
                    "name": "Literal",
                    "src": "1487:1:9"
                  }
                ],
                "id": 2949,
                "name": "BinaryOperation",
                "src": "1463:25:9"
              }
            ],
            "id": 2950,
            "name": "VariableDeclaration",
            "src": "1417:71:9"
          },
          {
            "attributes": {
              "constant": true,
              "name": "MONTH_LENGTH_IN_SECONDS",
              "scope": 3570,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2951,
                "name": "ElementaryTypeName",
                "src": "1494:4:9"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "uint256"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2945,
                      "type": "uint256",
                      "value": "DAY_LENGTH_IN_SECONDS"
                    },
                    "id": 2952,
                    "name": "Identifier",
                    "src": "1541:21:9"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "3330",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 30",
                      "value": "30"
                    },
                    "id": 2953,
                    "name": "Literal",
                    "src": "1565:2:9"
                  }
                ],
                "id": 2954,
                "name": "BinaryOperation",
                "src": "1541:26:9"
              }
            ],
            "id": 2955,
            "name": "VariableDeclaration",
            "src": "1494:73:9"
          },
          {
            "attributes": {
              "constant": true,
              "name": "YEAR_LENGTH_IN_SECONDS",
              "scope": 3570,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2956,
                "name": "ElementaryTypeName",
                "src": "1573:4:9"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "uint256"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2945,
                      "type": "uint256",
                      "value": "DAY_LENGTH_IN_SECONDS"
                    },
                    "id": 2957,
                    "name": "Identifier",
                    "src": "1619:21:9"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "333635",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 365",
                      "value": "365"
                    },
                    "id": 2958,
                    "name": "Literal",
                    "src": "1643:3:9"
                  }
                ],
                "id": 2959,
                "name": "BinaryOperation",
                "src": "1619:27:9"
              }
            ],
            "id": 2960,
            "name": "VariableDeclaration",
            "src": "1573:73:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "valueRepaid",
              "scope": 3570,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => uint256)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 2961,
                    "name": "ElementaryTypeName",
                    "src": "1662:7:9"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 2962,
                    "name": "ElementaryTypeName",
                    "src": "1673:4:9"
                  }
                ],
                "id": 2963,
                "name": "Mapping",
                "src": "1653:25:9"
              }
            ],
            "id": 2964,
            "name": "VariableDeclaration",
            "src": "1653:44:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtRegistry",
              "scope": 3570,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract DebtRegistry",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "DebtRegistry",
                  "referencedDeclaration": 1664,
                  "type": "contract DebtRegistry"
                },
                "id": 2965,
                "name": "UserDefinedTypeName",
                "src": "1704:12:9"
              }
            ],
            "id": 2966,
            "name": "VariableDeclaration",
            "src": "1704:32:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenRegistry",
              "scope": 3570,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract TokenRegistry",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "TokenRegistry",
                  "referencedDeclaration": 2238,
                  "type": "contract TokenRegistry"
                },
                "id": 2967,
                "name": "UserDefinedTypeName",
                "src": "1742:13:9"
              }
            ],
            "id": 2968,
            "name": "VariableDeclaration",
            "src": "1742:34:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtKernel",
              "scope": 3570,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 2969,
                "name": "ElementaryTypeName",
                "src": "1783:7:9"
              }
            ],
            "id": 2970,
            "name": "VariableDeclaration",
            "src": "1783:25:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "repaymentRouter",
              "scope": 3570,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 2971,
                "name": "ElementaryTypeName",
                "src": "1814:7:9"
              }
            ],
            "id": 2972,
            "name": "VariableDeclaration",
            "src": "1814:30:9"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogSimpleInterestTermStart"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "agreementId",
                      "scope": 2986,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2973,
                        "name": "ElementaryTypeName",
                        "src": "1893:7:9"
                      }
                    ],
                    "id": 2974,
                    "name": "VariableDeclaration",
                    "src": "1893:27:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "principalToken",
                      "scope": 2986,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2975,
                        "name": "ElementaryTypeName",
                        "src": "1930:7:9"
                      }
                    ],
                    "id": 2976,
                    "name": "VariableDeclaration",
                    "src": "1930:30:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "principalAmount",
                      "scope": 2986,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2977,
                        "name": "ElementaryTypeName",
                        "src": "1970:4:9"
                      }
                    ],
                    "id": 2978,
                    "name": "VariableDeclaration",
                    "src": "1970:20:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "interestRate",
                      "scope": 2986,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2979,
                        "name": "ElementaryTypeName",
                        "src": "2000:4:9"
                      }
                    ],
                    "id": 2980,
                    "name": "VariableDeclaration",
                    "src": "2000:17:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "amortizationUnitType",
                      "scope": 2986,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2981,
                        "name": "ElementaryTypeName",
                        "src": "2027:4:9"
                      }
                    ],
                    "id": 2982,
                    "name": "VariableDeclaration",
                    "src": "2027:33:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "termLengthInAmortizationUnits",
                      "scope": 2986,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2983,
                        "name": "ElementaryTypeName",
                        "src": "2070:4:9"
                      }
                    ],
                    "id": 2984,
                    "name": "VariableDeclaration",
                    "src": "2070:34:9"
                  }
                ],
                "id": 2985,
                "name": "ParameterList",
                "src": "1883:227:9"
              }
            ],
            "id": 2986,
            "name": "EventDefinition",
            "src": "1851:260:9"
          },
          {
            "attributes": {
              "name": "onlyRouter",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2987,
                "name": "ParameterList",
                "src": "2136:2:9"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2988,
                            "name": "Identifier",
                            "src": "2149:7:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5578,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 2989,
                                    "name": "Identifier",
                                    "src": "2157:3:9"
                                  }
                                ],
                                "id": 2990,
                                "name": "MemberAccess",
                                "src": "2157:10:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2972,
                                  "type": "address",
                                  "value": "repaymentRouter"
                                },
                                "id": 2991,
                                "name": "Identifier",
                                "src": "2171:15:9"
                              }
                            ],
                            "id": 2992,
                            "name": "BinaryOperation",
                            "src": "2157:29:9"
                          }
                        ],
                        "id": 2993,
                        "name": "FunctionCall",
                        "src": "2149:38:9"
                      }
                    ],
                    "id": 2994,
                    "name": "ExpressionStatement",
                    "src": "2149:38:9"
                  },
                  {
                    "id": 2995,
                    "name": "PlaceholderStatement",
                    "src": "2197:1:9"
                  }
                ],
                "id": 2996,
                "name": "Block",
                "src": "2139:66:9"
              }
            ],
            "id": 2997,
            "name": "ModifierDefinition",
            "src": "2117:88:9"
          },
          {
            "attributes": {
              "name": "onlyMappedToThisContract",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3014,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2998,
                        "name": "ElementaryTypeName",
                        "src": "2245:7:9"
                      }
                    ],
                    "id": 2999,
                    "name": "VariableDeclaration",
                    "src": "2245:19:9"
                  }
                ],
                "id": 3000,
                "name": "ParameterList",
                "src": "2244:21:9"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3001,
                            "name": "Identifier",
                            "src": "2276:7:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_SimpleInterestTermsContract_$3570",
                                          "typeString": "contract SimpleInterestTermsContract"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 3002,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2284:7:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5625,
                                      "type": "contract SimpleInterestTermsContract",
                                      "value": "this"
                                    },
                                    "id": 3003,
                                    "name": "Identifier",
                                    "src": "2292:4:9"
                                  }
                                ],
                                "id": 3004,
                                "name": "FunctionCall",
                                "src": "2284:13:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "getTermsContract",
                                      "referencedDeclaration": 1552,
                                      "type": "function (bytes32) view external returns (address)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2966,
                                          "type": "contract DebtRegistry",
                                          "value": "debtRegistry"
                                        },
                                        "id": 3005,
                                        "name": "Identifier",
                                        "src": "2301:12:9"
                                      }
                                    ],
                                    "id": 3006,
                                    "name": "MemberAccess",
                                    "src": "2301:29:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2999,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 3007,
                                    "name": "Identifier",
                                    "src": "2331:11:9"
                                  }
                                ],
                                "id": 3008,
                                "name": "FunctionCall",
                                "src": "2301:42:9"
                              }
                            ],
                            "id": 3009,
                            "name": "BinaryOperation",
                            "src": "2284:59:9"
                          }
                        ],
                        "id": 3010,
                        "name": "FunctionCall",
                        "src": "2276:68:9"
                      }
                    ],
                    "id": 3011,
                    "name": "ExpressionStatement",
                    "src": "2276:68:9"
                  },
                  {
                    "id": 3012,
                    "name": "PlaceholderStatement",
                    "src": "2354:1:9"
                  }
                ],
                "id": 3013,
                "name": "Block",
                "src": "2266:96:9"
              }
            ],
            "id": 3014,
            "name": "ModifierDefinition",
            "src": "2211:151:9"
          },
          {
            "attributes": {
              "name": "onlyDebtKernel",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3015,
                "name": "ParameterList",
                "src": "2391:2:9"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3016,
                            "name": "Identifier",
                            "src": "2404:7:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5578,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 3017,
                                    "name": "Identifier",
                                    "src": "2412:3:9"
                                  }
                                ],
                                "id": 3018,
                                "name": "MemberAccess",
                                "src": "2412:10:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2970,
                                  "type": "address",
                                  "value": "debtKernel"
                                },
                                "id": 3019,
                                "name": "Identifier",
                                "src": "2426:10:9"
                              }
                            ],
                            "id": 3020,
                            "name": "BinaryOperation",
                            "src": "2412:24:9"
                          }
                        ],
                        "id": 3021,
                        "name": "FunctionCall",
                        "src": "2404:33:9"
                      }
                    ],
                    "id": 3022,
                    "name": "ExpressionStatement",
                    "src": "2404:33:9"
                  },
                  {
                    "id": 3023,
                    "name": "PlaceholderStatement",
                    "src": "2447:1:9"
                  }
                ],
                "id": 3024,
                "name": "Block",
                "src": "2394:61:9"
              }
            ],
            "id": 3025,
            "name": "ModifierDefinition",
            "src": "2368:87:9"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "SimpleInterestTermsContract",
              "payable": false,
              "scope": 3570,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtKernel",
                      "scope": 3057,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3026,
                        "name": "ElementaryTypeName",
                        "src": "2507:7:9"
                      }
                    ],
                    "id": 3027,
                    "name": "VariableDeclaration",
                    "src": "2507:19:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtRegistry",
                      "scope": 3057,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3028,
                        "name": "ElementaryTypeName",
                        "src": "2536:7:9"
                      }
                    ],
                    "id": 3029,
                    "name": "VariableDeclaration",
                    "src": "2536:21:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenRegistry",
                      "scope": 3057,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3030,
                        "name": "ElementaryTypeName",
                        "src": "2567:7:9"
                      }
                    ],
                    "id": 3031,
                    "name": "VariableDeclaration",
                    "src": "2567:22:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_repaymentRouter",
                      "scope": 3057,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3032,
                        "name": "ElementaryTypeName",
                        "src": "2599:7:9"
                      }
                    ],
                    "id": 3033,
                    "name": "VariableDeclaration",
                    "src": "2599:24:9"
                  }
                ],
                "id": 3034,
                "name": "ParameterList",
                "src": "2497:132:9"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3035,
                "name": "ParameterList",
                "src": "2649:0:9"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract DebtRegistry"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2966,
                              "type": "contract DebtRegistry",
                              "value": "debtRegistry"
                            },
                            "id": 3036,
                            "name": "Identifier",
                            "src": "2659:12:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract DebtRegistry",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1664,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 3037,
                                "name": "Identifier",
                                "src": "2674:12:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3029,
                                  "type": "address",
                                  "value": "_debtRegistry"
                                },
                                "id": 3038,
                                "name": "Identifier",
                                "src": "2687:13:9"
                              }
                            ],
                            "id": 3039,
                            "name": "FunctionCall",
                            "src": "2674:27:9"
                          }
                        ],
                        "id": 3040,
                        "name": "Assignment",
                        "src": "2659:42:9"
                      }
                    ],
                    "id": 3041,
                    "name": "ExpressionStatement",
                    "src": "2659:42:9"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract TokenRegistry"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2968,
                              "type": "contract TokenRegistry",
                              "value": "tokenRegistry"
                            },
                            "id": 3042,
                            "name": "Identifier",
                            "src": "2711:13:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract TokenRegistry",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2238,
                                  "type": "type(contract TokenRegistry)",
                                  "value": "TokenRegistry"
                                },
                                "id": 3043,
                                "name": "Identifier",
                                "src": "2727:13:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3031,
                                  "type": "address",
                                  "value": "_tokenRegistry"
                                },
                                "id": 3044,
                                "name": "Identifier",
                                "src": "2741:14:9"
                              }
                            ],
                            "id": 3045,
                            "name": "FunctionCall",
                            "src": "2727:29:9"
                          }
                        ],
                        "id": 3046,
                        "name": "Assignment",
                        "src": "2711:45:9"
                      }
                    ],
                    "id": 3047,
                    "name": "ExpressionStatement",
                    "src": "2711:45:9"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2970,
                              "type": "address",
                              "value": "debtKernel"
                            },
                            "id": 3048,
                            "name": "Identifier",
                            "src": "2767:10:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3027,
                              "type": "address",
                              "value": "_debtKernel"
                            },
                            "id": 3049,
                            "name": "Identifier",
                            "src": "2780:11:9"
                          }
                        ],
                        "id": 3050,
                        "name": "Assignment",
                        "src": "2767:24:9"
                      }
                    ],
                    "id": 3051,
                    "name": "ExpressionStatement",
                    "src": "2767:24:9"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2972,
                              "type": "address",
                              "value": "repaymentRouter"
                            },
                            "id": 3052,
                            "name": "Identifier",
                            "src": "2801:15:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3033,
                              "type": "address",
                              "value": "_repaymentRouter"
                            },
                            "id": 3053,
                            "name": "Identifier",
                            "src": "2819:16:9"
                          }
                        ],
                        "id": 3054,
                        "name": "Assignment",
                        "src": "2801:34:9"
                      }
                    ],
                    "id": 3055,
                    "name": "ExpressionStatement",
                    "src": "2801:34:9"
                  }
                ],
                "id": 3056,
                "name": "Block",
                "src": "2649:193:9"
              }
            ],
            "id": 3057,
            "name": "FunctionDefinition",
            "src": "2461:381:9"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "registerTermStart",
              "payable": false,
              "scope": 3570,
              "stateMutability": "nonpayable",
              "superFunction": 2074,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3147,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3058,
                        "name": "ElementaryTypeName",
                        "src": "3531:7:9"
                      }
                    ],
                    "id": 3059,
                    "name": "VariableDeclaration",
                    "src": "3531:19:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "debtor",
                      "scope": 3147,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3060,
                        "name": "ElementaryTypeName",
                        "src": "3560:7:9"
                      }
                    ],
                    "id": 3061,
                    "name": "VariableDeclaration",
                    "src": "3560:14:9"
                  }
                ],
                "id": 3062,
                "name": "ParameterList",
                "src": "3521:59:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 3147,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 3065,
                        "name": "ElementaryTypeName",
                        "src": "3636:4:9"
                      }
                    ],
                    "id": 3066,
                    "name": "VariableDeclaration",
                    "src": "3636:13:9"
                  }
                ],
                "id": 3067,
                "name": "ParameterList",
                "src": "3635:15:9"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 3025,
                      "type": "modifier ()",
                      "value": "onlyDebtKernel"
                    },
                    "id": 3063,
                    "name": "Identifier",
                    "src": "3604:14:9"
                  }
                ],
                "id": 3064,
                "name": "ModifierInvocation",
                "src": "3604:14:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termsContract",
                          "scope": 3147,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 3068,
                            "name": "ElementaryTypeName",
                            "src": "3665:7:9"
                          }
                        ],
                        "id": 3069,
                        "name": "VariableDeclaration",
                        "src": "3665:21:9"
                      }
                    ],
                    "id": 3070,
                    "name": "VariableDeclarationStatement",
                    "src": "3665:21:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termsContractParameters",
                          "scope": 3147,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 3071,
                            "name": "ElementaryTypeName",
                            "src": "3696:7:9"
                          }
                        ],
                        "id": 3072,
                        "name": "VariableDeclaration",
                        "src": "3696:31:9"
                      }
                    ],
                    "id": 3073,
                    "name": "VariableDeclarationStatement",
                    "src": "3696:31:9"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "tuple(address,bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3069,
                                  "type": "address",
                                  "value": "termsContract"
                                },
                                "id": 3074,
                                "name": "Identifier",
                                "src": "3739:13:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3072,
                                  "type": "bytes32",
                                  "value": "termsContractParameters"
                                },
                                "id": 3075,
                                "name": "Identifier",
                                "src": "3754:23:9"
                              }
                            ],
                            "id": 3076,
                            "name": "TupleExpression",
                            "src": "3738:40:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple(address,bytes32)",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "getTerms",
                                  "referencedDeclaration": 1588,
                                  "type": "function (bytes32) view external returns (address,bytes32)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2966,
                                      "type": "contract DebtRegistry",
                                      "value": "debtRegistry"
                                    },
                                    "id": 3077,
                                    "name": "Identifier",
                                    "src": "3781:12:9"
                                  }
                                ],
                                "id": 3078,
                                "name": "MemberAccess",
                                "src": "3781:21:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3059,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 3079,
                                "name": "Identifier",
                                "src": "3803:11:9"
                              }
                            ],
                            "id": 3080,
                            "name": "FunctionCall",
                            "src": "3781:34:9"
                          }
                        ],
                        "id": 3081,
                        "name": "Assignment",
                        "src": "3738:77:9"
                      }
                    ],
                    "id": 3082,
                    "name": "ExpressionStatement",
                    "src": "3738:77:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalTokenIndex",
                          "scope": 3147,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3083,
                            "name": "ElementaryTypeName",
                            "src": "3826:4:9"
                          }
                        ],
                        "id": 3084,
                        "name": "VariableDeclaration",
                        "src": "3826:24:9"
                      }
                    ],
                    "id": 3085,
                    "name": "VariableDeclarationStatement",
                    "src": "3826:24:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalAmount",
                          "scope": 3147,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3086,
                            "name": "ElementaryTypeName",
                            "src": "3860:4:9"
                          }
                        ],
                        "id": 3087,
                        "name": "VariableDeclaration",
                        "src": "3860:20:9"
                      }
                    ],
                    "id": 3088,
                    "name": "VariableDeclarationStatement",
                    "src": "3860:20:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "interestRate",
                          "scope": 3147,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3089,
                            "name": "ElementaryTypeName",
                            "src": "3890:4:9"
                          }
                        ],
                        "id": 3090,
                        "name": "VariableDeclaration",
                        "src": "3890:17:9"
                      }
                    ],
                    "id": 3091,
                    "name": "VariableDeclarationStatement",
                    "src": "3890:17:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitType",
                          "scope": 3147,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3092,
                            "name": "ElementaryTypeName",
                            "src": "3917:4:9"
                          }
                        ],
                        "id": 3093,
                        "name": "VariableDeclaration",
                        "src": "3917:25:9"
                      }
                    ],
                    "id": 3094,
                    "name": "VariableDeclarationStatement",
                    "src": "3917:25:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termLengthInAmortizationUnits",
                          "scope": 3147,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3095,
                            "name": "ElementaryTypeName",
                            "src": "3952:4:9"
                          }
                        ],
                        "id": 3096,
                        "name": "VariableDeclaration",
                        "src": "3952:34:9"
                      }
                    ],
                    "id": 3097,
                    "name": "VariableDeclarationStatement",
                    "src": "3952:34:9"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "tuple(uint256,uint256,uint256,uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3084,
                                  "type": "uint256",
                                  "value": "principalTokenIndex"
                                },
                                "id": 3098,
                                "name": "Identifier",
                                "src": "3998:19:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3087,
                                  "type": "uint256",
                                  "value": "principalAmount"
                                },
                                "id": 3099,
                                "name": "Identifier",
                                "src": "4019:15:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3090,
                                  "type": "uint256",
                                  "value": "interestRate"
                                },
                                "id": 3100,
                                "name": "Identifier",
                                "src": "4036:12:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3093,
                                  "type": "uint256",
                                  "value": "amortizationUnitType"
                                },
                                "id": 3101,
                                "name": "Identifier",
                                "src": "4050:20:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3096,
                                  "type": "uint256",
                                  "value": "termLengthInAmortizationUnits"
                                },
                                "id": 3102,
                                "name": "Identifier",
                                "src": "4072:29:9"
                              }
                            ],
                            "id": 3103,
                            "name": "TupleExpression",
                            "src": "3997:105:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple(uint256,uint256,uint256,uint256,uint256)",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3330,
                                  "type": "function (bytes32) pure returns (uint256,uint256,uint256,uint256,uint256)",
                                  "value": "unpackParametersFromBytes"
                                },
                                "id": 3104,
                                "name": "Identifier",
                                "src": "4117:25:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3072,
                                  "type": "bytes32",
                                  "value": "termsContractParameters"
                                },
                                "id": 3105,
                                "name": "Identifier",
                                "src": "4143:23:9"
                              }
                            ],
                            "id": 3106,
                            "name": "FunctionCall",
                            "src": "4117:50:9"
                          }
                        ],
                        "id": 3107,
                        "name": "Assignment",
                        "src": "3997:170:9"
                      }
                    ],
                    "id": 3108,
                    "name": "ExpressionStatement",
                    "src": "3997:170:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3110
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalTokenAddress",
                          "scope": 3147,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 3109,
                            "name": "ElementaryTypeName",
                            "src": "4178:7:9"
                          }
                        ],
                        "id": 3110,
                        "name": "VariableDeclaration",
                        "src": "4178:29:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getTokenAddressByIndex",
                              "referencedDeclaration": 2211,
                              "type": "function (uint256) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2968,
                                  "type": "contract TokenRegistry",
                                  "value": "tokenRegistry"
                                },
                                "id": 3111,
                                "name": "Identifier",
                                "src": "4222:13:9"
                              }
                            ],
                            "id": 3112,
                            "name": "MemberAccess",
                            "src": "4222:36:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3084,
                              "type": "uint256",
                              "value": "principalTokenIndex"
                            },
                            "id": 3113,
                            "name": "Identifier",
                            "src": "4259:19:9"
                          }
                        ],
                        "id": 3114,
                        "name": "FunctionCall",
                        "src": "4222:57:9"
                      }
                    ],
                    "id": 3115,
                    "name": "VariableDeclarationStatement",
                    "src": "4178:101:9"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&&",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "&&",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "!=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3110,
                                      "type": "address",
                                      "value": "principalTokenAddress"
                                    },
                                    "id": 3116,
                                    "name": "Identifier",
                                    "src": "4668:21:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "address",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_rational_0_by_1",
                                              "typeString": "int_const 0"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(address)",
                                          "value": "address"
                                        },
                                        "id": 3117,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "4693:7:9"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "30",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 0",
                                          "value": "0"
                                        },
                                        "id": 3118,
                                        "name": "Literal",
                                        "src": "4701:1:9"
                                      }
                                    ],
                                    "id": 3119,
                                    "name": "FunctionCall",
                                    "src": "4693:10:9"
                                  }
                                ],
                                "id": 3120,
                                "name": "BinaryOperation",
                                "src": "4668:35:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "<",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3093,
                                      "type": "uint256",
                                      "value": "amortizationUnitType"
                                    },
                                    "id": 3121,
                                    "name": "Identifier",
                                    "src": "4719:20:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2920,
                                      "type": "uint256",
                                      "value": "NUM_AMORTIZATION_UNIT_TYPES"
                                    },
                                    "id": 3122,
                                    "name": "Identifier",
                                    "src": "4742:27:9"
                                  }
                                ],
                                "id": 3123,
                                "name": "BinaryOperation",
                                "src": "4719:50:9"
                              }
                            ],
                            "id": 3124,
                            "name": "BinaryOperation",
                            "src": "4668:101:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3069,
                                  "type": "address",
                                  "value": "termsContract"
                                },
                                "id": 3125,
                                "name": "Identifier",
                                "src": "4785:13:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_SimpleInterestTermsContract_$3570",
                                          "typeString": "contract SimpleInterestTermsContract"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 3126,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "4802:7:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5625,
                                      "type": "contract SimpleInterestTermsContract",
                                      "value": "this"
                                    },
                                    "id": 3127,
                                    "name": "Identifier",
                                    "src": "4810:4:9"
                                  }
                                ],
                                "id": 3128,
                                "name": "FunctionCall",
                                "src": "4802:13:9"
                              }
                            ],
                            "id": 3129,
                            "name": "BinaryOperation",
                            "src": "4785:30:9"
                          }
                        ],
                        "id": 3130,
                        "name": "BinaryOperation",
                        "src": "4668:147:9"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2986,
                                      "type": "function (bytes32,address,uint256,uint256,uint256,uint256)",
                                      "value": "LogSimpleInterestTermStart"
                                    },
                                    "id": 3131,
                                    "name": "Identifier",
                                    "src": "4831:26:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3059,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 3132,
                                    "name": "Identifier",
                                    "src": "4875:11:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3110,
                                      "type": "address",
                                      "value": "principalTokenAddress"
                                    },
                                    "id": 3133,
                                    "name": "Identifier",
                                    "src": "4904:21:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3087,
                                      "type": "uint256",
                                      "value": "principalAmount"
                                    },
                                    "id": 3134,
                                    "name": "Identifier",
                                    "src": "4943:15:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3090,
                                      "type": "uint256",
                                      "value": "interestRate"
                                    },
                                    "id": 3135,
                                    "name": "Identifier",
                                    "src": "4976:12:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3093,
                                      "type": "uint256",
                                      "value": "amortizationUnitType"
                                    },
                                    "id": 3136,
                                    "name": "Identifier",
                                    "src": "5006:20:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3096,
                                      "type": "uint256",
                                      "value": "termLengthInAmortizationUnits"
                                    },
                                    "id": 3137,
                                    "name": "Identifier",
                                    "src": "5044:29:9"
                                  }
                                ],
                                "id": 3138,
                                "name": "FunctionCall",
                                "src": "4831:256:9"
                              }
                            ],
                            "id": 3139,
                            "name": "ExpressionStatement",
                            "src": "4831:256:9"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 3067
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 3140,
                                "name": "Literal",
                                "src": "5109:4:9"
                              }
                            ],
                            "id": 3141,
                            "name": "Return",
                            "src": "5102:11:9"
                          }
                        ],
                        "id": 3142,
                        "name": "Block",
                        "src": "4817:307:9"
                      }
                    ],
                    "id": 3143,
                    "name": "IfStatement",
                    "src": "4664:460:9"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3067
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "66616c7365",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "false"
                        },
                        "id": 3144,
                        "name": "Literal",
                        "src": "5141:5:9"
                      }
                    ],
                    "id": 3145,
                    "name": "Return",
                    "src": "5134:12:9"
                  }
                ],
                "id": 3146,
                "name": "Block",
                "src": "3655:1498:9"
              }
            ],
            "id": 3147,
            "name": "FunctionDefinition",
            "src": "3495:1658:9"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "registerRepayment",
              "payable": false,
              "scope": 3570,
              "stateMutability": "nonpayable",
              "superFunction": 2089,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3192,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3148,
                        "name": "ElementaryTypeName",
                        "src": "5900:7:9"
                      }
                    ],
                    "id": 3149,
                    "name": "VariableDeclaration",
                    "src": "5900:19:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "payer",
                      "scope": 3192,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3150,
                        "name": "ElementaryTypeName",
                        "src": "5929:7:9"
                      }
                    ],
                    "id": 3151,
                    "name": "VariableDeclaration",
                    "src": "5929:13:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 3192,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3152,
                        "name": "ElementaryTypeName",
                        "src": "5952:7:9"
                      }
                    ],
                    "id": 3153,
                    "name": "VariableDeclaration",
                    "src": "5952:19:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "unitsOfRepayment",
                      "scope": 3192,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 3154,
                        "name": "ElementaryTypeName",
                        "src": "5981:7:9"
                      }
                    ],
                    "id": 3155,
                    "name": "VariableDeclaration",
                    "src": "5981:24:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 3192,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3156,
                        "name": "ElementaryTypeName",
                        "src": "6015:7:9"
                      }
                    ],
                    "id": 3157,
                    "name": "VariableDeclaration",
                    "src": "6015:20:9"
                  }
                ],
                "id": 3158,
                "name": "ParameterList",
                "src": "5890:151:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 3192,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 3161,
                        "name": "ElementaryTypeName",
                        "src": "6093:4:9"
                      }
                    ],
                    "id": 3162,
                    "name": "VariableDeclaration",
                    "src": "6093:13:9"
                  }
                ],
                "id": 3163,
                "name": "ParameterList",
                "src": "6092:15:9"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2997,
                      "type": "modifier ()",
                      "value": "onlyRouter"
                    },
                    "id": 3159,
                    "name": "Identifier",
                    "src": "6065:10:9"
                  }
                ],
                "id": 3160,
                "name": "ModifierInvocation",
                "src": "6065:10:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3165
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "params",
                          "scope": 3192,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "SimpleInterestParams",
                              "referencedDeclaration": 2935,
                              "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                            },
                            "id": 3164,
                            "name": "UserDefinedTypeName",
                            "src": "6122:20:9"
                          }
                        ],
                        "id": 3165,
                        "name": "VariableDeclaration",
                        "src": "6122:34:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3517,
                              "type": "function (bytes32) returns (struct SimpleInterestTermsContract.SimpleInterestParams memory)",
                              "value": "unpackParamsForAgreementID"
                            },
                            "id": 3166,
                            "name": "Identifier",
                            "src": "6159:26:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3149,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3167,
                            "name": "Identifier",
                            "src": "6186:11:9"
                          }
                        ],
                        "id": 3168,
                        "name": "FunctionCall",
                        "src": "6159:39:9"
                      }
                    ],
                    "id": 3169,
                    "name": "VariableDeclarationStatement",
                    "src": "6122:76:9"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3157,
                              "type": "address",
                              "value": "tokenAddress"
                            },
                            "id": 3170,
                            "name": "Identifier",
                            "src": "6213:12:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "principalTokenAddress",
                              "referencedDeclaration": 2922,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3165,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3171,
                                "name": "Identifier",
                                "src": "6229:6:9"
                              }
                            ],
                            "id": 3172,
                            "name": "MemberAccess",
                            "src": "6229:28:9"
                          }
                        ],
                        "id": 3173,
                        "name": "BinaryOperation",
                        "src": "6213:44:9"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2964,
                                          "type": "mapping(bytes32 => uint256)",
                                          "value": "valueRepaid"
                                        },
                                        "id": 3174,
                                        "name": "Identifier",
                                        "src": "6273:11:9"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3149,
                                          "type": "bytes32",
                                          "value": "agreementId"
                                        },
                                        "id": 3175,
                                        "name": "Identifier",
                                        "src": "6285:11:9"
                                      }
                                    ],
                                    "id": 3176,
                                    "name": "IndexAccess",
                                    "src": "6273:24:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint256",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "add",
                                          "referencedDeclaration": 5434,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2964,
                                                  "type": "mapping(bytes32 => uint256)",
                                                  "value": "valueRepaid"
                                                },
                                                "id": 3177,
                                                "name": "Identifier",
                                                "src": "6300:11:9"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 3149,
                                                  "type": "bytes32",
                                                  "value": "agreementId"
                                                },
                                                "id": 3178,
                                                "name": "Identifier",
                                                "src": "6312:11:9"
                                              }
                                            ],
                                            "id": 3179,
                                            "name": "IndexAccess",
                                            "src": "6300:24:9"
                                          }
                                        ],
                                        "id": 3180,
                                        "name": "MemberAccess",
                                        "src": "6300:28:9"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3155,
                                          "type": "uint256",
                                          "value": "unitsOfRepayment"
                                        },
                                        "id": 3181,
                                        "name": "Identifier",
                                        "src": "6329:16:9"
                                      }
                                    ],
                                    "id": 3182,
                                    "name": "FunctionCall",
                                    "src": "6300:46:9"
                                  }
                                ],
                                "id": 3183,
                                "name": "Assignment",
                                "src": "6273:73:9"
                              }
                            ],
                            "id": 3184,
                            "name": "ExpressionStatement",
                            "src": "6273:73:9"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 3163
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 3185,
                                "name": "Literal",
                                "src": "6367:4:9"
                              }
                            ],
                            "id": 3186,
                            "name": "Return",
                            "src": "6360:11:9"
                          }
                        ],
                        "id": 3187,
                        "name": "Block",
                        "src": "6259:123:9"
                      }
                    ],
                    "id": 3188,
                    "name": "IfStatement",
                    "src": "6209:173:9"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3163
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "66616c7365",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "false"
                        },
                        "id": 3189,
                        "name": "Literal",
                        "src": "6399:5:9"
                      }
                    ],
                    "id": 3190,
                    "name": "Return",
                    "src": "6392:12:9"
                  }
                ],
                "id": 3191,
                "name": "Block",
                "src": "6112:299:9"
              }
            ],
            "id": 3192,
            "name": "FunctionDefinition",
            "src": "5864:547:9"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "name": "getExpectedRepaymentValue",
              "payable": false,
              "scope": 3570,
              "stateMutability": "view",
              "superFunction": 2098,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3250,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3193,
                        "name": "ElementaryTypeName",
                        "src": "7064:7:9"
                      }
                    ],
                    "id": 3194,
                    "name": "VariableDeclaration",
                    "src": "7064:19:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 3250,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 3195,
                        "name": "ElementaryTypeName",
                        "src": "7093:7:9"
                      }
                    ],
                    "id": 3196,
                    "name": "VariableDeclaration",
                    "src": "7093:17:9"
                  }
                ],
                "id": 3197,
                "name": "ParameterList",
                "src": "7054:62:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_expectedRepaymentValue",
                      "scope": 3250,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3201,
                        "name": "ElementaryTypeName",
                        "src": "7208:4:9"
                      }
                    ],
                    "id": 3202,
                    "name": "VariableDeclaration",
                    "src": "7208:28:9"
                  }
                ],
                "id": 3203,
                "name": "ParameterList",
                "src": "7207:30:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 3014,
                      "type": "modifier (bytes32)",
                      "value": "onlyMappedToThisContract"
                    },
                    "id": 3198,
                    "name": "Identifier",
                    "src": "7153:24:9"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 3194,
                      "type": "bytes32",
                      "value": "agreementId"
                    },
                    "id": 3199,
                    "name": "Identifier",
                    "src": "7178:11:9"
                  }
                ],
                "id": 3200,
                "name": "ModifierInvocation",
                "src": "7153:37:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3205
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "params",
                          "scope": 3250,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "SimpleInterestParams",
                              "referencedDeclaration": 2935,
                              "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                            },
                            "id": 3204,
                            "name": "UserDefinedTypeName",
                            "src": "7252:20:9"
                          }
                        ],
                        "id": 3205,
                        "name": "VariableDeclaration",
                        "src": "7252:34:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3517,
                              "type": "function (bytes32) returns (struct SimpleInterestTermsContract.SimpleInterestParams memory)",
                              "value": "unpackParamsForAgreementID"
                            },
                            "id": 3206,
                            "name": "Identifier",
                            "src": "7289:26:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3194,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3207,
                            "name": "Identifier",
                            "src": "7316:11:9"
                          }
                        ],
                        "id": 3208,
                        "name": "FunctionCall",
                        "src": "7289:39:9"
                      }
                    ],
                    "id": 3209,
                    "name": "VariableDeclarationStatement",
                    "src": "7252:76:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3211
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalPlusInterest",
                          "scope": 3250,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3210,
                            "name": "ElementaryTypeName",
                            "src": "7338:4:9"
                          }
                        ],
                        "id": 3211,
                        "name": "VariableDeclaration",
                        "src": "7338:26:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_SimpleInterestParams_$2935_memory_ptr",
                                  "typeString": "struct SimpleInterestTermsContract.SimpleInterestParams memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3409,
                              "type": "function (struct SimpleInterestTermsContract.SimpleInterestParams memory) returns (uint256)",
                              "value": "calculateTotalPrincipalPlusInterest"
                            },
                            "id": 3212,
                            "name": "Identifier",
                            "src": "7367:35:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3205,
                              "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                              "value": "params"
                            },
                            "id": 3213,
                            "name": "Identifier",
                            "src": "7403:6:9"
                          }
                        ],
                        "id": 3214,
                        "name": "FunctionCall",
                        "src": "7367:43:9"
                      }
                    ],
                    "id": 3215,
                    "name": "VariableDeclarationStatement",
                    "src": "7338:72:9"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3196,
                              "type": "uint256",
                              "value": "timestamp"
                            },
                            "id": 3216,
                            "name": "Identifier",
                            "src": "7425:9:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termStartUnixTimestamp",
                              "referencedDeclaration": 2928,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3205,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3217,
                                "name": "Identifier",
                                "src": "7438:6:9"
                              }
                            ],
                            "id": 3218,
                            "name": "MemberAccess",
                            "src": "7438:29:9"
                          }
                        ],
                        "id": 3219,
                        "name": "BinaryOperation",
                        "src": "7425:42:9"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 3203
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 3220,
                                "name": "Literal",
                                "src": "7620:1:9"
                              }
                            ],
                            "id": 3221,
                            "name": "Return",
                            "src": "7613:8:9"
                          }
                        ],
                        "id": 3222,
                        "name": "Block",
                        "src": "7469:163:9"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3196,
                                  "type": "uint256",
                                  "value": "timestamp"
                                },
                                "id": 3223,
                                "name": "Identifier",
                                "src": "7642:9:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "termEndUnixTimestamp",
                                  "referencedDeclaration": 2930,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3205,
                                      "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                      "value": "params"
                                    },
                                    "id": 3224,
                                    "name": "Identifier",
                                    "src": "7655:6:9"
                                  }
                                ],
                                "id": 3225,
                                "name": "MemberAccess",
                                "src": "7655:27:9"
                              }
                            ],
                            "id": 3226,
                            "name": "BinaryOperation",
                            "src": "7642:40:9"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "functionReturnParameters": 3203
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3211,
                                      "type": "uint256",
                                      "value": "principalPlusInterest"
                                    },
                                    "id": 3227,
                                    "name": "Identifier",
                                    "src": "7852:21:9"
                                  }
                                ],
                                "id": 3228,
                                "name": "Return",
                                "src": "7845:28:9"
                              }
                            ],
                            "id": 3229,
                            "name": "Block",
                            "src": "7684:200:9"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "assignments": [
                                    3231
                                  ]
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "constant": false,
                                      "name": "numUnits",
                                      "scope": 3250,
                                      "stateVariable": false,
                                      "storageLocation": "default",
                                      "type": "uint256",
                                      "value": null,
                                      "visibility": "internal"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "name": "uint",
                                          "type": "uint256"
                                        },
                                        "id": 3230,
                                        "name": "ElementaryTypeName",
                                        "src": "7904:4:9"
                                      }
                                    ],
                                    "id": 3231,
                                    "name": "VariableDeclaration",
                                    "src": "7904:13:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint256",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            },
                                            {
                                              "typeIdentifier": "t_struct$_SimpleInterestParams_$2935_memory_ptr",
                                              "typeString": "struct SimpleInterestTermsContract.SimpleInterestParams memory"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3378,
                                          "type": "function (uint256,struct SimpleInterestTermsContract.SimpleInterestParams memory) returns (uint256)",
                                          "value": "numAmortizationUnitsForTimestamp"
                                        },
                                        "id": 3232,
                                        "name": "Identifier",
                                        "src": "7920:32:9"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3196,
                                          "type": "uint256",
                                          "value": "timestamp"
                                        },
                                        "id": 3233,
                                        "name": "Identifier",
                                        "src": "7953:9:9"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3205,
                                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                          "value": "params"
                                        },
                                        "id": 3234,
                                        "name": "Identifier",
                                        "src": "7964:6:9"
                                      }
                                    ],
                                    "id": 3235,
                                    "name": "FunctionCall",
                                    "src": "7920:51:9"
                                  }
                                ],
                                "id": 3236,
                                "name": "VariableDeclarationStatement",
                                "src": "7904:67:9"
                              },
                              {
                                "attributes": {
                                  "functionReturnParameters": 3203
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint256",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "div",
                                          "referencedDeclaration": 5390,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "isStructConstructorCall": false,
                                              "lValueRequested": false,
                                              "names": [
                                                null
                                              ],
                                              "type": "uint256",
                                              "type_conversion": false
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  ],
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "mul",
                                                  "referencedDeclaration": 5372,
                                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 3211,
                                                      "type": "uint256",
                                                      "value": "principalPlusInterest"
                                                    },
                                                    "id": 3237,
                                                    "name": "Identifier",
                                                    "src": "7992:21:9"
                                                  }
                                                ],
                                                "id": 3238,
                                                "name": "MemberAccess",
                                                "src": "7992:25:9"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 3231,
                                                  "type": "uint256",
                                                  "value": "numUnits"
                                                },
                                                "id": 3239,
                                                "name": "Identifier",
                                                "src": "8018:8:9"
                                              }
                                            ],
                                            "id": 3240,
                                            "name": "FunctionCall",
                                            "src": "7992:35:9"
                                          }
                                        ],
                                        "id": 3241,
                                        "name": "MemberAccess",
                                        "src": "7992:39:9"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "termLengthInAmortizationUnits",
                                          "referencedDeclaration": 2934,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 3205,
                                              "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                              "value": "params"
                                            },
                                            "id": 3242,
                                            "name": "Identifier",
                                            "src": "8032:6:9"
                                          }
                                        ],
                                        "id": 3243,
                                        "name": "MemberAccess",
                                        "src": "8032:36:9"
                                      }
                                    ],
                                    "id": 3244,
                                    "name": "FunctionCall",
                                    "src": "7992:77:9"
                                  }
                                ],
                                "id": 3245,
                                "name": "Return",
                                "src": "7985:84:9"
                              }
                            ],
                            "id": 3246,
                            "name": "Block",
                            "src": "7890:190:9"
                          }
                        ],
                        "id": 3247,
                        "name": "IfStatement",
                        "src": "7638:442:9"
                      }
                    ],
                    "id": 3248,
                    "name": "IfStatement",
                    "src": "7421:659:9"
                  }
                ],
                "id": 3249,
                "name": "Block",
                "src": "7242:844:9"
              }
            ],
            "id": 3250,
            "name": "FunctionDefinition",
            "src": "7020:1066:9"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getValueRepaidToDate",
              "payable": false,
              "scope": 3570,
              "stateMutability": "view",
              "superFunction": 2105,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3262,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3251,
                        "name": "ElementaryTypeName",
                        "src": "8397:7:9"
                      }
                    ],
                    "id": 3252,
                    "name": "VariableDeclaration",
                    "src": "8397:19:9"
                  }
                ],
                "id": 3253,
                "name": "ParameterList",
                "src": "8396:21:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_valueRepaid",
                      "scope": 3262,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3254,
                        "name": "ElementaryTypeName",
                        "src": "8463:4:9"
                      }
                    ],
                    "id": 3255,
                    "name": "VariableDeclaration",
                    "src": "8463:17:9"
                  }
                ],
                "id": 3256,
                "name": "ParameterList",
                "src": "8462:19:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3256
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2964,
                              "type": "mapping(bytes32 => uint256)",
                              "value": "valueRepaid"
                            },
                            "id": 3257,
                            "name": "Identifier",
                            "src": "8503:11:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3252,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3258,
                            "name": "Identifier",
                            "src": "8515:11:9"
                          }
                        ],
                        "id": 3259,
                        "name": "IndexAccess",
                        "src": "8503:24:9"
                      }
                    ],
                    "id": 3260,
                    "name": "Return",
                    "src": "8496:31:9"
                  }
                ],
                "id": 3261,
                "name": "Block",
                "src": "8486:48:9"
              }
            ],
            "id": 3262,
            "name": "FunctionDefinition",
            "src": "8367:167:9"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "unpackParametersFromBytes",
              "payable": false,
              "scope": 3570,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "parameters",
                      "scope": 3330,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3263,
                        "name": "ElementaryTypeName",
                        "src": "8575:7:9"
                      }
                    ],
                    "id": 3264,
                    "name": "VariableDeclaration",
                    "src": "8575:18:9"
                  }
                ],
                "id": 3265,
                "name": "ParameterList",
                "src": "8574:20:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_principalTokenIndex",
                      "scope": 3330,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3266,
                        "name": "ElementaryTypeName",
                        "src": "8653:4:9"
                      }
                    ],
                    "id": 3267,
                    "name": "VariableDeclaration",
                    "src": "8653:25:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_principalAmount",
                      "scope": 3330,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3268,
                        "name": "ElementaryTypeName",
                        "src": "8692:4:9"
                      }
                    ],
                    "id": 3269,
                    "name": "VariableDeclaration",
                    "src": "8692:21:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_interestRate",
                      "scope": 3330,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3270,
                        "name": "ElementaryTypeName",
                        "src": "8727:4:9"
                      }
                    ],
                    "id": 3271,
                    "name": "VariableDeclaration",
                    "src": "8727:18:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amortizationUnitType",
                      "scope": 3330,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3272,
                        "name": "ElementaryTypeName",
                        "src": "8759:4:9"
                      }
                    ],
                    "id": 3273,
                    "name": "VariableDeclaration",
                    "src": "8759:26:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_termLengthInAmortizationUnits",
                      "scope": 3330,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3274,
                        "name": "ElementaryTypeName",
                        "src": "8799:4:9"
                      }
                    ],
                    "id": 3275,
                    "name": "VariableDeclaration",
                    "src": "8799:35:9"
                  }
                ],
                "id": 3276,
                "name": "ParameterList",
                "src": "8639:205:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3278
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalTokenIndexShifted",
                          "scope": 3330,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 3277,
                            "name": "ElementaryTypeName",
                            "src": "8973:7:9"
                          }
                        ],
                        "id": 3278,
                        "name": "VariableDeclaration",
                        "src": "8973:34:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3264,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 3279,
                            "name": "Identifier",
                            "src": "9022:10:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307866663030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 115339776388732929035197660848497720713218148788040405586178452820382218977280",
                              "value": "0xff00000000000000000000000000000000000000000000000000000000000000"
                            },
                            "id": 3280,
                            "name": "Literal",
                            "src": "9035:66:9"
                          }
                        ],
                        "id": 3281,
                        "name": "BinaryOperation",
                        "src": "9022:79:9"
                      }
                    ],
                    "id": 3282,
                    "name": "VariableDeclarationStatement",
                    "src": "8973:128:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3284
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalAmountShifted",
                          "scope": 3330,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 3283,
                            "name": "ElementaryTypeName",
                            "src": "9193:7:9"
                          }
                        ],
                        "id": 3284,
                        "name": "VariableDeclaration",
                        "src": "9193:30:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3264,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 3285,
                            "name": "Identifier",
                            "src": "9238:10:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830306666666666666666666666666666666666666666666666663030303030303030303030303030303030303030303030303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 452312848583266388373324160184478149281012038075925309401333206985379676160",
                              "value": "0x00ffffffffffffffffffffffff00000000000000000000000000000000000000"
                            },
                            "id": 3286,
                            "name": "Literal",
                            "src": "9251:66:9"
                          }
                        ],
                        "id": 3287,
                        "name": "BinaryOperation",
                        "src": "9238:79:9"
                      }
                    ],
                    "id": 3288,
                    "name": "VariableDeclarationStatement",
                    "src": "9193:124:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3290
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "interestRateShifted",
                          "scope": 3330,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 3289,
                            "name": "ElementaryTypeName",
                            "src": "9405:7:9"
                          }
                        ],
                        "id": 3290,
                        "name": "VariableDeclaration",
                        "src": "9405:27:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3264,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 3291,
                            "name": "Identifier",
                            "src": "9447:10:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830303030303030303030303030303030303030303030303030306666666666663030303030303030303030303030303030303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 5708990430541472603294680414423373113762775040",
                              "value": "0x00000000000000000000000000ffffff00000000000000000000000000000000"
                            },
                            "id": 3292,
                            "name": "Literal",
                            "src": "9460:66:9"
                          }
                        ],
                        "id": 3293,
                        "name": "BinaryOperation",
                        "src": "9447:79:9"
                      }
                    ],
                    "id": 3294,
                    "name": "VariableDeclarationStatement",
                    "src": "9405:121:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3296
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitTypeShifted",
                          "scope": 3330,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 3295,
                            "name": "ElementaryTypeName",
                            "src": "9621:7:9"
                          }
                        ],
                        "id": 3296,
                        "name": "VariableDeclaration",
                        "src": "9621:35:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3264,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 3297,
                            "name": "Identifier",
                            "src": "9671:10:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830303030303030303030303030303030303030303030303030303030303030306630303030303030303030303030303030303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 319014718988379809496913694467282698240",
                              "value": "0x00000000000000000000000000000000f0000000000000000000000000000000"
                            },
                            "id": 3298,
                            "name": "Literal",
                            "src": "9684:66:9"
                          }
                        ],
                        "id": 3299,
                        "name": "BinaryOperation",
                        "src": "9671:79:9"
                      }
                    ],
                    "id": 3300,
                    "name": "VariableDeclarationStatement",
                    "src": "9621:129:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3302
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termLengthInAmortizationUnitsShifted",
                          "scope": 3330,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 3301,
                            "name": "ElementaryTypeName",
                            "src": "9878:7:9"
                          }
                        ],
                        "id": 3302,
                        "name": "VariableDeclaration",
                        "src": "9878:44:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3264,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 3303,
                            "name": "Identifier",
                            "src": "9937:10:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830303030303030303030303030303030303030303030303030303030303030303066666666303030303030303030303030303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 21267323414004995539734129808464936960",
                              "value": "0x000000000000000000000000000000000ffff000000000000000000000000000"
                            },
                            "id": 3304,
                            "name": "Literal",
                            "src": "9950:66:9"
                          }
                        ],
                        "id": 3305,
                        "name": "BinaryOperation",
                        "src": "9937:79:9"
                      }
                    ],
                    "id": 3306,
                    "name": "VariableDeclarationStatement",
                    "src": "9878:138:9"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3276
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "tuple(uint256,uint256,uint256,uint256,uint256)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    {
                                      "typeIdentifier": "t_rational_248_by_1",
                                      "typeString": "int_const 248"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3348,
                                  "type": "function (bytes32,uint256) pure returns (uint256)",
                                  "value": "bitShiftRight"
                                },
                                "id": 3307,
                                "name": "Identifier",
                                "src": "11027:13:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3278,
                                  "type": "bytes32",
                                  "value": "principalTokenIndexShifted"
                                },
                                "id": 3308,
                                "name": "Identifier",
                                "src": "11041:26:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "323438",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 248",
                                  "value": "248"
                                },
                                "id": 3309,
                                "name": "Literal",
                                "src": "11069:3:9"
                              }
                            ],
                            "id": 3310,
                            "name": "FunctionCall",
                            "src": "11027:46:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    {
                                      "typeIdentifier": "t_rational_152_by_1",
                                      "typeString": "int_const 152"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3348,
                                  "type": "function (bytes32,uint256) pure returns (uint256)",
                                  "value": "bitShiftRight"
                                },
                                "id": 3311,
                                "name": "Identifier",
                                "src": "11087:13:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3284,
                                  "type": "bytes32",
                                  "value": "principalAmountShifted"
                                },
                                "id": 3312,
                                "name": "Identifier",
                                "src": "11101:22:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "313532",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 152",
                                  "value": "152"
                                },
                                "id": 3313,
                                "name": "Literal",
                                "src": "11125:3:9"
                              }
                            ],
                            "id": 3314,
                            "name": "FunctionCall",
                            "src": "11087:42:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    {
                                      "typeIdentifier": "t_rational_128_by_1",
                                      "typeString": "int_const 128"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3348,
                                  "type": "function (bytes32,uint256) pure returns (uint256)",
                                  "value": "bitShiftRight"
                                },
                                "id": 3315,
                                "name": "Identifier",
                                "src": "11143:13:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3290,
                                  "type": "bytes32",
                                  "value": "interestRateShifted"
                                },
                                "id": 3316,
                                "name": "Identifier",
                                "src": "11157:19:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "313238",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 128",
                                  "value": "128"
                                },
                                "id": 3317,
                                "name": "Literal",
                                "src": "11178:3:9"
                              }
                            ],
                            "id": 3318,
                            "name": "FunctionCall",
                            "src": "11143:39:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    {
                                      "typeIdentifier": "t_rational_124_by_1",
                                      "typeString": "int_const 124"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3348,
                                  "type": "function (bytes32,uint256) pure returns (uint256)",
                                  "value": "bitShiftRight"
                                },
                                "id": 3319,
                                "name": "Identifier",
                                "src": "11196:13:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3296,
                                  "type": "bytes32",
                                  "value": "amortizationUnitTypeShifted"
                                },
                                "id": 3320,
                                "name": "Identifier",
                                "src": "11210:27:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "313234",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 124",
                                  "value": "124"
                                },
                                "id": 3321,
                                "name": "Literal",
                                "src": "11239:3:9"
                              }
                            ],
                            "id": 3322,
                            "name": "FunctionCall",
                            "src": "11196:47:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    {
                                      "typeIdentifier": "t_rational_108_by_1",
                                      "typeString": "int_const 108"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3348,
                                  "type": "function (bytes32,uint256) pure returns (uint256)",
                                  "value": "bitShiftRight"
                                },
                                "id": 3323,
                                "name": "Identifier",
                                "src": "11257:13:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3302,
                                  "type": "bytes32",
                                  "value": "termLengthInAmortizationUnitsShifted"
                                },
                                "id": 3324,
                                "name": "Identifier",
                                "src": "11271:36:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "313038",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 108",
                                  "value": "108"
                                },
                                "id": 3325,
                                "name": "Literal",
                                "src": "11309:3:9"
                              }
                            ],
                            "id": 3326,
                            "name": "FunctionCall",
                            "src": "11257:56:9"
                          }
                        ],
                        "id": 3327,
                        "name": "TupleExpression",
                        "src": "11013:310:9"
                      }
                    ],
                    "id": 3328,
                    "name": "Return",
                    "src": "11006:317:9"
                  }
                ],
                "id": 3329,
                "name": "Block",
                "src": "8849:2481:9"
              }
            ],
            "id": 3330,
            "name": "FunctionDefinition",
            "src": "8540:2790:9"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "bitShiftRight",
              "payable": false,
              "scope": 3570,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 3348,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3331,
                        "name": "ElementaryTypeName",
                        "src": "11359:7:9"
                      }
                    ],
                    "id": 3332,
                    "name": "VariableDeclaration",
                    "src": "11359:13:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "scope": 3348,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3333,
                        "name": "ElementaryTypeName",
                        "src": "11374:4:9"
                      }
                    ],
                    "id": 3334,
                    "name": "VariableDeclaration",
                    "src": "11374:11:9"
                  }
                ],
                "id": 3335,
                "name": "ParameterList",
                "src": "11358:28:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 3348,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3336,
                        "name": "ElementaryTypeName",
                        "src": "11434:4:9"
                      }
                    ],
                    "id": 3337,
                    "name": "VariableDeclaration",
                    "src": "11434:4:9"
                  }
                ],
                "id": 3338,
                "name": "ParameterList",
                "src": "11433:6:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3338
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "/",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint"
                                },
                                "id": 3339,
                                "name": "ElementaryTypeNameExpression",
                                "src": "11461:4:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3332,
                                  "type": "bytes32",
                                  "value": "value"
                                },
                                "id": 3340,
                                "name": "Identifier",
                                "src": "11466:5:9"
                              }
                            ],
                            "id": 3341,
                            "name": "FunctionCall",
                            "src": "11461:11:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "**",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 3342,
                                "name": "Literal",
                                "src": "11475:1:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3334,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 3343,
                                "name": "Identifier",
                                "src": "11480:6:9"
                              }
                            ],
                            "id": 3344,
                            "name": "BinaryOperation",
                            "src": "11475:11:9"
                          }
                        ],
                        "id": 3345,
                        "name": "BinaryOperation",
                        "src": "11461:25:9"
                      }
                    ],
                    "id": 3346,
                    "name": "Return",
                    "src": "11454:32:9"
                  }
                ],
                "id": 3347,
                "name": "Block",
                "src": "11444:49:9"
              }
            ],
            "id": 3348,
            "name": "FunctionDefinition",
            "src": "11336:157:9"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "numAmortizationUnitsForTimestamp",
              "payable": false,
              "scope": 3570,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 3378,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3349,
                        "name": "ElementaryTypeName",
                        "src": "11550:4:9"
                      }
                    ],
                    "id": 3350,
                    "name": "VariableDeclaration",
                    "src": "11550:14:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "params",
                      "scope": 3378,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "SimpleInterestParams",
                          "referencedDeclaration": 2935,
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                        },
                        "id": 3351,
                        "name": "UserDefinedTypeName",
                        "src": "11574:20:9"
                      }
                    ],
                    "id": 3352,
                    "name": "VariableDeclaration",
                    "src": "11574:27:9"
                  }
                ],
                "id": 3353,
                "name": "ParameterList",
                "src": "11540:67:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "units",
                      "scope": 3378,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3354,
                        "name": "ElementaryTypeName",
                        "src": "11642:4:9"
                      }
                    ],
                    "id": 3355,
                    "name": "VariableDeclaration",
                    "src": "11642:10:9"
                  }
                ],
                "id": 3356,
                "name": "ParameterList",
                "src": "11641:12:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3358
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "delta",
                          "scope": 3378,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3357,
                            "name": "ElementaryTypeName",
                            "src": "11668:4:9"
                          }
                        ],
                        "id": 3358,
                        "name": "VariableDeclaration",
                        "src": "11668:10:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sub",
                              "referencedDeclaration": 5410,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3350,
                                  "type": "uint256",
                                  "value": "timestamp"
                                },
                                "id": 3359,
                                "name": "Identifier",
                                "src": "11681:9:9"
                              }
                            ],
                            "id": 3360,
                            "name": "MemberAccess",
                            "src": "11681:13:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termStartUnixTimestamp",
                              "referencedDeclaration": 2928,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3352,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3361,
                                "name": "Identifier",
                                "src": "11695:6:9"
                              }
                            ],
                            "id": 3362,
                            "name": "MemberAccess",
                            "src": "11695:29:9"
                          }
                        ],
                        "id": 3363,
                        "name": "FunctionCall",
                        "src": "11681:44:9"
                      }
                    ],
                    "id": 3364,
                    "name": "VariableDeclarationStatement",
                    "src": "11668:57:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3366
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitLengthInSeconds",
                          "scope": 3378,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3365,
                            "name": "ElementaryTypeName",
                            "src": "11735:4:9"
                          }
                        ],
                        "id": 3366,
                        "name": "VariableDeclaration",
                        "src": "11735:36:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_enum$_AmortizationUnitType_$2917",
                                  "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3569,
                              "type": "function (enum SimpleInterestTermsContract.AmortizationUnitType) pure returns (uint256)",
                              "value": "getAmortizationUnitLengthInSeconds"
                            },
                            "id": 3367,
                            "name": "Identifier",
                            "src": "11774:34:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "amortizationUnitType",
                              "referencedDeclaration": 2932,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3352,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3368,
                                "name": "Identifier",
                                "src": "11809:6:9"
                              }
                            ],
                            "id": 3369,
                            "name": "MemberAccess",
                            "src": "11809:27:9"
                          }
                        ],
                        "id": 3370,
                        "name": "FunctionCall",
                        "src": "11774:63:9"
                      }
                    ],
                    "id": 3371,
                    "name": "VariableDeclarationStatement",
                    "src": "11735:102:9"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3356
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "div",
                              "referencedDeclaration": 5390,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3358,
                                  "type": "uint256",
                                  "value": "delta"
                                },
                                "id": 3372,
                                "name": "Identifier",
                                "src": "11854:5:9"
                              }
                            ],
                            "id": 3373,
                            "name": "MemberAccess",
                            "src": "11854:9:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3366,
                              "type": "uint256",
                              "value": "amortizationUnitLengthInSeconds"
                            },
                            "id": 3374,
                            "name": "Identifier",
                            "src": "11864:31:9"
                          }
                        ],
                        "id": 3375,
                        "name": "FunctionCall",
                        "src": "11854:42:9"
                      }
                    ],
                    "id": 3376,
                    "name": "Return",
                    "src": "11847:49:9"
                  }
                ],
                "id": 3377,
                "name": "Block",
                "src": "11658:245:9"
              }
            ],
            "id": 3378,
            "name": "FunctionDefinition",
            "src": "11499:404:9"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "calculateTotalPrincipalPlusInterest",
              "payable": false,
              "scope": 3570,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "params",
                      "scope": 3409,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "SimpleInterestParams",
                          "referencedDeclaration": 2935,
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                        },
                        "id": 3379,
                        "name": "UserDefinedTypeName",
                        "src": "12338:20:9"
                      }
                    ],
                    "id": 3380,
                    "name": "VariableDeclaration",
                    "src": "12338:27:9"
                  }
                ],
                "id": 3381,
                "name": "ParameterList",
                "src": "12328:43:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_principalPlusInterest",
                      "scope": 3409,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3382,
                        "name": "ElementaryTypeName",
                        "src": "12406:4:9"
                      }
                    ],
                    "id": 3383,
                    "name": "VariableDeclaration",
                    "src": "12406:27:9"
                  }
                ],
                "id": 3384,
                "name": "ParameterList",
                "src": "12405:29:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3386
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "interestPayment",
                          "scope": 3409,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3385,
                            "name": "ElementaryTypeName",
                            "src": "12449:4:9"
                          }
                        ],
                        "id": 3386,
                        "name": "VariableDeclaration",
                        "src": "12449:20:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "mul",
                              "referencedDeclaration": 5372,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "principalAmount",
                                  "referencedDeclaration": 2924,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3380,
                                      "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                      "value": "params"
                                    },
                                    "id": 3387,
                                    "name": "Identifier",
                                    "src": "12472:6:9"
                                  }
                                ],
                                "id": 3388,
                                "name": "MemberAccess",
                                "src": "12472:22:9"
                              }
                            ],
                            "id": 3389,
                            "name": "MemberAccess",
                            "src": "12472:26:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "interestRate",
                              "referencedDeclaration": 2926,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3380,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3390,
                                "name": "Identifier",
                                "src": "12499:6:9"
                              }
                            ],
                            "id": 3391,
                            "name": "MemberAccess",
                            "src": "12499:19:9"
                          }
                        ],
                        "id": 3392,
                        "name": "FunctionCall",
                        "src": "12472:47:9"
                      }
                    ],
                    "id": 3393,
                    "name": "VariableDeclarationStatement",
                    "src": "12449:70:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3395
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "totalInterest",
                          "scope": 3409,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3394,
                            "name": "ElementaryTypeName",
                            "src": "12529:4:9"
                          }
                        ],
                        "id": 3395,
                        "name": "VariableDeclaration",
                        "src": "12529:18:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "mul",
                              "referencedDeclaration": 5372,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3386,
                                  "type": "uint256",
                                  "value": "interestPayment"
                                },
                                "id": 3396,
                                "name": "Identifier",
                                "src": "12550:15:9"
                              }
                            ],
                            "id": 3397,
                            "name": "MemberAccess",
                            "src": "12550:19:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termLengthInAmortizationUnits",
                              "referencedDeclaration": 2934,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3380,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3398,
                                "name": "Identifier",
                                "src": "12570:6:9"
                              }
                            ],
                            "id": 3399,
                            "name": "MemberAccess",
                            "src": "12570:36:9"
                          }
                        ],
                        "id": 3400,
                        "name": "FunctionCall",
                        "src": "12550:57:9"
                      }
                    ],
                    "id": 3401,
                    "name": "VariableDeclarationStatement",
                    "src": "12529:78:9"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3384
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "add",
                              "referencedDeclaration": 5434,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "principalAmount",
                                  "referencedDeclaration": 2924,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3380,
                                      "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                      "value": "params"
                                    },
                                    "id": 3402,
                                    "name": "Identifier",
                                    "src": "12624:6:9"
                                  }
                                ],
                                "id": 3403,
                                "name": "MemberAccess",
                                "src": "12624:22:9"
                              }
                            ],
                            "id": 3404,
                            "name": "MemberAccess",
                            "src": "12624:26:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3395,
                              "type": "uint256",
                              "value": "totalInterest"
                            },
                            "id": 3405,
                            "name": "Identifier",
                            "src": "12651:13:9"
                          }
                        ],
                        "id": 3406,
                        "name": "FunctionCall",
                        "src": "12624:41:9"
                      }
                    ],
                    "id": 3407,
                    "name": "Return",
                    "src": "12617:48:9"
                  }
                ],
                "id": 3408,
                "name": "Block",
                "src": "12439:233:9"
              }
            ],
            "id": 3409,
            "name": "FunctionDefinition",
            "src": "12284:388:9"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "unpackParamsForAgreementID",
              "payable": false,
              "scope": 3570,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3517,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3410,
                        "name": "ElementaryTypeName",
                        "src": "12723:7:9"
                      }
                    ],
                    "id": 3411,
                    "name": "VariableDeclaration",
                    "src": "12723:19:9"
                  }
                ],
                "id": 3412,
                "name": "ParameterList",
                "src": "12713:35:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "params",
                      "scope": 3517,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "SimpleInterestParams",
                          "referencedDeclaration": 2935,
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                        },
                        "id": 3413,
                        "name": "UserDefinedTypeName",
                        "src": "12783:20:9"
                      }
                    ],
                    "id": 3414,
                    "name": "VariableDeclaration",
                    "src": "12783:27:9"
                  }
                ],
                "id": 3415,
                "name": "ParameterList",
                "src": "12782:29:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3417
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "parameters",
                          "scope": 3517,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 3416,
                            "name": "ElementaryTypeName",
                            "src": "12826:7:9"
                          }
                        ],
                        "id": 3417,
                        "name": "VariableDeclaration",
                        "src": "12826:18:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getTermsContractParameters",
                              "referencedDeclaration": 1568,
                              "type": "function (bytes32) view external returns (bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2966,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 3418,
                                "name": "Identifier",
                                "src": "12847:12:9"
                              }
                            ],
                            "id": 3419,
                            "name": "MemberAccess",
                            "src": "12847:39:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3411,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3420,
                            "name": "Identifier",
                            "src": "12887:11:9"
                          }
                        ],
                        "id": 3421,
                        "name": "FunctionCall",
                        "src": "12847:52:9"
                      }
                    ],
                    "id": 3422,
                    "name": "VariableDeclarationStatement",
                    "src": "12826:73:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalTokenIndex",
                          "scope": 3517,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3423,
                            "name": "ElementaryTypeName",
                            "src": "12990:4:9"
                          }
                        ],
                        "id": 3424,
                        "name": "VariableDeclaration",
                        "src": "12990:24:9"
                      }
                    ],
                    "id": 3425,
                    "name": "VariableDeclarationStatement",
                    "src": "12990:24:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalAmount",
                          "scope": 3517,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3426,
                            "name": "ElementaryTypeName",
                            "src": "13097:4:9"
                          }
                        ],
                        "id": 3427,
                        "name": "VariableDeclaration",
                        "src": "13097:20:9"
                      }
                    ],
                    "id": 3428,
                    "name": "VariableDeclarationStatement",
                    "src": "13097:20:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "interestRate",
                          "scope": 3517,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3429,
                            "name": "ElementaryTypeName",
                            "src": "13187:4:9"
                          }
                        ],
                        "id": 3430,
                        "name": "VariableDeclaration",
                        "src": "13187:17:9"
                      }
                    ],
                    "id": 3431,
                    "name": "VariableDeclarationStatement",
                    "src": "13187:17:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "rawAmortizationUnitType",
                          "scope": 3517,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3432,
                            "name": "ElementaryTypeName",
                            "src": "13305:4:9"
                          }
                        ],
                        "id": 3433,
                        "name": "VariableDeclaration",
                        "src": "13305:28:9"
                      }
                    ],
                    "id": 3434,
                    "name": "VariableDeclarationStatement",
                    "src": "13305:28:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termLengthInAmortizationUnits",
                          "scope": 3517,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3435,
                            "name": "ElementaryTypeName",
                            "src": "13440:4:9"
                          }
                        ],
                        "id": 3436,
                        "name": "VariableDeclaration",
                        "src": "13440:34:9"
                      }
                    ],
                    "id": 3437,
                    "name": "VariableDeclarationStatement",
                    "src": "13440:34:9"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "tuple(uint256,uint256,uint256,uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3424,
                                  "type": "uint256",
                                  "value": "principalTokenIndex"
                                },
                                "id": 3438,
                                "name": "Identifier",
                                "src": "13486:19:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3427,
                                  "type": "uint256",
                                  "value": "principalAmount"
                                },
                                "id": 3439,
                                "name": "Identifier",
                                "src": "13507:15:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3430,
                                  "type": "uint256",
                                  "value": "interestRate"
                                },
                                "id": 3440,
                                "name": "Identifier",
                                "src": "13524:12:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3433,
                                  "type": "uint256",
                                  "value": "rawAmortizationUnitType"
                                },
                                "id": 3441,
                                "name": "Identifier",
                                "src": "13538:23:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3436,
                                  "type": "uint256",
                                  "value": "termLengthInAmortizationUnits"
                                },
                                "id": 3442,
                                "name": "Identifier",
                                "src": "13563:29:9"
                              }
                            ],
                            "id": 3443,
                            "name": "TupleExpression",
                            "src": "13485:108:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple(uint256,uint256,uint256,uint256,uint256)",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3330,
                                  "type": "function (bytes32) pure returns (uint256,uint256,uint256,uint256,uint256)",
                                  "value": "unpackParametersFromBytes"
                                },
                                "id": 3444,
                                "name": "Identifier",
                                "src": "13608:25:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3417,
                                  "type": "bytes32",
                                  "value": "parameters"
                                },
                                "id": 3445,
                                "name": "Identifier",
                                "src": "13634:10:9"
                              }
                            ],
                            "id": 3446,
                            "name": "FunctionCall",
                            "src": "13608:37:9"
                          }
                        ],
                        "id": 3447,
                        "name": "Assignment",
                        "src": "13485:160:9"
                      }
                    ],
                    "id": 3448,
                    "name": "ExpressionStatement",
                    "src": "13485:160:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3450
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalTokenAddress",
                          "scope": 3517,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 3449,
                            "name": "ElementaryTypeName",
                            "src": "13656:7:9"
                          }
                        ],
                        "id": 3450,
                        "name": "VariableDeclaration",
                        "src": "13656:29:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getTokenAddressByIndex",
                              "referencedDeclaration": 2211,
                              "type": "function (uint256) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2968,
                                  "type": "contract TokenRegistry",
                                  "value": "tokenRegistry"
                                },
                                "id": 3451,
                                "name": "Identifier",
                                "src": "13700:13:9"
                              }
                            ],
                            "id": 3452,
                            "name": "MemberAccess",
                            "src": "13700:36:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3424,
                              "type": "uint256",
                              "value": "principalTokenIndex"
                            },
                            "id": 3453,
                            "name": "Identifier",
                            "src": "13737:19:9"
                          }
                        ],
                        "id": 3454,
                        "name": "FunctionCall",
                        "src": "13700:57:9"
                      }
                    ],
                    "id": 3455,
                    "name": "VariableDeclarationStatement",
                    "src": "13656:101:9"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3456,
                            "name": "Identifier",
                            "src": "13836:7:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3450,
                                  "type": "address",
                                  "value": "principalTokenAddress"
                                },
                                "id": 3457,
                                "name": "Identifier",
                                "src": "13844:21:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 3458,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "13869:7:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 3459,
                                    "name": "Literal",
                                    "src": "13877:1:9"
                                  }
                                ],
                                "id": 3460,
                                "name": "FunctionCall",
                                "src": "13869:10:9"
                              }
                            ],
                            "id": 3461,
                            "name": "BinaryOperation",
                            "src": "13844:35:9"
                          }
                        ],
                        "id": 3462,
                        "name": "FunctionCall",
                        "src": "13836:44:9"
                      }
                    ],
                    "id": 3463,
                    "name": "ExpressionStatement",
                    "src": "13836:44:9"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3464,
                            "name": "Identifier",
                            "src": "13993:7:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3433,
                                  "type": "uint256",
                                  "value": "rawAmortizationUnitType"
                                },
                                "id": 3465,
                                "name": "Identifier",
                                "src": "14001:23:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_enum$_AmortizationUnitType_$2917",
                                          "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(uint256)",
                                      "value": "uint"
                                    },
                                    "id": 3466,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "14028:4:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "member_name": "YEARS",
                                      "referencedDeclaration": null,
                                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2917,
                                          "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                          "value": "AmortizationUnitType"
                                        },
                                        "id": 3467,
                                        "name": "Identifier",
                                        "src": "14033:20:9"
                                      }
                                    ],
                                    "id": 3468,
                                    "name": "MemberAccess",
                                    "src": "14033:26:9"
                                  }
                                ],
                                "id": 3469,
                                "name": "FunctionCall",
                                "src": "14028:32:9"
                              }
                            ],
                            "id": 3470,
                            "name": "BinaryOperation",
                            "src": "14001:59:9"
                          }
                        ],
                        "id": 3471,
                        "name": "FunctionCall",
                        "src": "13993:68:9"
                      }
                    ],
                    "id": 3472,
                    "name": "ExpressionStatement",
                    "src": "13993:68:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3474
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitType",
                          "scope": 3517,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "AmortizationUnitType",
                              "referencedDeclaration": 2917,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                            },
                            "id": 3473,
                            "name": "UserDefinedTypeName",
                            "src": "14072:20:9"
                          }
                        ],
                        "id": 3474,
                        "name": "VariableDeclaration",
                        "src": "14072:41:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2917,
                              "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                              "value": "AmortizationUnitType"
                            },
                            "id": 3475,
                            "name": "Identifier",
                            "src": "14116:20:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3433,
                              "type": "uint256",
                              "value": "rawAmortizationUnitType"
                            },
                            "id": 3476,
                            "name": "Identifier",
                            "src": "14137:23:9"
                          }
                        ],
                        "id": 3477,
                        "name": "FunctionCall",
                        "src": "14116:45:9"
                      }
                    ],
                    "id": 3478,
                    "name": "VariableDeclarationStatement",
                    "src": "14072:89:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3480
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitLengthInSeconds",
                          "scope": 3517,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3479,
                            "name": "ElementaryTypeName",
                            "src": "14172:4:9"
                          }
                        ],
                        "id": 3480,
                        "name": "VariableDeclaration",
                        "src": "14172:36:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_enum$_AmortizationUnitType_$2917",
                                  "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3569,
                              "type": "function (enum SimpleInterestTermsContract.AmortizationUnitType) pure returns (uint256)",
                              "value": "getAmortizationUnitLengthInSeconds"
                            },
                            "id": 3481,
                            "name": "Identifier",
                            "src": "14223:34:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3474,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                              "value": "amortizationUnitType"
                            },
                            "id": 3482,
                            "name": "Identifier",
                            "src": "14258:20:9"
                          }
                        ],
                        "id": 3483,
                        "name": "FunctionCall",
                        "src": "14223:56:9"
                      }
                    ],
                    "id": 3484,
                    "name": "VariableDeclarationStatement",
                    "src": "14172:107:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3486
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "issuanceBlockTimestamp",
                          "scope": 3517,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3485,
                            "name": "ElementaryTypeName",
                            "src": "14289:4:9"
                          }
                        ],
                        "id": 3486,
                        "name": "VariableDeclaration",
                        "src": "14289:27:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getIssuanceBlockTimestamp",
                              "referencedDeclaration": 1601,
                              "type": "function (bytes32) view external returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2966,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 3487,
                                "name": "Identifier",
                                "src": "14331:12:9"
                              }
                            ],
                            "id": 3488,
                            "name": "MemberAccess",
                            "src": "14331:38:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3411,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3489,
                            "name": "Identifier",
                            "src": "14370:11:9"
                          }
                        ],
                        "id": 3490,
                        "name": "FunctionCall",
                        "src": "14331:51:9"
                      }
                    ],
                    "id": 3491,
                    "name": "VariableDeclarationStatement",
                    "src": "14289:93:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3493
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termLengthInSeconds",
                          "scope": 3517,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3492,
                            "name": "ElementaryTypeName",
                            "src": "14392:4:9"
                          }
                        ],
                        "id": 3493,
                        "name": "VariableDeclaration",
                        "src": "14392:24:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "mul",
                              "referencedDeclaration": 5372,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3436,
                                  "type": "uint256",
                                  "value": "termLengthInAmortizationUnits"
                                },
                                "id": 3494,
                                "name": "Identifier",
                                "src": "14431:29:9"
                              }
                            ],
                            "id": 3495,
                            "name": "MemberAccess",
                            "src": "14431:33:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3480,
                              "type": "uint256",
                              "value": "amortizationUnitLengthInSeconds"
                            },
                            "id": 3496,
                            "name": "Identifier",
                            "src": "14465:31:9"
                          }
                        ],
                        "id": 3497,
                        "name": "FunctionCall",
                        "src": "14431:66:9"
                      }
                    ],
                    "id": 3498,
                    "name": "VariableDeclarationStatement",
                    "src": "14392:105:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3500
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termEndUnixTimestamp",
                          "scope": 3517,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3499,
                            "name": "ElementaryTypeName",
                            "src": "14507:4:9"
                          }
                        ],
                        "id": 3500,
                        "name": "VariableDeclaration",
                        "src": "14507:25:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "add",
                              "referencedDeclaration": 5434,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3493,
                                  "type": "uint256",
                                  "value": "termLengthInSeconds"
                                },
                                "id": 3501,
                                "name": "Identifier",
                                "src": "14547:19:9"
                              }
                            ],
                            "id": 3502,
                            "name": "MemberAccess",
                            "src": "14547:23:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3486,
                              "type": "uint256",
                              "value": "issuanceBlockTimestamp"
                            },
                            "id": 3503,
                            "name": "Identifier",
                            "src": "14571:22:9"
                          }
                        ],
                        "id": 3504,
                        "name": "FunctionCall",
                        "src": "14547:47:9"
                      }
                    ],
                    "id": 3505,
                    "name": "VariableDeclarationStatement",
                    "src": "14507:87:9"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3415
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": true,
                          "lValueRequested": false,
                          "names": [
                            "principalTokenAddress",
                            "principalAmount",
                            "interestRate",
                            "termStartUnixTimestamp",
                            "termEndUnixTimestamp",
                            "amortizationUnitType",
                            "termLengthInAmortizationUnits"
                          ],
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2935,
                              "type": "type(struct SimpleInterestTermsContract.SimpleInterestParams storage pointer)",
                              "value": "SimpleInterestParams"
                            },
                            "id": 3506,
                            "name": "Identifier",
                            "src": "14612:20:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3450,
                              "type": "address",
                              "value": "principalTokenAddress"
                            },
                            "id": 3507,
                            "name": "Identifier",
                            "src": "14670:21:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3427,
                              "type": "uint256",
                              "value": "principalAmount"
                            },
                            "id": 3508,
                            "name": "Identifier",
                            "src": "14722:15:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3430,
                              "type": "uint256",
                              "value": "interestRate"
                            },
                            "id": 3509,
                            "name": "Identifier",
                            "src": "14765:12:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3486,
                              "type": "uint256",
                              "value": "issuanceBlockTimestamp"
                            },
                            "id": 3510,
                            "name": "Identifier",
                            "src": "14815:22:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3500,
                              "type": "uint256",
                              "value": "termEndUnixTimestamp"
                            },
                            "id": 3511,
                            "name": "Identifier",
                            "src": "14873:20:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3474,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                              "value": "amortizationUnitType"
                            },
                            "id": 3512,
                            "name": "Identifier",
                            "src": "14929:20:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3436,
                              "type": "uint256",
                              "value": "termLengthInAmortizationUnits"
                            },
                            "id": 3513,
                            "name": "Identifier",
                            "src": "14994:29:9"
                          }
                        ],
                        "id": 3514,
                        "name": "FunctionCall",
                        "src": "14612:422:9"
                      }
                    ],
                    "id": 3515,
                    "name": "Return",
                    "src": "14605:429:9"
                  }
                ],
                "id": 3516,
                "name": "Block",
                "src": "12816:2225:9"
              }
            ],
            "id": 3517,
            "name": "FunctionDefinition",
            "src": "12678:2363:9"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getAmortizationUnitLengthInSeconds",
              "payable": false,
              "scope": 3570,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amortizationUnitType",
                      "scope": 3569,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "AmortizationUnitType",
                          "referencedDeclaration": 2917,
                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                        },
                        "id": 3518,
                        "name": "UserDefinedTypeName",
                        "src": "15091:20:9"
                      }
                    ],
                    "id": 3519,
                    "name": "VariableDeclaration",
                    "src": "15091:41:9"
                  }
                ],
                "id": 3520,
                "name": "ParameterList",
                "src": "15090:43:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amortizationUnitLengthInSeconds",
                      "scope": 3569,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3521,
                        "name": "ElementaryTypeName",
                        "src": "15181:4:9"
                      }
                    ],
                    "id": 3522,
                    "name": "VariableDeclaration",
                    "src": "15181:37:9"
                  }
                ],
                "id": 3523,
                "name": "ParameterList",
                "src": "15180:39:9"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_enum$_AmortizationUnitType_$2917",
                            "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3519,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                              "value": "amortizationUnitType"
                            },
                            "id": 3524,
                            "name": "Identifier",
                            "src": "15238:20:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "member_name": "HOURS",
                              "referencedDeclaration": null,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2917,
                                  "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                  "value": "AmortizationUnitType"
                                },
                                "id": 3525,
                                "name": "Identifier",
                                "src": "15262:20:9"
                              }
                            ],
                            "id": 3526,
                            "name": "MemberAccess",
                            "src": "15262:26:9"
                          }
                        ],
                        "id": 3527,
                        "name": "BinaryOperation",
                        "src": "15238:50:9"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 3523
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2940,
                                  "type": "uint256",
                                  "value": "HOUR_LENGTH_IN_SECONDS"
                                },
                                "id": 3528,
                                "name": "Identifier",
                                "src": "15311:22:9"
                              }
                            ],
                            "id": 3529,
                            "name": "Return",
                            "src": "15304:29:9"
                          }
                        ],
                        "id": 3530,
                        "name": "Block",
                        "src": "15290:54:9"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_enum$_AmortizationUnitType_$2917",
                                "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3519,
                                  "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                  "value": "amortizationUnitType"
                                },
                                "id": 3531,
                                "name": "Identifier",
                                "src": "15354:20:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "member_name": "DAYS",
                                  "referencedDeclaration": null,
                                  "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2917,
                                      "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                      "value": "AmortizationUnitType"
                                    },
                                    "id": 3532,
                                    "name": "Identifier",
                                    "src": "15378:20:9"
                                  }
                                ],
                                "id": 3533,
                                "name": "MemberAccess",
                                "src": "15378:25:9"
                              }
                            ],
                            "id": 3534,
                            "name": "BinaryOperation",
                            "src": "15354:49:9"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "functionReturnParameters": 3523
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2945,
                                      "type": "uint256",
                                      "value": "DAY_LENGTH_IN_SECONDS"
                                    },
                                    "id": 3535,
                                    "name": "Identifier",
                                    "src": "15426:21:9"
                                  }
                                ],
                                "id": 3536,
                                "name": "Return",
                                "src": "15419:28:9"
                              }
                            ],
                            "id": 3537,
                            "name": "Block",
                            "src": "15405:53:9"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_enum$_AmortizationUnitType_$2917",
                                    "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3519,
                                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                      "value": "amortizationUnitType"
                                    },
                                    "id": 3538,
                                    "name": "Identifier",
                                    "src": "15468:20:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "member_name": "WEEKS",
                                      "referencedDeclaration": null,
                                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2917,
                                          "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                          "value": "AmortizationUnitType"
                                        },
                                        "id": 3539,
                                        "name": "Identifier",
                                        "src": "15492:20:9"
                                      }
                                    ],
                                    "id": 3540,
                                    "name": "MemberAccess",
                                    "src": "15492:26:9"
                                  }
                                ],
                                "id": 3541,
                                "name": "BinaryOperation",
                                "src": "15468:50:9"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "functionReturnParameters": 3523
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2950,
                                          "type": "uint256",
                                          "value": "WEEK_LENGTH_IN_SECONDS"
                                        },
                                        "id": 3542,
                                        "name": "Identifier",
                                        "src": "15541:22:9"
                                      }
                                    ],
                                    "id": 3543,
                                    "name": "Return",
                                    "src": "15534:29:9"
                                  }
                                ],
                                "id": 3544,
                                "name": "Block",
                                "src": "15520:54:9"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_enum$_AmortizationUnitType_$2917",
                                        "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "==",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3519,
                                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                          "value": "amortizationUnitType"
                                        },
                                        "id": 3545,
                                        "name": "Identifier",
                                        "src": "15584:20:9"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "member_name": "MONTHS",
                                          "referencedDeclaration": null,
                                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2917,
                                              "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                              "value": "AmortizationUnitType"
                                            },
                                            "id": 3546,
                                            "name": "Identifier",
                                            "src": "15608:20:9"
                                          }
                                        ],
                                        "id": 3547,
                                        "name": "MemberAccess",
                                        "src": "15608:27:9"
                                      }
                                    ],
                                    "id": 3548,
                                    "name": "BinaryOperation",
                                    "src": "15584:51:9"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "functionReturnParameters": 3523
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2955,
                                              "type": "uint256",
                                              "value": "MONTH_LENGTH_IN_SECONDS"
                                            },
                                            "id": 3549,
                                            "name": "Identifier",
                                            "src": "15658:23:9"
                                          }
                                        ],
                                        "id": 3550,
                                        "name": "Return",
                                        "src": "15651:30:9"
                                      }
                                    ],
                                    "id": 3551,
                                    "name": "Block",
                                    "src": "15637:55:9"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_enum$_AmortizationUnitType_$2917",
                                            "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                          },
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": "==",
                                          "type": "bool"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 3519,
                                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                              "value": "amortizationUnitType"
                                            },
                                            "id": 3552,
                                            "name": "Identifier",
                                            "src": "15702:20:9"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "member_name": "YEARS",
                                              "referencedDeclaration": null,
                                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2917,
                                                  "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                                  "value": "AmortizationUnitType"
                                                },
                                                "id": 3553,
                                                "name": "Identifier",
                                                "src": "15726:20:9"
                                              }
                                            ],
                                            "id": 3554,
                                            "name": "MemberAccess",
                                            "src": "15726:26:9"
                                          }
                                        ],
                                        "id": 3555,
                                        "name": "BinaryOperation",
                                        "src": "15702:50:9"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "functionReturnParameters": 3523
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2960,
                                                  "type": "uint256",
                                                  "value": "YEAR_LENGTH_IN_SECONDS"
                                                },
                                                "id": 3556,
                                                "name": "Identifier",
                                                "src": "15775:22:9"
                                              }
                                            ],
                                            "id": 3557,
                                            "name": "Return",
                                            "src": "15768:29:9"
                                          }
                                        ],
                                        "id": 3558,
                                        "name": "Block",
                                        "src": "15754:54:9"
                                      },
                                      {
                                        "children": [
                                          {
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "arguments": [
                                                    null
                                                  ],
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "isStructConstructorCall": false,
                                                  "lValueRequested": false,
                                                  "names": [
                                                    null
                                                  ],
                                                  "type": "tuple()",
                                                  "type_conversion": false
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": [
                                                        null
                                                      ],
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 5582,
                                                      "type": "function () pure",
                                                      "value": "revert"
                                                    },
                                                    "id": 3559,
                                                    "name": "Identifier",
                                                    "src": "15828:6:9"
                                                  }
                                                ],
                                                "id": 3560,
                                                "name": "FunctionCall",
                                                "src": "15828:8:9"
                                              }
                                            ],
                                            "id": 3561,
                                            "name": "ExpressionStatement",
                                            "src": "15828:8:9"
                                          }
                                        ],
                                        "id": 3562,
                                        "name": "Block",
                                        "src": "15814:33:9"
                                      }
                                    ],
                                    "id": 3563,
                                    "name": "IfStatement",
                                    "src": "15698:149:9"
                                  }
                                ],
                                "id": 3564,
                                "name": "IfStatement",
                                "src": "15580:267:9"
                              }
                            ],
                            "id": 3565,
                            "name": "IfStatement",
                            "src": "15464:383:9"
                          }
                        ],
                        "id": 3566,
                        "name": "IfStatement",
                        "src": "15350:497:9"
                      }
                    ],
                    "id": 3567,
                    "name": "IfStatement",
                    "src": "15234:613:9"
                  }
                ],
                "id": 3568,
                "name": "Block",
                "src": "15224:629:9"
              }
            ],
            "id": 3569,
            "name": "FunctionDefinition",
            "src": "15047:806:9"
          }
        ],
        "id": 3570,
        "name": "ContractDefinition",
        "src": "759:15096:9"
      }
    ],
    "id": 3571,
    "name": "SourceUnit",
    "src": "584:15272:9"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x815e23c0dc47641f8b0b106e59d85a951add18fa"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-27T04:34:28.878Z"
}