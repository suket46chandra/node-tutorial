//global -can be accessed anywhere
//__dirbame-path to current directory
//__filename-file name
// require-function to use modules
//module-info about current module
// process-info about environment where the program is getting executed

console.log(__dirname)
function printer(){
    console.log('hello world')
}
setInterval(printer,3000)

// setInterval(()=>{
//     console.log('hello world')
// },1000)


// function makeUppercase(value){
//     console.log(value.toUpperCase())
// }

// function handleName(name,cb){
//     const fullName=`${name} smith`
//     cb(fullName)
// }
// handleName('peter',makeUppercase)