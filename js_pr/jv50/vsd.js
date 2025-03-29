const buttler = {
    uname : function(){
        return "hi bro!"
    }
}

const heir = {
    uname : function(){
        return "hi lanj___"
    }
}

buttler.__proto__ = heir

niam = buttler.uname()
console.log(buttler.__proto__.uname())