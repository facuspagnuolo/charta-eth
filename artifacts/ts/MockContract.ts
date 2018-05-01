export const MockContract = 
{
  "contractName": "MockContract",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        }
      ],
      "name": "getMockReturnValue",
      "outputs": [
        {
          "name": "_mockReturnValue",
          "type": "bytes32"
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
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        },
        {
          "name": "returnValue",
          "type": "bytes32"
        }
      ],
      "name": "mockReturnValue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "reset",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\ncontract MockContract {\n    bytes32 internal constant DEFAULT_SIGNATURE_ARGS = bytes32(0);\n\n    // We use bytes32 as our generic base type from and to which we cast all other types\n    mapping (string => bytes32[]) internal functionCallSignatures;\n    mapping (string => mapping (bytes32 => bytes32)) internal mockedReturnValue;\n    mapping (string => mapping (bytes32 => bool)) internal functionCalls;\n\n    function mockReturnValue(\n        string functionName,\n        bytes32 argsSignature,\n        bytes32 returnValue\n    ) public {\n        functionCallSignatures[functionName].push(argsSignature);\n        mockedReturnValue[functionName][argsSignature] = returnValue;\n    }\n\n    function getMockReturnValue(string functionName, bytes32 argsSignature)\n        public\n        view\n        returns (bytes32 _mockReturnValue)\n    {\n        return mockedReturnValue[functionName][argsSignature];\n    }\n\n    function reset() public {\n        for (uint i = 0; i < 10; i++) {\n            string memory functionName = getFunctionList()[i];\n\n            if (bytes(functionName).length != 0) {\n                for (uint j = 0; j < functionCallSignatures[functionName].length; j++) {\n                    bytes32 callSignature = functionCallSignatures[functionName][j];\n                    delete functionCalls[functionName][callSignature];\n                    delete mockedReturnValue[functionName][callSignature];\n                }\n\n                delete functionCallSignatures[functionName];\n            }\n        }\n    }\n\n    function functionCalledWithArgs(string functionName, bytes32 args)\n        internal\n    {\n        functionCalls[functionName][args] = true;\n        functionCallSignatures[functionName].push(args);\n    }\n\n    function wasFunctionCalledWithArgs(string functionName, bytes32 args)\n        internal\n        view\n        returns (bool wasCalled)\n    {\n        return functionCalls[functionName][args];\n    }\n\n    function getFunctionList() internal returns (string[10] functionNames);\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/mocks/MockContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/mocks/MockContract.sol",
      "exportedSymbols": {
        "MockContract": [
          5165
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
        "id": 4982,
        "name": "PragmaDirective",
        "src": "584:23:16"
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
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            5165
          ],
          "name": "MockContract",
          "scope": 5166
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "name": "DEFAULT_SIGNATURE_ARGS",
              "scope": 5165,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes32",
                  "type": "bytes32"
                },
                "id": 4983,
                "name": "ElementaryTypeName",
                "src": "638:7:16"
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
                  "type": "bytes32",
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
                      "type": "type(bytes32)",
                      "value": "bytes32"
                    },
                    "id": 4984,
                    "name": "ElementaryTypeNameExpression",
                    "src": "689:7:16"
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
                    "id": 4985,
                    "name": "Literal",
                    "src": "697:1:16"
                  }
                ],
                "id": 4986,
                "name": "FunctionCall",
                "src": "689:10:16"
              }
            ],
            "id": 4987,
            "name": "VariableDeclaration",
            "src": "638:61:16"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCallSignatures",
              "scope": 5165,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => bytes32[] storage ref)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => bytes32[] storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 4988,
                    "name": "ElementaryTypeName",
                    "src": "804:6:16"
                  },
                  {
                    "attributes": {
                      "length": null,
                      "type": "bytes32[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4989,
                        "name": "ElementaryTypeName",
                        "src": "814:7:16"
                      }
                    ],
                    "id": 4990,
                    "name": "ArrayTypeName",
                    "src": "814:9:16"
                  }
                ],
                "id": 4991,
                "name": "Mapping",
                "src": "795:29:16"
              }
            ],
            "id": 4992,
            "name": "VariableDeclaration",
            "src": "795:61:16"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mockedReturnValue",
              "scope": 5165,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => mapping(bytes32 => bytes32))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 4993,
                    "name": "ElementaryTypeName",
                    "src": "871:6:16"
                  },
                  {
                    "attributes": {
                      "type": "mapping(bytes32 => bytes32)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4994,
                        "name": "ElementaryTypeName",
                        "src": "890:7:16"
                      },
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4995,
                        "name": "ElementaryTypeName",
                        "src": "901:7:16"
                      }
                    ],
                    "id": 4996,
                    "name": "Mapping",
                    "src": "881:28:16"
                  }
                ],
                "id": 4997,
                "name": "Mapping",
                "src": "862:48:16"
              }
            ],
            "id": 4998,
            "name": "VariableDeclaration",
            "src": "862:75:16"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCalls",
              "scope": 5165,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => mapping(bytes32 => bool))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => mapping(bytes32 => bool))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 4999,
                    "name": "ElementaryTypeName",
                    "src": "952:6:16"
                  },
                  {
                    "attributes": {
                      "type": "mapping(bytes32 => bool)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5000,
                        "name": "ElementaryTypeName",
                        "src": "971:7:16"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 5001,
                        "name": "ElementaryTypeName",
                        "src": "982:4:16"
                      }
                    ],
                    "id": 5002,
                    "name": "Mapping",
                    "src": "962:25:16"
                  }
                ],
                "id": 5003,
                "name": "Mapping",
                "src": "943:45:16"
              }
            ],
            "id": 5004,
            "name": "VariableDeclaration",
            "src": "943:68:16"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "mockReturnValue",
              "payable": false,
              "scope": 5165,
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
                      "name": "functionName",
                      "scope": 5029,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5005,
                        "name": "ElementaryTypeName",
                        "src": "1052:6:16"
                      }
                    ],
                    "id": 5006,
                    "name": "VariableDeclaration",
                    "src": "1052:19:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 5029,
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
                        "id": 5007,
                        "name": "ElementaryTypeName",
                        "src": "1081:7:16"
                      }
                    ],
                    "id": 5008,
                    "name": "VariableDeclaration",
                    "src": "1081:21:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "returnValue",
                      "scope": 5029,
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
                        "id": 5009,
                        "name": "ElementaryTypeName",
                        "src": "1112:7:16"
                      }
                    ],
                    "id": 5010,
                    "name": "VariableDeclaration",
                    "src": "1112:19:16"
                  }
                ],
                "id": 5011,
                "name": "ParameterList",
                "src": "1042:95:16"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5012,
                "name": "ParameterList",
                "src": "1145:0:16"
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
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4992,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 5013,
                                    "name": "Identifier",
                                    "src": "1155:22:16"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5006,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5014,
                                    "name": "Identifier",
                                    "src": "1178:12:16"
                                  }
                                ],
                                "id": 5015,
                                "name": "IndexAccess",
                                "src": "1155:36:16"
                              }
                            ],
                            "id": 5016,
                            "name": "MemberAccess",
                            "src": "1155:41:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5008,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 5017,
                            "name": "Identifier",
                            "src": "1197:13:16"
                          }
                        ],
                        "id": 5018,
                        "name": "FunctionCall",
                        "src": "1155:56:16"
                      }
                    ],
                    "id": 5019,
                    "name": "ExpressionStatement",
                    "src": "1155:56:16"
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
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(bytes32 => bytes32)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4998,
                                      "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                      "value": "mockedReturnValue"
                                    },
                                    "id": 5020,
                                    "name": "Identifier",
                                    "src": "1221:17:16"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5006,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5021,
                                    "name": "Identifier",
                                    "src": "1239:12:16"
                                  }
                                ],
                                "id": 5023,
                                "name": "IndexAccess",
                                "src": "1221:31:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5008,
                                  "type": "bytes32",
                                  "value": "argsSignature"
                                },
                                "id": 5022,
                                "name": "Identifier",
                                "src": "1253:13:16"
                              }
                            ],
                            "id": 5024,
                            "name": "IndexAccess",
                            "src": "1221:46:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5010,
                              "type": "bytes32",
                              "value": "returnValue"
                            },
                            "id": 5025,
                            "name": "Identifier",
                            "src": "1270:11:16"
                          }
                        ],
                        "id": 5026,
                        "name": "Assignment",
                        "src": "1221:60:16"
                      }
                    ],
                    "id": 5027,
                    "name": "ExpressionStatement",
                    "src": "1221:60:16"
                  }
                ],
                "id": 5028,
                "name": "Block",
                "src": "1145:143:16"
              }
            ],
            "id": 5029,
            "name": "FunctionDefinition",
            "src": "1018:270:16"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getMockReturnValue",
              "payable": false,
              "scope": 5165,
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
                      "name": "functionName",
                      "scope": 5045,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5030,
                        "name": "ElementaryTypeName",
                        "src": "1322:6:16"
                      }
                    ],
                    "id": 5031,
                    "name": "VariableDeclaration",
                    "src": "1322:19:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 5045,
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
                        "id": 5032,
                        "name": "ElementaryTypeName",
                        "src": "1343:7:16"
                      }
                    ],
                    "id": 5033,
                    "name": "VariableDeclaration",
                    "src": "1343:21:16"
                  }
                ],
                "id": 5034,
                "name": "ParameterList",
                "src": "1321:44:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_mockReturnValue",
                      "scope": 5045,
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
                        "id": 5035,
                        "name": "ElementaryTypeName",
                        "src": "1411:7:16"
                      }
                    ],
                    "id": 5036,
                    "name": "VariableDeclaration",
                    "src": "1411:24:16"
                  }
                ],
                "id": 5037,
                "name": "ParameterList",
                "src": "1410:26:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5037
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(bytes32 => bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4998,
                                  "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                  "value": "mockedReturnValue"
                                },
                                "id": 5038,
                                "name": "Identifier",
                                "src": "1458:17:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5031,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 5039,
                                "name": "Identifier",
                                "src": "1476:12:16"
                              }
                            ],
                            "id": 5040,
                            "name": "IndexAccess",
                            "src": "1458:31:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5033,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 5041,
                            "name": "Identifier",
                            "src": "1490:13:16"
                          }
                        ],
                        "id": 5042,
                        "name": "IndexAccess",
                        "src": "1458:46:16"
                      }
                    ],
                    "id": 5043,
                    "name": "Return",
                    "src": "1451:53:16"
                  }
                ],
                "id": 5044,
                "name": "Block",
                "src": "1441:70:16"
              }
            ],
            "id": 5045,
            "name": "FunctionDefinition",
            "src": "1294:217:16"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "reset",
              "payable": false,
              "scope": 5165,
              "stateMutability": "nonpayable",
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
                "id": 5046,
                "name": "ParameterList",
                "src": "1531:2:16"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5047,
                "name": "ParameterList",
                "src": "1541:0:16"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            5049
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 5118,
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
                                "id": 5048,
                                "name": "ElementaryTypeName",
                                "src": "1556:4:16"
                              }
                            ],
                            "id": 5049,
                            "name": "VariableDeclaration",
                            "src": "1556:6:16"
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
                            "id": 5050,
                            "name": "Literal",
                            "src": "1565:1:16"
                          }
                        ],
                        "id": 5051,
                        "name": "VariableDeclarationStatement",
                        "src": "1556:10:16"
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
                              "referencedDeclaration": 5049,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 5052,
                            "name": "Identifier",
                            "src": "1568:1:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3130",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 10",
                              "value": "10"
                            },
                            "id": 5053,
                            "name": "Literal",
                            "src": "1572:2:16"
                          }
                        ],
                        "id": 5054,
                        "name": "BinaryOperation",
                        "src": "1568:6:16"
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
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5049,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 5055,
                                "name": "Identifier",
                                "src": "1576:1:16"
                              }
                            ],
                            "id": 5056,
                            "name": "UnaryOperation",
                            "src": "1576:3:16"
                          }
                        ],
                        "id": 5057,
                        "name": "ExpressionStatement",
                        "src": "1576:3:16"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                5059
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "functionName",
                                  "scope": 5118,
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "type": "string memory",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "string",
                                      "type": "string storage pointer"
                                    },
                                    "id": 5058,
                                    "name": "ElementaryTypeName",
                                    "src": "1595:6:16"
                                  }
                                ],
                                "id": 5059,
                                "name": "VariableDeclaration",
                                "src": "1595:26:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "string memory"
                                },
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
                                      "type": "string memory[10] memory",
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
                                          "referencedDeclaration": 5164,
                                          "type": "function () returns (string memory[10] memory)",
                                          "value": "getFunctionList"
                                        },
                                        "id": 5060,
                                        "name": "Identifier",
                                        "src": "1624:15:16"
                                      }
                                    ],
                                    "id": 5061,
                                    "name": "FunctionCall",
                                    "src": "1624:17:16"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5049,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 5062,
                                    "name": "Identifier",
                                    "src": "1642:1:16"
                                  }
                                ],
                                "id": 5063,
                                "name": "IndexAccess",
                                "src": "1624:20:16"
                              }
                            ],
                            "id": 5064,
                            "name": "VariableDeclarationStatement",
                            "src": "1595:49:16"
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
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
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
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "length",
                                      "referencedDeclaration": null,
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
                                          "type": "bytes memory",
                                          "type_conversion": true
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_string_memory_ptr",
                                                  "typeString": "string memory"
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "type": "type(bytes storage pointer)",
                                              "value": "bytes"
                                            },
                                            "id": 5065,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "1663:5:16"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 5059,
                                              "type": "string memory",
                                              "value": "functionName"
                                            },
                                            "id": 5066,
                                            "name": "Identifier",
                                            "src": "1669:12:16"
                                          }
                                        ],
                                        "id": 5067,
                                        "name": "FunctionCall",
                                        "src": "1663:19:16"
                                      }
                                    ],
                                    "id": 5068,
                                    "name": "MemberAccess",
                                    "src": "1663:26:16"
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
                                    "id": 5069,
                                    "name": "Literal",
                                    "src": "1693:1:16"
                                  }
                                ],
                                "id": 5070,
                                "name": "BinaryOperation",
                                "src": "1663:31:16"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "assignments": [
                                            5072
                                          ]
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "constant": false,
                                              "name": "j",
                                              "scope": 5118,
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
                                                "id": 5071,
                                                "name": "ElementaryTypeName",
                                                "src": "1719:4:16"
                                              }
                                            ],
                                            "id": 5072,
                                            "name": "VariableDeclaration",
                                            "src": "1719:6:16"
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
                                            "id": 5073,
                                            "name": "Literal",
                                            "src": "1728:1:16"
                                          }
                                        ],
                                        "id": 5074,
                                        "name": "VariableDeclarationStatement",
                                        "src": "1719:10:16"
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
                                              "referencedDeclaration": 5072,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 5075,
                                            "name": "Identifier",
                                            "src": "1731:1:16"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "length",
                                              "referencedDeclaration": null,
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "bytes32[] storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 4992,
                                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                                      "value": "functionCallSignatures"
                                                    },
                                                    "id": 5076,
                                                    "name": "Identifier",
                                                    "src": "1735:22:16"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 5059,
                                                      "type": "string memory",
                                                      "value": "functionName"
                                                    },
                                                    "id": 5077,
                                                    "name": "Identifier",
                                                    "src": "1758:12:16"
                                                  }
                                                ],
                                                "id": 5078,
                                                "name": "IndexAccess",
                                                "src": "1735:36:16"
                                              }
                                            ],
                                            "id": 5079,
                                            "name": "MemberAccess",
                                            "src": "1735:43:16"
                                          }
                                        ],
                                        "id": 5080,
                                        "name": "BinaryOperation",
                                        "src": "1731:47:16"
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
                                              "operator": "++",
                                              "prefix": false,
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 5072,
                                                  "type": "uint256",
                                                  "value": "j"
                                                },
                                                "id": 5081,
                                                "name": "Identifier",
                                                "src": "1780:1:16"
                                              }
                                            ],
                                            "id": 5082,
                                            "name": "UnaryOperation",
                                            "src": "1780:3:16"
                                          }
                                        ],
                                        "id": 5083,
                                        "name": "ExpressionStatement",
                                        "src": "1780:3:16"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "assignments": [
                                                5085
                                              ]
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "constant": false,
                                                  "name": "callSignature",
                                                  "scope": 5118,
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
                                                    "id": 5084,
                                                    "name": "ElementaryTypeName",
                                                    "src": "1807:7:16"
                                                  }
                                                ],
                                                "id": 5085,
                                                "name": "VariableDeclaration",
                                                "src": "1807:21:16"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "bytes32"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "bytes32[] storage ref"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4992,
                                                          "type": "mapping(string memory => bytes32[] storage ref)",
                                                          "value": "functionCallSignatures"
                                                        },
                                                        "id": 5086,
                                                        "name": "Identifier",
                                                        "src": "1831:22:16"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 5059,
                                                          "type": "string memory",
                                                          "value": "functionName"
                                                        },
                                                        "id": 5087,
                                                        "name": "Identifier",
                                                        "src": "1854:12:16"
                                                      }
                                                    ],
                                                    "id": 5088,
                                                    "name": "IndexAccess",
                                                    "src": "1831:36:16"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 5072,
                                                      "type": "uint256",
                                                      "value": "j"
                                                    },
                                                    "id": 5089,
                                                    "name": "Identifier",
                                                    "src": "1868:1:16"
                                                  }
                                                ],
                                                "id": 5090,
                                                "name": "IndexAccess",
                                                "src": "1831:39:16"
                                              }
                                            ],
                                            "id": 5091,
                                            "name": "VariableDeclarationStatement",
                                            "src": "1807:63:16"
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
                                                  "operator": "delete",
                                                  "prefix": true,
                                                  "type": "tuple()"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": true,
                                                      "type": "bool"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(bytes32 => bool)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 5004,
                                                              "type": "mapping(string memory => mapping(bytes32 => bool))",
                                                              "value": "functionCalls"
                                                            },
                                                            "id": 5092,
                                                            "name": "Identifier",
                                                            "src": "1899:13:16"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 5059,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 5093,
                                                            "name": "Identifier",
                                                            "src": "1913:12:16"
                                                          }
                                                        ],
                                                        "id": 5094,
                                                        "name": "IndexAccess",
                                                        "src": "1899:27:16"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 5085,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 5095,
                                                        "name": "Identifier",
                                                        "src": "1927:13:16"
                                                      }
                                                    ],
                                                    "id": 5096,
                                                    "name": "IndexAccess",
                                                    "src": "1899:42:16"
                                                  }
                                                ],
                                                "id": 5097,
                                                "name": "UnaryOperation",
                                                "src": "1892:49:16"
                                              }
                                            ],
                                            "id": 5098,
                                            "name": "ExpressionStatement",
                                            "src": "1892:49:16"
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
                                                  "operator": "delete",
                                                  "prefix": true,
                                                  "type": "tuple()"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": true,
                                                      "type": "bytes32"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(bytes32 => bytes32)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 4998,
                                                              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                                              "value": "mockedReturnValue"
                                                            },
                                                            "id": 5099,
                                                            "name": "Identifier",
                                                            "src": "1970:17:16"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 5059,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 5100,
                                                            "name": "Identifier",
                                                            "src": "1988:12:16"
                                                          }
                                                        ],
                                                        "id": 5101,
                                                        "name": "IndexAccess",
                                                        "src": "1970:31:16"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 5085,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 5102,
                                                        "name": "Identifier",
                                                        "src": "2002:13:16"
                                                      }
                                                    ],
                                                    "id": 5103,
                                                    "name": "IndexAccess",
                                                    "src": "1970:46:16"
                                                  }
                                                ],
                                                "id": 5104,
                                                "name": "UnaryOperation",
                                                "src": "1963:53:16"
                                              }
                                            ],
                                            "id": 5105,
                                            "name": "ExpressionStatement",
                                            "src": "1963:53:16"
                                          }
                                        ],
                                        "id": 5106,
                                        "name": "Block",
                                        "src": "1785:250:16"
                                      }
                                    ],
                                    "id": 5107,
                                    "name": "ForStatement",
                                    "src": "1714:321:16"
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
                                          "operator": "delete",
                                          "prefix": true,
                                          "type": "tuple()"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": true,
                                              "type": "bytes32[] storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 4992,
                                                  "type": "mapping(string memory => bytes32[] storage ref)",
                                                  "value": "functionCallSignatures"
                                                },
                                                "id": 5108,
                                                "name": "Identifier",
                                                "src": "2060:22:16"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 5059,
                                                  "type": "string memory",
                                                  "value": "functionName"
                                                },
                                                "id": 5109,
                                                "name": "Identifier",
                                                "src": "2083:12:16"
                                              }
                                            ],
                                            "id": 5110,
                                            "name": "IndexAccess",
                                            "src": "2060:36:16"
                                          }
                                        ],
                                        "id": 5111,
                                        "name": "UnaryOperation",
                                        "src": "2053:43:16"
                                      }
                                    ],
                                    "id": 5112,
                                    "name": "ExpressionStatement",
                                    "src": "2053:43:16"
                                  }
                                ],
                                "id": 5113,
                                "name": "Block",
                                "src": "1696:415:16"
                              }
                            ],
                            "id": 5114,
                            "name": "IfStatement",
                            "src": "1659:452:16"
                          }
                        ],
                        "id": 5115,
                        "name": "Block",
                        "src": "1581:540:16"
                      }
                    ],
                    "id": 5116,
                    "name": "ForStatement",
                    "src": "1551:570:16"
                  }
                ],
                "id": 5117,
                "name": "Block",
                "src": "1541:586:16"
              }
            ],
            "id": 5118,
            "name": "FunctionDefinition",
            "src": "1517:610:16"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "functionCalledWithArgs",
              "payable": false,
              "scope": 5165,
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
                      "name": "functionName",
                      "scope": 5141,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5119,
                        "name": "ElementaryTypeName",
                        "src": "2165:6:16"
                      }
                    ],
                    "id": 5120,
                    "name": "VariableDeclaration",
                    "src": "2165:19:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 5141,
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
                        "id": 5121,
                        "name": "ElementaryTypeName",
                        "src": "2186:7:16"
                      }
                    ],
                    "id": 5122,
                    "name": "VariableDeclaration",
                    "src": "2186:12:16"
                  }
                ],
                "id": 5123,
                "name": "ParameterList",
                "src": "2164:35:16"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5124,
                "name": "ParameterList",
                "src": "2221:0:16"
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
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(bytes32 => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5004,
                                      "type": "mapping(string memory => mapping(bytes32 => bool))",
                                      "value": "functionCalls"
                                    },
                                    "id": 5125,
                                    "name": "Identifier",
                                    "src": "2231:13:16"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5120,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5126,
                                    "name": "Identifier",
                                    "src": "2245:12:16"
                                  }
                                ],
                                "id": 5128,
                                "name": "IndexAccess",
                                "src": "2231:27:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5122,
                                  "type": "bytes32",
                                  "value": "args"
                                },
                                "id": 5127,
                                "name": "Identifier",
                                "src": "2259:4:16"
                              }
                            ],
                            "id": 5129,
                            "name": "IndexAccess",
                            "src": "2231:33:16"
                          },
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
                            "id": 5130,
                            "name": "Literal",
                            "src": "2267:4:16"
                          }
                        ],
                        "id": 5131,
                        "name": "Assignment",
                        "src": "2231:40:16"
                      }
                    ],
                    "id": 5132,
                    "name": "ExpressionStatement",
                    "src": "2231:40:16"
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
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4992,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 5133,
                                    "name": "Identifier",
                                    "src": "2281:22:16"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5120,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5134,
                                    "name": "Identifier",
                                    "src": "2304:12:16"
                                  }
                                ],
                                "id": 5135,
                                "name": "IndexAccess",
                                "src": "2281:36:16"
                              }
                            ],
                            "id": 5136,
                            "name": "MemberAccess",
                            "src": "2281:41:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5122,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 5137,
                            "name": "Identifier",
                            "src": "2323:4:16"
                          }
                        ],
                        "id": 5138,
                        "name": "FunctionCall",
                        "src": "2281:47:16"
                      }
                    ],
                    "id": 5139,
                    "name": "ExpressionStatement",
                    "src": "2281:47:16"
                  }
                ],
                "id": 5140,
                "name": "Block",
                "src": "2221:114:16"
              }
            ],
            "id": 5141,
            "name": "FunctionDefinition",
            "src": "2133:202:16"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "wasFunctionCalledWithArgs",
              "payable": false,
              "scope": 5165,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 5157,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5142,
                        "name": "ElementaryTypeName",
                        "src": "2376:6:16"
                      }
                    ],
                    "id": 5143,
                    "name": "VariableDeclaration",
                    "src": "2376:19:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 5157,
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
                        "id": 5144,
                        "name": "ElementaryTypeName",
                        "src": "2397:7:16"
                      }
                    ],
                    "id": 5145,
                    "name": "VariableDeclaration",
                    "src": "2397:12:16"
                  }
                ],
                "id": 5146,
                "name": "ParameterList",
                "src": "2375:35:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "wasCalled",
                      "scope": 5157,
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
                        "id": 5147,
                        "name": "ElementaryTypeName",
                        "src": "2458:4:16"
                      }
                    ],
                    "id": 5148,
                    "name": "VariableDeclaration",
                    "src": "2458:14:16"
                  }
                ],
                "id": 5149,
                "name": "ParameterList",
                "src": "2457:16:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5149
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(bytes32 => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5004,
                                  "type": "mapping(string memory => mapping(bytes32 => bool))",
                                  "value": "functionCalls"
                                },
                                "id": 5150,
                                "name": "Identifier",
                                "src": "2495:13:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5143,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 5151,
                                "name": "Identifier",
                                "src": "2509:12:16"
                              }
                            ],
                            "id": 5152,
                            "name": "IndexAccess",
                            "src": "2495:27:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5145,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 5153,
                            "name": "Identifier",
                            "src": "2523:4:16"
                          }
                        ],
                        "id": 5154,
                        "name": "IndexAccess",
                        "src": "2495:33:16"
                      }
                    ],
                    "id": 5155,
                    "name": "Return",
                    "src": "2488:40:16"
                  }
                ],
                "id": 5156,
                "name": "Block",
                "src": "2478:57:16"
              }
            ],
            "id": 5157,
            "name": "FunctionDefinition",
            "src": "2341:194:16"
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
              "name": "getFunctionList",
              "payable": false,
              "scope": 5165,
              "stateMutability": "nonpayable",
              "superFunction": null,
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
                "id": 5158,
                "name": "ParameterList",
                "src": "2565:2:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionNames",
                      "scope": 5164,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory[10] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "string storage ref[10] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string storage pointer"
                            },
                            "id": 5159,
                            "name": "ElementaryTypeName",
                            "src": "2586:6:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3130",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 10",
                              "value": "10"
                            },
                            "id": 5160,
                            "name": "Literal",
                            "src": "2593:2:16"
                          }
                        ],
                        "id": 5161,
                        "name": "ArrayTypeName",
                        "src": "2586:10:16"
                      }
                    ],
                    "id": 5162,
                    "name": "VariableDeclaration",
                    "src": "2586:24:16"
                  }
                ],
                "id": 5163,
                "name": "ParameterList",
                "src": "2585:26:16"
              }
            ],
            "id": 5164,
            "name": "FunctionDefinition",
            "src": "2541:71:16"
          }
        ],
        "id": 5165,
        "name": "ContractDefinition",
        "src": "610:2004:16"
      }
    ],
    "id": 5166,
    "name": "SourceUnit",
    "src": "584:2031:16"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-05-01T21:37:41.217Z"
}