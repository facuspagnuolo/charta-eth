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
          4214
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
        "id": 4031,
        "name": "PragmaDirective",
        "src": "584:23:12"
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
            4214
          ],
          "name": "MockContract",
          "scope": 4215
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "name": "DEFAULT_SIGNATURE_ARGS",
              "scope": 4214,
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
                "id": 4032,
                "name": "ElementaryTypeName",
                "src": "638:7:12"
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
                    "id": 4033,
                    "name": "ElementaryTypeNameExpression",
                    "src": "689:7:12"
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
                    "id": 4034,
                    "name": "Literal",
                    "src": "697:1:12"
                  }
                ],
                "id": 4035,
                "name": "FunctionCall",
                "src": "689:10:12"
              }
            ],
            "id": 4036,
            "name": "VariableDeclaration",
            "src": "638:61:12"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCallSignatures",
              "scope": 4214,
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
                    "id": 4037,
                    "name": "ElementaryTypeName",
                    "src": "804:6:12"
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
                        "id": 4038,
                        "name": "ElementaryTypeName",
                        "src": "814:7:12"
                      }
                    ],
                    "id": 4039,
                    "name": "ArrayTypeName",
                    "src": "814:9:12"
                  }
                ],
                "id": 4040,
                "name": "Mapping",
                "src": "795:29:12"
              }
            ],
            "id": 4041,
            "name": "VariableDeclaration",
            "src": "795:61:12"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mockedReturnValue",
              "scope": 4214,
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
                    "id": 4042,
                    "name": "ElementaryTypeName",
                    "src": "871:6:12"
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
                        "id": 4043,
                        "name": "ElementaryTypeName",
                        "src": "890:7:12"
                      },
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4044,
                        "name": "ElementaryTypeName",
                        "src": "901:7:12"
                      }
                    ],
                    "id": 4045,
                    "name": "Mapping",
                    "src": "881:28:12"
                  }
                ],
                "id": 4046,
                "name": "Mapping",
                "src": "862:48:12"
              }
            ],
            "id": 4047,
            "name": "VariableDeclaration",
            "src": "862:75:12"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCalls",
              "scope": 4214,
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
                    "id": 4048,
                    "name": "ElementaryTypeName",
                    "src": "952:6:12"
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
                        "id": 4049,
                        "name": "ElementaryTypeName",
                        "src": "971:7:12"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4050,
                        "name": "ElementaryTypeName",
                        "src": "982:4:12"
                      }
                    ],
                    "id": 4051,
                    "name": "Mapping",
                    "src": "962:25:12"
                  }
                ],
                "id": 4052,
                "name": "Mapping",
                "src": "943:45:12"
              }
            ],
            "id": 4053,
            "name": "VariableDeclaration",
            "src": "943:68:12"
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
              "scope": 4214,
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
                      "scope": 4078,
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
                        "id": 4054,
                        "name": "ElementaryTypeName",
                        "src": "1052:6:12"
                      }
                    ],
                    "id": 4055,
                    "name": "VariableDeclaration",
                    "src": "1052:19:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 4078,
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
                        "id": 4056,
                        "name": "ElementaryTypeName",
                        "src": "1081:7:12"
                      }
                    ],
                    "id": 4057,
                    "name": "VariableDeclaration",
                    "src": "1081:21:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "returnValue",
                      "scope": 4078,
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
                        "id": 4058,
                        "name": "ElementaryTypeName",
                        "src": "1112:7:12"
                      }
                    ],
                    "id": 4059,
                    "name": "VariableDeclaration",
                    "src": "1112:19:12"
                  }
                ],
                "id": 4060,
                "name": "ParameterList",
                "src": "1042:95:12"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4061,
                "name": "ParameterList",
                "src": "1145:0:12"
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
                                      "referencedDeclaration": 4041,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 4062,
                                    "name": "Identifier",
                                    "src": "1155:22:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4055,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 4063,
                                    "name": "Identifier",
                                    "src": "1178:12:12"
                                  }
                                ],
                                "id": 4064,
                                "name": "IndexAccess",
                                "src": "1155:36:12"
                              }
                            ],
                            "id": 4065,
                            "name": "MemberAccess",
                            "src": "1155:41:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4057,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 4066,
                            "name": "Identifier",
                            "src": "1197:13:12"
                          }
                        ],
                        "id": 4067,
                        "name": "FunctionCall",
                        "src": "1155:56:12"
                      }
                    ],
                    "id": 4068,
                    "name": "ExpressionStatement",
                    "src": "1155:56:12"
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
                                      "referencedDeclaration": 4047,
                                      "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                      "value": "mockedReturnValue"
                                    },
                                    "id": 4069,
                                    "name": "Identifier",
                                    "src": "1221:17:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4055,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 4070,
                                    "name": "Identifier",
                                    "src": "1239:12:12"
                                  }
                                ],
                                "id": 4072,
                                "name": "IndexAccess",
                                "src": "1221:31:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4057,
                                  "type": "bytes32",
                                  "value": "argsSignature"
                                },
                                "id": 4071,
                                "name": "Identifier",
                                "src": "1253:13:12"
                              }
                            ],
                            "id": 4073,
                            "name": "IndexAccess",
                            "src": "1221:46:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4059,
                              "type": "bytes32",
                              "value": "returnValue"
                            },
                            "id": 4074,
                            "name": "Identifier",
                            "src": "1270:11:12"
                          }
                        ],
                        "id": 4075,
                        "name": "Assignment",
                        "src": "1221:60:12"
                      }
                    ],
                    "id": 4076,
                    "name": "ExpressionStatement",
                    "src": "1221:60:12"
                  }
                ],
                "id": 4077,
                "name": "Block",
                "src": "1145:143:12"
              }
            ],
            "id": 4078,
            "name": "FunctionDefinition",
            "src": "1018:270:12"
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
              "scope": 4214,
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
                      "scope": 4094,
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
                        "id": 4079,
                        "name": "ElementaryTypeName",
                        "src": "1322:6:12"
                      }
                    ],
                    "id": 4080,
                    "name": "VariableDeclaration",
                    "src": "1322:19:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 4094,
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
                        "id": 4081,
                        "name": "ElementaryTypeName",
                        "src": "1343:7:12"
                      }
                    ],
                    "id": 4082,
                    "name": "VariableDeclaration",
                    "src": "1343:21:12"
                  }
                ],
                "id": 4083,
                "name": "ParameterList",
                "src": "1321:44:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_mockReturnValue",
                      "scope": 4094,
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
                        "id": 4084,
                        "name": "ElementaryTypeName",
                        "src": "1411:7:12"
                      }
                    ],
                    "id": 4085,
                    "name": "VariableDeclaration",
                    "src": "1411:24:12"
                  }
                ],
                "id": 4086,
                "name": "ParameterList",
                "src": "1410:26:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4086
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
                                  "referencedDeclaration": 4047,
                                  "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                  "value": "mockedReturnValue"
                                },
                                "id": 4087,
                                "name": "Identifier",
                                "src": "1458:17:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4080,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 4088,
                                "name": "Identifier",
                                "src": "1476:12:12"
                              }
                            ],
                            "id": 4089,
                            "name": "IndexAccess",
                            "src": "1458:31:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4082,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 4090,
                            "name": "Identifier",
                            "src": "1490:13:12"
                          }
                        ],
                        "id": 4091,
                        "name": "IndexAccess",
                        "src": "1458:46:12"
                      }
                    ],
                    "id": 4092,
                    "name": "Return",
                    "src": "1451:53:12"
                  }
                ],
                "id": 4093,
                "name": "Block",
                "src": "1441:70:12"
              }
            ],
            "id": 4094,
            "name": "FunctionDefinition",
            "src": "1294:217:12"
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
              "scope": 4214,
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
                "id": 4095,
                "name": "ParameterList",
                "src": "1531:2:12"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4096,
                "name": "ParameterList",
                "src": "1541:0:12"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            4098
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 4167,
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
                                "id": 4097,
                                "name": "ElementaryTypeName",
                                "src": "1556:4:12"
                              }
                            ],
                            "id": 4098,
                            "name": "VariableDeclaration",
                            "src": "1556:6:12"
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
                            "id": 4099,
                            "name": "Literal",
                            "src": "1565:1:12"
                          }
                        ],
                        "id": 4100,
                        "name": "VariableDeclarationStatement",
                        "src": "1556:10:12"
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
                              "referencedDeclaration": 4098,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 4101,
                            "name": "Identifier",
                            "src": "1568:1:12"
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
                            "id": 4102,
                            "name": "Literal",
                            "src": "1572:2:12"
                          }
                        ],
                        "id": 4103,
                        "name": "BinaryOperation",
                        "src": "1568:6:12"
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
                                  "referencedDeclaration": 4098,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 4104,
                                "name": "Identifier",
                                "src": "1576:1:12"
                              }
                            ],
                            "id": 4105,
                            "name": "UnaryOperation",
                            "src": "1576:3:12"
                          }
                        ],
                        "id": 4106,
                        "name": "ExpressionStatement",
                        "src": "1576:3:12"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                4108
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "functionName",
                                  "scope": 4167,
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
                                    "id": 4107,
                                    "name": "ElementaryTypeName",
                                    "src": "1595:6:12"
                                  }
                                ],
                                "id": 4108,
                                "name": "VariableDeclaration",
                                "src": "1595:26:12"
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
                                          "referencedDeclaration": 4213,
                                          "type": "function () returns (string memory[10] memory)",
                                          "value": "getFunctionList"
                                        },
                                        "id": 4109,
                                        "name": "Identifier",
                                        "src": "1624:15:12"
                                      }
                                    ],
                                    "id": 4110,
                                    "name": "FunctionCall",
                                    "src": "1624:17:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4098,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 4111,
                                    "name": "Identifier",
                                    "src": "1642:1:12"
                                  }
                                ],
                                "id": 4112,
                                "name": "IndexAccess",
                                "src": "1624:20:12"
                              }
                            ],
                            "id": 4113,
                            "name": "VariableDeclarationStatement",
                            "src": "1595:49:12"
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
                                            "id": 4114,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "1663:5:12"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 4108,
                                              "type": "string memory",
                                              "value": "functionName"
                                            },
                                            "id": 4115,
                                            "name": "Identifier",
                                            "src": "1669:12:12"
                                          }
                                        ],
                                        "id": 4116,
                                        "name": "FunctionCall",
                                        "src": "1663:19:12"
                                      }
                                    ],
                                    "id": 4117,
                                    "name": "MemberAccess",
                                    "src": "1663:26:12"
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
                                    "id": 4118,
                                    "name": "Literal",
                                    "src": "1693:1:12"
                                  }
                                ],
                                "id": 4119,
                                "name": "BinaryOperation",
                                "src": "1663:31:12"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "assignments": [
                                            4121
                                          ]
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "constant": false,
                                              "name": "j",
                                              "scope": 4167,
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
                                                "id": 4120,
                                                "name": "ElementaryTypeName",
                                                "src": "1719:4:12"
                                              }
                                            ],
                                            "id": 4121,
                                            "name": "VariableDeclaration",
                                            "src": "1719:6:12"
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
                                            "id": 4122,
                                            "name": "Literal",
                                            "src": "1728:1:12"
                                          }
                                        ],
                                        "id": 4123,
                                        "name": "VariableDeclarationStatement",
                                        "src": "1719:10:12"
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
                                              "referencedDeclaration": 4121,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 4124,
                                            "name": "Identifier",
                                            "src": "1731:1:12"
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
                                                      "referencedDeclaration": 4041,
                                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                                      "value": "functionCallSignatures"
                                                    },
                                                    "id": 4125,
                                                    "name": "Identifier",
                                                    "src": "1735:22:12"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 4108,
                                                      "type": "string memory",
                                                      "value": "functionName"
                                                    },
                                                    "id": 4126,
                                                    "name": "Identifier",
                                                    "src": "1758:12:12"
                                                  }
                                                ],
                                                "id": 4127,
                                                "name": "IndexAccess",
                                                "src": "1735:36:12"
                                              }
                                            ],
                                            "id": 4128,
                                            "name": "MemberAccess",
                                            "src": "1735:43:12"
                                          }
                                        ],
                                        "id": 4129,
                                        "name": "BinaryOperation",
                                        "src": "1731:47:12"
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
                                                  "referencedDeclaration": 4121,
                                                  "type": "uint256",
                                                  "value": "j"
                                                },
                                                "id": 4130,
                                                "name": "Identifier",
                                                "src": "1780:1:12"
                                              }
                                            ],
                                            "id": 4131,
                                            "name": "UnaryOperation",
                                            "src": "1780:3:12"
                                          }
                                        ],
                                        "id": 4132,
                                        "name": "ExpressionStatement",
                                        "src": "1780:3:12"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "assignments": [
                                                4134
                                              ]
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "constant": false,
                                                  "name": "callSignature",
                                                  "scope": 4167,
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
                                                    "id": 4133,
                                                    "name": "ElementaryTypeName",
                                                    "src": "1807:7:12"
                                                  }
                                                ],
                                                "id": 4134,
                                                "name": "VariableDeclaration",
                                                "src": "1807:21:12"
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
                                                          "referencedDeclaration": 4041,
                                                          "type": "mapping(string memory => bytes32[] storage ref)",
                                                          "value": "functionCallSignatures"
                                                        },
                                                        "id": 4135,
                                                        "name": "Identifier",
                                                        "src": "1831:22:12"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4108,
                                                          "type": "string memory",
                                                          "value": "functionName"
                                                        },
                                                        "id": 4136,
                                                        "name": "Identifier",
                                                        "src": "1854:12:12"
                                                      }
                                                    ],
                                                    "id": 4137,
                                                    "name": "IndexAccess",
                                                    "src": "1831:36:12"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 4121,
                                                      "type": "uint256",
                                                      "value": "j"
                                                    },
                                                    "id": 4138,
                                                    "name": "Identifier",
                                                    "src": "1868:1:12"
                                                  }
                                                ],
                                                "id": 4139,
                                                "name": "IndexAccess",
                                                "src": "1831:39:12"
                                              }
                                            ],
                                            "id": 4140,
                                            "name": "VariableDeclarationStatement",
                                            "src": "1807:63:12"
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
                                                              "referencedDeclaration": 4053,
                                                              "type": "mapping(string memory => mapping(bytes32 => bool))",
                                                              "value": "functionCalls"
                                                            },
                                                            "id": 4141,
                                                            "name": "Identifier",
                                                            "src": "1899:13:12"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 4108,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 4142,
                                                            "name": "Identifier",
                                                            "src": "1913:12:12"
                                                          }
                                                        ],
                                                        "id": 4143,
                                                        "name": "IndexAccess",
                                                        "src": "1899:27:12"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4134,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 4144,
                                                        "name": "Identifier",
                                                        "src": "1927:13:12"
                                                      }
                                                    ],
                                                    "id": 4145,
                                                    "name": "IndexAccess",
                                                    "src": "1899:42:12"
                                                  }
                                                ],
                                                "id": 4146,
                                                "name": "UnaryOperation",
                                                "src": "1892:49:12"
                                              }
                                            ],
                                            "id": 4147,
                                            "name": "ExpressionStatement",
                                            "src": "1892:49:12"
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
                                                              "referencedDeclaration": 4047,
                                                              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                                              "value": "mockedReturnValue"
                                                            },
                                                            "id": 4148,
                                                            "name": "Identifier",
                                                            "src": "1970:17:12"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 4108,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 4149,
                                                            "name": "Identifier",
                                                            "src": "1988:12:12"
                                                          }
                                                        ],
                                                        "id": 4150,
                                                        "name": "IndexAccess",
                                                        "src": "1970:31:12"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4134,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 4151,
                                                        "name": "Identifier",
                                                        "src": "2002:13:12"
                                                      }
                                                    ],
                                                    "id": 4152,
                                                    "name": "IndexAccess",
                                                    "src": "1970:46:12"
                                                  }
                                                ],
                                                "id": 4153,
                                                "name": "UnaryOperation",
                                                "src": "1963:53:12"
                                              }
                                            ],
                                            "id": 4154,
                                            "name": "ExpressionStatement",
                                            "src": "1963:53:12"
                                          }
                                        ],
                                        "id": 4155,
                                        "name": "Block",
                                        "src": "1785:250:12"
                                      }
                                    ],
                                    "id": 4156,
                                    "name": "ForStatement",
                                    "src": "1714:321:12"
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
                                                  "referencedDeclaration": 4041,
                                                  "type": "mapping(string memory => bytes32[] storage ref)",
                                                  "value": "functionCallSignatures"
                                                },
                                                "id": 4157,
                                                "name": "Identifier",
                                                "src": "2060:22:12"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 4108,
                                                  "type": "string memory",
                                                  "value": "functionName"
                                                },
                                                "id": 4158,
                                                "name": "Identifier",
                                                "src": "2083:12:12"
                                              }
                                            ],
                                            "id": 4159,
                                            "name": "IndexAccess",
                                            "src": "2060:36:12"
                                          }
                                        ],
                                        "id": 4160,
                                        "name": "UnaryOperation",
                                        "src": "2053:43:12"
                                      }
                                    ],
                                    "id": 4161,
                                    "name": "ExpressionStatement",
                                    "src": "2053:43:12"
                                  }
                                ],
                                "id": 4162,
                                "name": "Block",
                                "src": "1696:415:12"
                              }
                            ],
                            "id": 4163,
                            "name": "IfStatement",
                            "src": "1659:452:12"
                          }
                        ],
                        "id": 4164,
                        "name": "Block",
                        "src": "1581:540:12"
                      }
                    ],
                    "id": 4165,
                    "name": "ForStatement",
                    "src": "1551:570:12"
                  }
                ],
                "id": 4166,
                "name": "Block",
                "src": "1541:586:12"
              }
            ],
            "id": 4167,
            "name": "FunctionDefinition",
            "src": "1517:610:12"
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
              "scope": 4214,
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
                      "scope": 4190,
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
                        "id": 4168,
                        "name": "ElementaryTypeName",
                        "src": "2165:6:12"
                      }
                    ],
                    "id": 4169,
                    "name": "VariableDeclaration",
                    "src": "2165:19:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 4190,
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
                        "id": 4170,
                        "name": "ElementaryTypeName",
                        "src": "2186:7:12"
                      }
                    ],
                    "id": 4171,
                    "name": "VariableDeclaration",
                    "src": "2186:12:12"
                  }
                ],
                "id": 4172,
                "name": "ParameterList",
                "src": "2164:35:12"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4173,
                "name": "ParameterList",
                "src": "2221:0:12"
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
                                      "referencedDeclaration": 4053,
                                      "type": "mapping(string memory => mapping(bytes32 => bool))",
                                      "value": "functionCalls"
                                    },
                                    "id": 4174,
                                    "name": "Identifier",
                                    "src": "2231:13:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4169,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 4175,
                                    "name": "Identifier",
                                    "src": "2245:12:12"
                                  }
                                ],
                                "id": 4177,
                                "name": "IndexAccess",
                                "src": "2231:27:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4171,
                                  "type": "bytes32",
                                  "value": "args"
                                },
                                "id": 4176,
                                "name": "Identifier",
                                "src": "2259:4:12"
                              }
                            ],
                            "id": 4178,
                            "name": "IndexAccess",
                            "src": "2231:33:12"
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
                            "id": 4179,
                            "name": "Literal",
                            "src": "2267:4:12"
                          }
                        ],
                        "id": 4180,
                        "name": "Assignment",
                        "src": "2231:40:12"
                      }
                    ],
                    "id": 4181,
                    "name": "ExpressionStatement",
                    "src": "2231:40:12"
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
                                      "referencedDeclaration": 4041,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 4182,
                                    "name": "Identifier",
                                    "src": "2281:22:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4169,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 4183,
                                    "name": "Identifier",
                                    "src": "2304:12:12"
                                  }
                                ],
                                "id": 4184,
                                "name": "IndexAccess",
                                "src": "2281:36:12"
                              }
                            ],
                            "id": 4185,
                            "name": "MemberAccess",
                            "src": "2281:41:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4171,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 4186,
                            "name": "Identifier",
                            "src": "2323:4:12"
                          }
                        ],
                        "id": 4187,
                        "name": "FunctionCall",
                        "src": "2281:47:12"
                      }
                    ],
                    "id": 4188,
                    "name": "ExpressionStatement",
                    "src": "2281:47:12"
                  }
                ],
                "id": 4189,
                "name": "Block",
                "src": "2221:114:12"
              }
            ],
            "id": 4190,
            "name": "FunctionDefinition",
            "src": "2133:202:12"
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
              "scope": 4214,
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
                      "scope": 4206,
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
                        "id": 4191,
                        "name": "ElementaryTypeName",
                        "src": "2376:6:12"
                      }
                    ],
                    "id": 4192,
                    "name": "VariableDeclaration",
                    "src": "2376:19:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 4206,
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
                        "id": 4193,
                        "name": "ElementaryTypeName",
                        "src": "2397:7:12"
                      }
                    ],
                    "id": 4194,
                    "name": "VariableDeclaration",
                    "src": "2397:12:12"
                  }
                ],
                "id": 4195,
                "name": "ParameterList",
                "src": "2375:35:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "wasCalled",
                      "scope": 4206,
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
                        "id": 4196,
                        "name": "ElementaryTypeName",
                        "src": "2458:4:12"
                      }
                    ],
                    "id": 4197,
                    "name": "VariableDeclaration",
                    "src": "2458:14:12"
                  }
                ],
                "id": 4198,
                "name": "ParameterList",
                "src": "2457:16:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4198
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
                                  "referencedDeclaration": 4053,
                                  "type": "mapping(string memory => mapping(bytes32 => bool))",
                                  "value": "functionCalls"
                                },
                                "id": 4199,
                                "name": "Identifier",
                                "src": "2495:13:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4192,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 4200,
                                "name": "Identifier",
                                "src": "2509:12:12"
                              }
                            ],
                            "id": 4201,
                            "name": "IndexAccess",
                            "src": "2495:27:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4194,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 4202,
                            "name": "Identifier",
                            "src": "2523:4:12"
                          }
                        ],
                        "id": 4203,
                        "name": "IndexAccess",
                        "src": "2495:33:12"
                      }
                    ],
                    "id": 4204,
                    "name": "Return",
                    "src": "2488:40:12"
                  }
                ],
                "id": 4205,
                "name": "Block",
                "src": "2478:57:12"
              }
            ],
            "id": 4206,
            "name": "FunctionDefinition",
            "src": "2341:194:12"
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
              "scope": 4214,
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
                "id": 4207,
                "name": "ParameterList",
                "src": "2565:2:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionNames",
                      "scope": 4213,
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
                            "id": 4208,
                            "name": "ElementaryTypeName",
                            "src": "2586:6:12"
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
                            "id": 4209,
                            "name": "Literal",
                            "src": "2593:2:12"
                          }
                        ],
                        "id": 4210,
                        "name": "ArrayTypeName",
                        "src": "2586:10:12"
                      }
                    ],
                    "id": 4211,
                    "name": "VariableDeclaration",
                    "src": "2586:24:12"
                  }
                ],
                "id": 4212,
                "name": "ParameterList",
                "src": "2585:26:12"
              }
            ],
            "id": 4213,
            "name": "FunctionDefinition",
            "src": "2541:71:12"
          }
        ],
        "id": 4214,
        "name": "ContractDefinition",
        "src": "610:2004:12"
      }
    ],
    "id": 4215,
    "name": "SourceUnit",
    "src": "584:2031:12"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-27T04:31:52.464Z"
}