const Looper = require("./Looper")
const OddNotifier = require("./oddNotifier")
const PrimeNotifier = require("./primeNotifier")

const l = new Looper(1, 100000)
l.addObserver(new OddNotifier())
l.addObserver(new PrimeNotifier())
l.run();
