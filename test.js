const test = require("ava")
const isUbuntu = require(".")

test("main", t => {
	t.is(typeof isUbuntu, "boolean")
})
