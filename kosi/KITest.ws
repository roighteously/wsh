@export (memstuff) => {
	ws::print("KITest: Testing mem* [1/3] - Import")
	ws::print("KITest: Testing mem* [2/3] - Set")

	memstuff.ms("KITest.MemoryTest", "Hey there, memory works!");

	ws::print("KITest: Testing mem* [3/3] - Get")

	ws::print(memstuff.mg("KITest.MemoryTest"))

	ws::print("KITest: Handing over to KInit2")
}