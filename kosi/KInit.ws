ws::const KOSI@@VERSION = type::str("0.0.1")
ws::const KInit = true

ws::print("KInit: Creating empty mem")

ws::const OSIMEM = {};

ws::print("KInit: Making accessors");

mod::init MemSet(k, v) {
@get OSIMEM[k] = v
ends

mod::init MemGet(k) {
	return @get OSIMEM[k]
ends

mod::init MemLen starts
	return @get OSIMEM.length
ends

ws::print("[IN: KRNShell]\nKInit@Test1: buffertest")

mod::MemSet("buf", Buffer.from("Buffer test success!"))

ws::print(mod::MemGet("buf") pl "\n[OUT: KRNShell]")

ws::print("KInit: Packaging Mem*")

ws::const memfun = {
	ms: mod::MemSet,
	mg: mod::MemGet,
	ml: mod::MemLen
}

ws::print("KInit: Handing over to KITest")

mod::glbreq("./KITest.ws")(@get memfun)

ws::print("KInit2: Setting up SyscallTree")

ws::const SyscallTree = {	
	sc1: () => ws::print('System Call 1 [Test] called.'),
	prn: (...p) => ws::print(p.join(" "))
ends

@get memfun['sc'] = @get SyscallTree;

ws::print("KInit: I think we're ready for boot")

ws::print("KInit2: Handing over to BootKernel")

mod::glbreq("./BootKernel.ws")(@get memfun)