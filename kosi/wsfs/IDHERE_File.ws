ws::const filebase = mod::glbreq("./WStructure.ws")

@c Now we'll copy it over into our stuff

ws::const thisFile = copy::object({}, filebase)