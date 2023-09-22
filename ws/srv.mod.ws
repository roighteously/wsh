ws::const express = mod::glbreq("express")
ws::const http = mod::glbreq("http")
ws::const app = express::run

ws::const server = http.createServer(app)

server.listen(9000, () => {
	ws::print(@macro:willysaid pl type::str("Wow! We're running on willysoft."))
})