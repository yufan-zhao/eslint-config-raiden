/**
 * @see https://eslint.org/docs/developer-guide/shareable-configs
 */
module.exports =
{
    parserOptions:
    {
		"ecmaVersion": 2021,
        // "ecmaFeatures":
        // {
        //     "jsx": true
        // },
        "sourceType": "module"
	},

    env:
    {
        "node": true
    },

	extends:
	[
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/typescript/recommended"
	],

	plugins:
	[
		"@typescript-eslint"
	],

	// parser: "@typescript-eslint/parser",

    /**
     * @see https://eslint.org/docs/rules/
     */
    rules:
    {
        // Possible Problems
        "no-unused-vars": [1,
			{
				"vars": "local",
				"args": "none",
				"ignoreRestSiblings": false,
				"argsIgnorePattern": "^_",
				"caughtErrors": "none"
			}
		],
		// Suggestions
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"quotes": [2, "double", {"allowTemplateLiterals": true}],
		// Layout & Formatting
		"indent": [2, "tab", {
			"SwitchCase": 4
		}],
		"brace-style": [2, "allman", {
			"allowSingleLine": true
		}],
		"semi": [2, "always"],

		/**
		 * ts-eslint-part
		 */
		"@typescript-eslint/no-unused-vars": [1,
			{
				"vars": "local",
				"args": "none",
				"ignoreRestSiblings": false,
				"argsIgnorePattern": "^_",
				"caughtErrors": "none"
			}
		],
		"@typescript-eslint/no-explicit-any": [1,
			{ "ignoreRestArgs": false }
		],
		"@typescript-eslint/explicit-module-boundary-types": [1,
			{
				"allowTypedFunctionExpressions": false
			}
		]
    }
};
