export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a7230582085b98ec293e9438e310bbebacc08b922030089634f6ded62a1c4066506c8945a0029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a7230582085b98ec293e9438e310bbebacc08b922030089634f6ded62a1c4066506c8945a0029",
  "sourceMap": "117:1022:21:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1022:21:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Substracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          5435
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 5339,
        "name": "PragmaDirective",
        "src": "0:24:21"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "library",
          "documentation": "@title SafeMath\n@dev Math operations with safety checks that throw on error",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            5435
          ],
          "name": "SafeMath",
          "scope": 5436
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "mul",
              "payable": false,
              "scope": 5435,
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
                      "name": "a",
                      "scope": 5372,
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
                        "id": 5340,
                        "name": "ElementaryTypeName",
                        "src": "216:7:21"
                      }
                    ],
                    "id": 5341,
                    "name": "VariableDeclaration",
                    "src": "216:9:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5372,
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
                        "id": 5342,
                        "name": "ElementaryTypeName",
                        "src": "227:7:21"
                      }
                    ],
                    "id": 5343,
                    "name": "VariableDeclaration",
                    "src": "227:9:21"
                  }
                ],
                "id": 5344,
                "name": "ParameterList",
                "src": "215:22:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5372,
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
                        "id": 5345,
                        "name": "ElementaryTypeName",
                        "src": "261:7:21"
                      }
                    ],
                    "id": 5346,
                    "name": "VariableDeclaration",
                    "src": "261:7:21"
                  }
                ],
                "id": 5347,
                "name": "ParameterList",
                "src": "260:9:21"
              },
              {
                "children": [
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
                              "referencedDeclaration": 5341,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5348,
                            "name": "Identifier",
                            "src": "280:1:21"
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
                            "id": 5349,
                            "name": "Literal",
                            "src": "285:1:21"
                          }
                        ],
                        "id": 5350,
                        "name": "BinaryOperation",
                        "src": "280:6:21"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 5347
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
                                "id": 5351,
                                "name": "Literal",
                                "src": "303:1:21"
                              }
                            ],
                            "id": 5352,
                            "name": "Return",
                            "src": "296:8:21"
                          }
                        ],
                        "id": 5353,
                        "name": "Block",
                        "src": "288:23:21"
                      }
                    ],
                    "id": 5354,
                    "name": "IfStatement",
                    "src": "276:35:21"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        5356
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 5372,
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
                            "id": 5355,
                            "name": "ElementaryTypeName",
                            "src": "316:7:21"
                          }
                        ],
                        "id": 5356,
                        "name": "VariableDeclaration",
                        "src": "316:9:21"
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
                              "referencedDeclaration": 5341,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5357,
                            "name": "Identifier",
                            "src": "328:1:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5343,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5358,
                            "name": "Identifier",
                            "src": "332:1:21"
                          }
                        ],
                        "id": 5359,
                        "name": "BinaryOperation",
                        "src": "328:5:21"
                      }
                    ],
                    "id": 5360,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:21"
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
                              "referencedDeclaration": 5569,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 5361,
                            "name": "Identifier",
                            "src": "339:6:21"
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
                              "operator": "==",
                              "type": "bool"
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
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5356,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 5362,
                                    "name": "Identifier",
                                    "src": "346:1:21"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5341,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 5363,
                                    "name": "Identifier",
                                    "src": "350:1:21"
                                  }
                                ],
                                "id": 5364,
                                "name": "BinaryOperation",
                                "src": "346:5:21"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5343,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 5365,
                                "name": "Identifier",
                                "src": "355:1:21"
                              }
                            ],
                            "id": 5366,
                            "name": "BinaryOperation",
                            "src": "346:10:21"
                          }
                        ],
                        "id": 5367,
                        "name": "FunctionCall",
                        "src": "339:18:21"
                      }
                    ],
                    "id": 5368,
                    "name": "ExpressionStatement",
                    "src": "339:18:21"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5347
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 5356,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 5369,
                        "name": "Identifier",
                        "src": "370:1:21"
                      }
                    ],
                    "id": 5370,
                    "name": "Return",
                    "src": "363:8:21"
                  }
                ],
                "id": 5371,
                "name": "Block",
                "src": "270:106:21"
              }
            ],
            "id": 5372,
            "name": "FunctionDefinition",
            "src": "203:173:21"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "div",
              "payable": false,
              "scope": 5435,
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
                      "name": "a",
                      "scope": 5390,
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
                        "id": 5373,
                        "name": "ElementaryTypeName",
                        "src": "471:7:21"
                      }
                    ],
                    "id": 5374,
                    "name": "VariableDeclaration",
                    "src": "471:9:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5390,
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
                        "id": 5375,
                        "name": "ElementaryTypeName",
                        "src": "482:7:21"
                      }
                    ],
                    "id": 5376,
                    "name": "VariableDeclaration",
                    "src": "482:9:21"
                  }
                ],
                "id": 5377,
                "name": "ParameterList",
                "src": "470:22:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5390,
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
                        "id": 5378,
                        "name": "ElementaryTypeName",
                        "src": "516:7:21"
                      }
                    ],
                    "id": 5379,
                    "name": "VariableDeclaration",
                    "src": "516:7:21"
                  }
                ],
                "id": 5380,
                "name": "ParameterList",
                "src": "515:9:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        5382
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 5390,
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
                            "id": 5381,
                            "name": "ElementaryTypeName",
                            "src": "605:7:21"
                          }
                        ],
                        "id": 5382,
                        "name": "VariableDeclaration",
                        "src": "605:9:21"
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
                          "operator": "/",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5374,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5383,
                            "name": "Identifier",
                            "src": "617:1:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5376,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5384,
                            "name": "Identifier",
                            "src": "621:1:21"
                          }
                        ],
                        "id": 5385,
                        "name": "BinaryOperation",
                        "src": "617:5:21"
                      }
                    ],
                    "id": 5386,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:21"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5380
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 5382,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 5387,
                        "name": "Identifier",
                        "src": "717:1:21"
                      }
                    ],
                    "id": 5388,
                    "name": "Return",
                    "src": "710:8:21"
                  }
                ],
                "id": 5389,
                "name": "Block",
                "src": "525:198:21"
              }
            ],
            "id": 5390,
            "name": "FunctionDefinition",
            "src": "458:265:21"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "sub",
              "payable": false,
              "scope": 5435,
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
                      "name": "a",
                      "scope": 5410,
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
                        "id": 5391,
                        "name": "ElementaryTypeName",
                        "src": "849:7:21"
                      }
                    ],
                    "id": 5392,
                    "name": "VariableDeclaration",
                    "src": "849:9:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5410,
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
                        "id": 5393,
                        "name": "ElementaryTypeName",
                        "src": "860:7:21"
                      }
                    ],
                    "id": 5394,
                    "name": "VariableDeclaration",
                    "src": "860:9:21"
                  }
                ],
                "id": 5395,
                "name": "ParameterList",
                "src": "848:22:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5410,
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
                        "id": 5396,
                        "name": "ElementaryTypeName",
                        "src": "894:7:21"
                      }
                    ],
                    "id": 5397,
                    "name": "VariableDeclaration",
                    "src": "894:7:21"
                  }
                ],
                "id": 5398,
                "name": "ParameterList",
                "src": "893:9:21"
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
                              "referencedDeclaration": 5569,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 5399,
                            "name": "Identifier",
                            "src": "909:6:21"
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
                                  "referencedDeclaration": 5394,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 5400,
                                "name": "Identifier",
                                "src": "916:1:21"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5392,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 5401,
                                "name": "Identifier",
                                "src": "921:1:21"
                              }
                            ],
                            "id": 5402,
                            "name": "BinaryOperation",
                            "src": "916:6:21"
                          }
                        ],
                        "id": 5403,
                        "name": "FunctionCall",
                        "src": "909:14:21"
                      }
                    ],
                    "id": 5404,
                    "name": "ExpressionStatement",
                    "src": "909:14:21"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5398
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
                          "operator": "-",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5392,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5405,
                            "name": "Identifier",
                            "src": "936:1:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5394,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5406,
                            "name": "Identifier",
                            "src": "940:1:21"
                          }
                        ],
                        "id": 5407,
                        "name": "BinaryOperation",
                        "src": "936:5:21"
                      }
                    ],
                    "id": 5408,
                    "name": "Return",
                    "src": "929:12:21"
                  }
                ],
                "id": 5409,
                "name": "Block",
                "src": "903:43:21"
              }
            ],
            "id": 5410,
            "name": "FunctionDefinition",
            "src": "836:110:21"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "add",
              "payable": false,
              "scope": 5435,
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
                      "name": "a",
                      "scope": 5434,
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
                        "id": 5411,
                        "name": "ElementaryTypeName",
                        "src": "1021:7:21"
                      }
                    ],
                    "id": 5412,
                    "name": "VariableDeclaration",
                    "src": "1021:9:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5434,
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
                        "id": 5413,
                        "name": "ElementaryTypeName",
                        "src": "1032:7:21"
                      }
                    ],
                    "id": 5414,
                    "name": "VariableDeclaration",
                    "src": "1032:9:21"
                  }
                ],
                "id": 5415,
                "name": "ParameterList",
                "src": "1020:22:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5434,
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
                        "id": 5416,
                        "name": "ElementaryTypeName",
                        "src": "1066:7:21"
                      }
                    ],
                    "id": 5417,
                    "name": "VariableDeclaration",
                    "src": "1066:7:21"
                  }
                ],
                "id": 5418,
                "name": "ParameterList",
                "src": "1065:9:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        5420
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 5434,
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
                            "id": 5419,
                            "name": "ElementaryTypeName",
                            "src": "1081:7:21"
                          }
                        ],
                        "id": 5420,
                        "name": "VariableDeclaration",
                        "src": "1081:9:21"
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
                          "operator": "+",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5412,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5421,
                            "name": "Identifier",
                            "src": "1093:1:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5414,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5422,
                            "name": "Identifier",
                            "src": "1097:1:21"
                          }
                        ],
                        "id": 5423,
                        "name": "BinaryOperation",
                        "src": "1093:5:21"
                      }
                    ],
                    "id": 5424,
                    "name": "VariableDeclarationStatement",
                    "src": "1081:17:21"
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
                              "referencedDeclaration": 5569,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 5425,
                            "name": "Identifier",
                            "src": "1104:6:21"
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
                                  "referencedDeclaration": 5420,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 5426,
                                "name": "Identifier",
                                "src": "1111:1:21"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5412,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 5427,
                                "name": "Identifier",
                                "src": "1116:1:21"
                              }
                            ],
                            "id": 5428,
                            "name": "BinaryOperation",
                            "src": "1111:6:21"
                          }
                        ],
                        "id": 5429,
                        "name": "FunctionCall",
                        "src": "1104:14:21"
                      }
                    ],
                    "id": 5430,
                    "name": "ExpressionStatement",
                    "src": "1104:14:21"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5418
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 5420,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 5431,
                        "name": "Identifier",
                        "src": "1131:1:21"
                      }
                    ],
                    "id": 5432,
                    "name": "Return",
                    "src": "1124:8:21"
                  }
                ],
                "id": 5433,
                "name": "Block",
                "src": "1075:62:21"
              }
            ],
            "id": 5434,
            "name": "FunctionDefinition",
            "src": "1008:129:21"
          }
        ],
        "id": 5435,
        "name": "ContractDefinition",
        "src": "117:1022:21"
      }
    ],
    "id": 5436,
    "name": "SourceUnit",
    "src": "0:1140:21"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-27T04:31:52.485Z"
}