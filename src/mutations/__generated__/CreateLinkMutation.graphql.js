/**
 * @flow
 * @relayHash 42525f09f5ddd387d29d3b2695aac08d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateLinkMutationVariables = {|
  input: {
    description: string;
    url: string;
    postedById?: ?string;
    votesIds?: ?$ReadOnlyArray<string>;
    votes?: ?$ReadOnlyArray<{
      userId?: ?string;
    }>;
    clientMutationId: string;
  };
|};

export type CreateLinkMutationResponse = {|
  +createLink: ?{|
    +link: ?{|
      +id: string;
      +createdAt: any;
      +url: string;
      +description: string;
    |};
  |};
|};
*/


/*
mutation CreateLinkMutation(
  $input: CreateLinkInput!
) {
  createLink(input: $input) {
    link {
      id
      createdAt
      url
      description
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateLinkInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateLinkMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateLinkInput!"
          }
        ],
        "concreteType": "CreateLinkPayload",
        "name": "createLink",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Link",
            "name": "link",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "createdAt",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "url",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateLinkMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateLinkInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateLinkMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateLinkInput!"
          }
        ],
        "concreteType": "CreateLinkPayload",
        "name": "createLink",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Link",
            "name": "link",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "createdAt",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "url",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateLinkMutation(\n  $input: CreateLinkInput!\n) {\n  createLink(input: $input) {\n    link {\n      id\n      createdAt\n      url\n      description\n    }\n  }\n}\n"
};

module.exports = batch;
