"use strict"
const fs = require("fs")
const ini = require("ini")

const isUbuntu = () => {
	if (process.platform !== "linux") {
		return false
	}

	try {
		return ini.parse(fs.readFileSync("/etc/lsb-release", "utf8")).DISTRIB_ID === "Ubuntu"
	} catch {
		return false
	}
}

module.exports = isUbuntu()
