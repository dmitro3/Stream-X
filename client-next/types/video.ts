export type Video = {
  "version": "0.1.0",
  "name": "video",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "videoAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "update",
      "accounts": [
        {
          "name": "videoAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "message",
          "type": {
            "defined": "Message"
          }
        }
      ]
    },
    {
      "name": "buy",
      "accounts": [
        {
          "name": "videoAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "message",
          "type": {
            "defined": "Message"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "video",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "message",
            "type": {
              "defined": "Message"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Message",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "text",
            "type": "string"
          },
          {
            "name": "layout",
            "type": "u8"
          }
        ]
      }
    }
  ]
};

export const IDL: Video = {
  "version": "0.1.0",
  "name": "video",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "videoAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "update",
      "accounts": [
        {
          "name": "videoAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "message",
          "type": {
            "defined": "Message"
          }
        }
      ]
    },
    {
      "name": "buy",
      "accounts": [
        {
          "name": "videoAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "message",
          "type": {
            "defined": "Message"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "video",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "message",
            "type": {
              "defined": "Message"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Message",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "text",
            "type": "string"
          },
          {
            "name": "layout",
            "type": "u8"
          }
        ]
      }
    }
  ]
};
