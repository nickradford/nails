dashboard = {
  template: "master",
  index : index,
  goodbye : goodbye
}

function index() {
    return {
        str:"Hello",
        name:"Nick Radford",
        path: "dashboard/index"
    }
}
function goodbye() {
  return {
      str:"Goodbye",
      name:"Mr. Radford",
      path: "dashboard/goodbye"
  }
}


module.exports = dashboard