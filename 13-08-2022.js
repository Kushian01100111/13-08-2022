// Take the following IPv4 address: 128.32.10.1

// This address has 4 octets where each octet is a single byte (or 8 bits).

// 1st octet 128 has the binary representation: 10000000
// 2nd octet 32 has the binary representation: 00100000
// 3rd octet 10 has the binary representation: 00001010
// 4th octet 1 has the binary representation: 00000001
// So 128.32.10.1 == 10000000.00100000.00001010.00000001

// Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

// Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

// Examples
// 2149583361 ==> "128.32.10.1"
// 32         ==> "0.0.0.32"
// 0          ==> "0.0.0.0"


function int32ToIp(int32){
    let int32ToBinary = (n) =>{
      return n.toString(2)
    }
    let binaryToInt32 = (n) =>{
      return parseInt(n, 2)
    }
    
    let number = int32ToBinary(int32).split("")
    let zero = 0;
    
    let finalIP4 = [
        [0],
        [0],
        [0],
        [0],
    ]

if(number.length !== 1){
    for(let i = 0;  finalIP4[3].length < 2 ; i++){
        if(i === 3){
            finalIP4[i].push((number.splice(0,number.length + 1).join(""))) 
            finalIP4.reverse()
        }else{
            finalIP4[i].push((number.splice(number.length - 8,number.length - 1).join(""))) 
        }
    }
}
    
    return `${binaryToInt32(finalIP4[0].reverse()[0])}.${binaryToInt32(finalIP4[1].reverse()[0])}.${binaryToInt32(finalIP4[2].reverse()[0])}.${binaryToInt32(finalIP4[3].reverse()[0])}`
  }

  int32ToIp(60122482)