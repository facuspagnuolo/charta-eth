export const ERC721 = 
{
  "contractName": "ERC721",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "_approved",
          "type": "address"
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "implementsERC721",
      "outputs": [
        {
          "name": "_implementsERC721",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "_totalSupply",
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "_owner",
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
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "_balance",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity 0.4.18;\n\n\n/**\n * Interface for required functionality in the ERC721 standard\n * for non-fungible tokens.\n *\n * Author: Nadav Hollander (nadav at dharma.io)\n */\ncontract ERC721 {\n    // Function\n    function totalSupply() public view returns (uint256 _totalSupply);\n    function balanceOf(address _owner) public view returns (uint256 _balance);\n    function ownerOf(uint _tokenId) public view returns (address _owner);\n    function approve(address _to, uint _tokenId) public;\n    function getApproved(uint _tokenId) public view returns (address _approved);\n    function transferFrom(address _from, address _to, uint _tokenId) public;\n    function transfer(address _to, uint _tokenId) public;\n    function implementsERC721() public view returns (bool _implementsERC721);\n\n    // Events\n    event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);\n    event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);\n}\n",
  "sourcePath": "NonFungibleToken/contracts/ERC721.sol",
  "ast": {
    "attributes": {
      "absolutePath": "NonFungibleToken/contracts/ERC721.sol",
      "exportedSymbols": {
        "ERC721": [
          4655
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
        "id": 4584,
        "name": "PragmaDirective",
        "src": "0:23:17"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": "Interface for required functionality in the ERC721 standard\nfor non-fungible tokens.\n * Author: Nadav Hollander (nadav at dharma.io)",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            4655
          ],
          "name": "ERC721",
          "scope": 4656
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "totalSupply",
              "payable": false,
              "scope": 4655,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4585,
                "name": "ParameterList",
                "src": "234:2:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_totalSupply",
                      "scope": 4589,
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
                        "id": 4586,
                        "name": "ElementaryTypeName",
                        "src": "258:7:17"
                      }
                    ],
                    "id": 4587,
                    "name": "VariableDeclaration",
                    "src": "258:20:17"
                  }
                ],
                "id": 4588,
                "name": "ParameterList",
                "src": "257:22:17"
              }
            ],
            "id": 4589,
            "name": "FunctionDefinition",
            "src": "214:66:17"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "payable": false,
              "scope": 4655,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 4596,
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
                        "id": 4590,
                        "name": "ElementaryTypeName",
                        "src": "304:7:17"
                      }
                    ],
                    "id": 4591,
                    "name": "VariableDeclaration",
                    "src": "304:14:17"
                  }
                ],
                "id": 4592,
                "name": "ParameterList",
                "src": "303:16:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_balance",
                      "scope": 4596,
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
                        "id": 4593,
                        "name": "ElementaryTypeName",
                        "src": "341:7:17"
                      }
                    ],
                    "id": 4594,
                    "name": "VariableDeclaration",
                    "src": "341:16:17"
                  }
                ],
                "id": 4595,
                "name": "ParameterList",
                "src": "340:18:17"
              }
            ],
            "id": 4596,
            "name": "FunctionDefinition",
            "src": "285:74:17"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "ownerOf",
              "payable": false,
              "scope": 4655,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 4603,
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
                        "id": 4597,
                        "name": "ElementaryTypeName",
                        "src": "381:4:17"
                      }
                    ],
                    "id": 4598,
                    "name": "VariableDeclaration",
                    "src": "381:13:17"
                  }
                ],
                "id": 4599,
                "name": "ParameterList",
                "src": "380:15:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 4603,
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
                        "id": 4600,
                        "name": "ElementaryTypeName",
                        "src": "417:7:17"
                      }
                    ],
                    "id": 4601,
                    "name": "VariableDeclaration",
                    "src": "417:14:17"
                  }
                ],
                "id": 4602,
                "name": "ParameterList",
                "src": "416:16:17"
              }
            ],
            "id": 4603,
            "name": "FunctionDefinition",
            "src": "364:69:17"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 4655,
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
                      "name": "_to",
                      "scope": 4610,
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
                        "id": 4604,
                        "name": "ElementaryTypeName",
                        "src": "455:7:17"
                      }
                    ],
                    "id": 4605,
                    "name": "VariableDeclaration",
                    "src": "455:11:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 4610,
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
                        "id": 4606,
                        "name": "ElementaryTypeName",
                        "src": "468:4:17"
                      }
                    ],
                    "id": 4607,
                    "name": "VariableDeclaration",
                    "src": "468:13:17"
                  }
                ],
                "id": 4608,
                "name": "ParameterList",
                "src": "454:28:17"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4609,
                "name": "ParameterList",
                "src": "489:0:17"
              }
            ],
            "id": 4610,
            "name": "FunctionDefinition",
            "src": "438:52:17"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getApproved",
              "payable": false,
              "scope": 4655,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 4617,
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
                        "id": 4611,
                        "name": "ElementaryTypeName",
                        "src": "516:4:17"
                      }
                    ],
                    "id": 4612,
                    "name": "VariableDeclaration",
                    "src": "516:13:17"
                  }
                ],
                "id": 4613,
                "name": "ParameterList",
                "src": "515:15:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 4617,
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
                        "id": 4614,
                        "name": "ElementaryTypeName",
                        "src": "552:7:17"
                      }
                    ],
                    "id": 4615,
                    "name": "VariableDeclaration",
                    "src": "552:17:17"
                  }
                ],
                "id": 4616,
                "name": "ParameterList",
                "src": "551:19:17"
              }
            ],
            "id": 4617,
            "name": "FunctionDefinition",
            "src": "495:76:17"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "payable": false,
              "scope": 4655,
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
                      "name": "_from",
                      "scope": 4626,
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
                        "id": 4618,
                        "name": "ElementaryTypeName",
                        "src": "598:7:17"
                      }
                    ],
                    "id": 4619,
                    "name": "VariableDeclaration",
                    "src": "598:13:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 4626,
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
                        "id": 4620,
                        "name": "ElementaryTypeName",
                        "src": "613:7:17"
                      }
                    ],
                    "id": 4621,
                    "name": "VariableDeclaration",
                    "src": "613:11:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 4626,
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
                        "id": 4622,
                        "name": "ElementaryTypeName",
                        "src": "626:4:17"
                      }
                    ],
                    "id": 4623,
                    "name": "VariableDeclaration",
                    "src": "626:13:17"
                  }
                ],
                "id": 4624,
                "name": "ParameterList",
                "src": "597:43:17"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4625,
                "name": "ParameterList",
                "src": "647:0:17"
              }
            ],
            "id": 4626,
            "name": "FunctionDefinition",
            "src": "576:72:17"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transfer",
              "payable": false,
              "scope": 4655,
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
                      "name": "_to",
                      "scope": 4633,
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
                        "id": 4627,
                        "name": "ElementaryTypeName",
                        "src": "671:7:17"
                      }
                    ],
                    "id": 4628,
                    "name": "VariableDeclaration",
                    "src": "671:11:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 4633,
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
                        "id": 4629,
                        "name": "ElementaryTypeName",
                        "src": "684:4:17"
                      }
                    ],
                    "id": 4630,
                    "name": "VariableDeclaration",
                    "src": "684:13:17"
                  }
                ],
                "id": 4631,
                "name": "ParameterList",
                "src": "670:28:17"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4632,
                "name": "ParameterList",
                "src": "705:0:17"
              }
            ],
            "id": 4633,
            "name": "FunctionDefinition",
            "src": "653:53:17"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "implementsERC721",
              "payable": false,
              "scope": 4655,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4634,
                "name": "ParameterList",
                "src": "736:2:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_implementsERC721",
                      "scope": 4638,
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
                        "id": 4635,
                        "name": "ElementaryTypeName",
                        "src": "760:4:17"
                      }
                    ],
                    "id": 4636,
                    "name": "VariableDeclaration",
                    "src": "760:22:17"
                  }
                ],
                "id": 4637,
                "name": "ParameterList",
                "src": "759:24:17"
              }
            ],
            "id": 4638,
            "name": "FunctionDefinition",
            "src": "711:73:17"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Transfer"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_from",
                      "scope": 4646,
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
                        "id": 4639,
                        "name": "ElementaryTypeName",
                        "src": "819:7:17"
                      }
                    ],
                    "id": 4640,
                    "name": "VariableDeclaration",
                    "src": "819:21:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_to",
                      "scope": 4646,
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
                        "id": 4641,
                        "name": "ElementaryTypeName",
                        "src": "842:7:17"
                      }
                    ],
                    "id": 4642,
                    "name": "VariableDeclaration",
                    "src": "842:19:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 4646,
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
                        "id": 4643,
                        "name": "ElementaryTypeName",
                        "src": "863:7:17"
                      }
                    ],
                    "id": 4644,
                    "name": "VariableDeclaration",
                    "src": "863:16:17"
                  }
                ],
                "id": 4645,
                "name": "ParameterList",
                "src": "818:62:17"
              }
            ],
            "id": 4646,
            "name": "EventDefinition",
            "src": "804:77:17"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Approval"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_owner",
                      "scope": 4654,
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
                        "id": 4647,
                        "name": "ElementaryTypeName",
                        "src": "901:7:17"
                      }
                    ],
                    "id": 4648,
                    "name": "VariableDeclaration",
                    "src": "901:22:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_approved",
                      "scope": 4654,
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
                        "id": 4649,
                        "name": "ElementaryTypeName",
                        "src": "925:7:17"
                      }
                    ],
                    "id": 4650,
                    "name": "VariableDeclaration",
                    "src": "925:25:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 4654,
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
                        "id": 4651,
                        "name": "ElementaryTypeName",
                        "src": "952:7:17"
                      }
                    ],
                    "id": 4652,
                    "name": "VariableDeclaration",
                    "src": "952:16:17"
                  }
                ],
                "id": 4653,
                "name": "ParameterList",
                "src": "900:69:17"
              }
            ],
            "id": 4654,
            "name": "EventDefinition",
            "src": "886:84:17"
          }
        ],
        "id": 4655,
        "name": "ContractDefinition",
        "src": "176:796:17"
      }
    ],
    "id": 4656,
    "name": "SourceUnit",
    "src": "0:973:17"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-27T04:31:52.482Z"
}