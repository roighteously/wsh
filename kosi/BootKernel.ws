ws::print("Boot kernel")

@export (mem) => {
	ws::print("Initializing screen.")
	@CON.clear();
	mem.ms("BootStage.0.ClearConsole", true);
	ws::print("[00:00:00] Init: OS Clock")
	@set var sysclock = 0;
setInterval(() => sysclock++, 1)
	ws::print("[" + sysclock + "] init in sysclockec")
}
