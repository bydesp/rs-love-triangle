/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(lovers = []) {
   if (lovers.length < 3) return 0
   let counter = 0

   lovers.forEach((value, index) => {
     const firstLover = index
     const secondLover = value - 1
     const thirdLover = lovers[secondLover] - 1

     if (lovers[firstLover] === undefined || lovers[secondLover] === undefined || lovers[thirdLover] == undefined) return
     if (firstLover === secondLover || firstLover === thirdLover || secondLover === thirdLover) return

     if (lovers[thirdLover] - 1 === firstLover) {
       lovers[firstLover] = lovers[secondLover] = lovers[thirdLover] = undefined
       counter++;
     }
   })

   return counter
};
