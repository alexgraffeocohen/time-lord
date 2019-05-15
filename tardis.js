class Tardis {
  activate() {
    startEngine()
  }

  startEngine() {
    console.log("starting engine!")
  }
}

const tardis = new Tardis()
tardis.activate()
